'use client';

import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface MissionBackgroundProps {
    progress?: number;
}

export default function MissionBackground({ progress = 0 }: MissionBackgroundProps) {
    // Setup Rive: Floating.riv
    const { rive, RiveComponent } = useRive({
        src: '/assets/floating.riv',
        stateMachines: "State Machine 1", // Standard default
        layout: new Layout({
            fit: Fit.Cover, // Cover the screen
            alignment: Alignment.Center,
        }),
        autoplay: true,
    });

    // Inputs: "scroll", "progress", "level"?
    // Unknown file structure. We will guess common inputs.
    const scrollInput = useStateMachineInput(rive, "State Machine 1", "scroll");
    const progressInput = useStateMachineInput(rive, "State Machine 1", "progress");

    useEffect(() => {
        if (rive && (scrollInput || progressInput)) {
            // Map 0-1 progress to 0-100 usually
            const value = progress * 100;
            if (scrollInput) scrollInput.value = value;
            if (progressInput) progressInput.value = value;
        }
    }, [progress, rive, scrollInput, progressInput]);

    return (
        <div className="absolute inset-0 bg-black">
            {/* Rive Layer */}
            <div className="absolute inset-0 opacity-80 mix-blend-screen">
                <RiveComponent className="w-full h-full" />
            </div>

            {/* Gradient Overlay (Vignette) to ensure text legibility */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none" />

            {/* Scanline/Texture */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] pointer-events-none"
                style={{ backgroundSize: '50px 50px' }}
            />
        </div>
    );
}
