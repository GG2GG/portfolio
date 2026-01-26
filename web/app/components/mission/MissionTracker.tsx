'use client';

import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface MissionTrackerProps {
    progress: number; // 0 to 1
    activeIndex: number;
}

export default function MissionTracker({ progress, activeIndex }: MissionTrackerProps) {
    const { rive, RiveComponent } = useRive({
        src: '/assets/glass-battery.riv',
        stateMachines: "State Machine 1", // Default common naming
        layout: new Layout({
            fit: Fit.Contain,
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    // Inputs
    // We'll attempt to find a 'charge' or 'level' or 'progress' input.
    // Based on "glass-battery", 'charge' (0-100) is a safe bet for battery fills.
    const chargeInput = useStateMachineInput(rive, "State Machine 1", "charge");
    const levelInput = useStateMachineInput(rive, "State Machine 1", "level"); // Alternate guess
    const progressInput = useStateMachineInput(rive, "State Machine 1", "progress"); // Alternate guess

    useEffect(() => {
        if (rive && (chargeInput || levelInput || progressInput)) {
            // Map 0-1 progress to 0-100 charge
            const value = progress * 100;

            if (chargeInput) chargeInput.value = value;
            if (levelInput) levelInput.value = value;
            if (progressInput) progressInput.value = value;
        }
    }, [progress, rive, chargeInput, levelInput, progressInput]);

    return (
        <div className="fixed right-8 bottom-8 z-50 flex flex-col items-center gap-2 pointer-events-none mix-blend-difference md:mix-blend-normal">
            {/* Label */}
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                System Charge
            </span>

            {/* Rive Canvas */}
            <div className="w-24 h-48 md:w-32 md:h-64 relative">
                <RiveComponent className="w-full h-full" />
            </div>

            <div className="text-xs font-mono text-yellow-500 font-bold">
                {Math.round(progress * 100)}%
            </div>
        </div>
    );
}
