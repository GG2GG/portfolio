'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ProfileReveal() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // AUTOMATED NUDGE: Play a subtle "search spotlight" animation to hint interaction
        const nudgeTimeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut", duration: 1 } });

        nudgeTimeline
            .to(containerRef.current, { "--x": "30%", "--y": "30%" })
            .to(containerRef.current, { "--x": "70%", "--y": "70%" });


        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            // Kill the nudge on first interaction
            nudgeTimeline.kill();

            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Direct 1:1 tracking with explicit units
            gsap.set(containerRef.current, {
                "--x": `${x}px`,
                "--y": `${y}px`,
                overwrite: true
            });
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            nudgeTimeline.kill();
            if (container) container.removeEventListener('mousemove', handleMouseMove);
        };
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 cursor-crosshair"
            style={{
                "--x": "-100px", // Start off-screen
                "--y": "-100px"
            } as React.CSSProperties}
        >
            {/* Layer 1: Ghost / Base (Grayscale, Sketchy) */}
            <img
                src="/assets/ghost.png"
                alt="Portrait Base"
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale pointer-events-none"
            />

            {/* Layer 2: Real / Reveal (Color, Sharp) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle 450px at var(--x) var(--y), black 40%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 450px at var(--x) var(--y), black 40%, transparent 100%)`,
                }}
            >
                <img
                    src="/assets/real.jpeg"
                    alt="Portrait Real"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
