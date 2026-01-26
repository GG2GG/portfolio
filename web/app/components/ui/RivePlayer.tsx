'use client';

import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

interface RivePlayerProps {
    src: string;
    stateMachine?: string;
    artboard?: string;
    className?: string;
    autoplay?: boolean;
    fit?: Fit;
    alignment?: Alignment;
    onLoad?: () => void;
    inputName?: string; // Optional: To trigger inputs externally or setup simple listeners
    inputValue?: boolean | number; // Optional: To control a specific input
}

export default function RivePlayer({
    src,
    stateMachine,
    artboard,
    className,
    autoplay = true,
    fit = Fit.Cover,
    alignment = Alignment.Center,
    onLoad,
    inputName,
    inputValue
}: RivePlayerProps) {
    const { rive, RiveComponent } = useRive({
        src,
        stateMachines: stateMachine,
        artboard,
        autoplay,
        layout: new Layout({
            fit,
            alignment,
        }),
        onLoad
    });

    // Example basic input control (can be expanded)
    useEffect(() => {
        if (rive && inputName && inputValue !== undefined && stateMachine) {
            const inputs = rive.stateMachineInputs(stateMachine);
            const input = inputs.find(i => i.name === inputName);
            if (input) {
                input.value = inputValue;
            }
        }
    }, [rive, inputName, inputValue, stateMachine]);

    return <RiveComponent className={className} />;
}
