'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getAssetPath } from '../utils/assets';

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
            className="relative w-full overflow-hidden rounded-xl bg-gray-100 cursor-crosshair grid grid-cols-1 grid-rows-1"
            style={{
                "--x": "-100px", // Start off-screen
                "--y": "-100px"
            } as React.CSSProperties}
        >
            {/* Layer 1: Ghost / Base (Grayscale, Sketchy) */}
            <img
                src={getAssetPath("/assets/ghost.png")}
                alt="Portrait Base"
                className="col-start-1 row-start-1 relative w-full h-auto block opacity-60 grayscale pointer-events-none select-none"
            />

            {/* Layer 2: Real / Reveal (Color, Sharp) */}
            <div
                className="col-start-1 row-start-1 relative w-full h-auto pointer-events-none"
                style={{
                    maskImage: `radial-gradient(circle 450px at var(--x) var(--y), black 40%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 450px at var(--x) var(--y), black 40%, transparent 100%)`,
                }}
            >
                <img
                    src={getAssetPath("/assets/real.jpeg")}
                    alt="Portrait Real"
                    className="w-full h-auto block select-none"
                />
            </div>
        </div>
    );
}
