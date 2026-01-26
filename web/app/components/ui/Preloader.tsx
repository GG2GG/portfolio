'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


interface PreloaderProps {
    onFinish?: () => void;
}

export default function Preloader({ onFinish }: PreloaderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    useGSAP(() => {
        if (!process.browser) return;

        // Prevent Initial Scroll
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({
            onComplete: () => {
                // Exit Sequence
                gsap.to(containerRef.current, {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                    onComplete: () => {
                        document.body.style.overflow = '';
                        setIsLoading(false);
                        if (onFinish) onFinish();
                    }
                });
            }
        });

        // 1. Initial State
        gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left" });

        // 2. Progress Bar Animation
        tl.to(barRef.current, {
            scaleX: 1,
            duration: 3,
            ease: "expo.out"
        });

        // 3. Counter Animation (Using simple object interpolation)
        const counter = { val: 0 };
        tl.to(counter, {
            val: 100,
            duration: 3,
            ease: "expo.out",
            onUpdate: () => {
                if (counterRef.current) {
                    counterRef.current.innerText = Math.floor(counter.val).toString().padStart(3, '0');
                }
            }
        }, "<");

        // 4. Status Text Cycling
        const statuses = [
            "INITIALIZING KERNEL...",
            "ANALYZING METRICS...",
            "OPTIMIZING UX FLOWS...",
            "BUILDING ARTIFACTS...",
            "SYSTEM READY."
        ];

        let statusIndex = 0;
        const cycleText = () => {
            if (statusIndex >= statuses.length) return;
            const text = statuses[statusIndex];

            // Scramble Effect (Simple simulated)
            if (textRef.current) {
                textRef.current.innerText = text;
                gsap.fromTo(textRef.current,
                    { opacity: 0.5, letterSpacing: "0.5em" },
                    { opacity: 1, letterSpacing: "0.2em", duration: 0.4, ease: "power2.out" }
                );
            }
            statusIndex++;
            setTimeout(cycleText, 600);
        };
        cycleText();


        return () => {
            tl.kill();
            document.body.style.overflow = '';
        };

    }, { scope: containerRef });

    if (!isLoading) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center cursor-wait"
        >
            <div className="w-full max-w-sm px-8">

                {/* Header Meta */}
                <div className="flex justify-between items-end mb-4 mix-blend-difference">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        System Boot
                    </span>
                    <span ref={counterRef} className="text-4xl font-black font-mono text-[#ccff00] leading-none">
                        000
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-[2px] bg-zinc-900 mb-6 overflow-hidden relative">
                    <div
                        ref={barRef}
                        className="absolute inset-0 bg-[#ccff00] w-full h-full"
                    />
                </div>

                {/* Status Text */}
                <div ref={textRef} className="text-xs font-mono text-white uppercase tracking-[0.2em] h-4">
                    WAITING...
                </div>
            </div>

            {/* Corner Deco */}
            <div className="absolute bottom-8 left-8 text-[10px] font-mono text-zinc-800">
                v2.0.4.build_final
            </div>
        </div>
    );
}
