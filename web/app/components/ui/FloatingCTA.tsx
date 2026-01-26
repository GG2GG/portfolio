'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingCTA() {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useGSAP(() => {
        // Single Trigger to define ONLY the safe zone for the floating button
        // Visible = Between Hero and Middle of FAQ
        ScrollTrigger.create({
            trigger: "body", // Start based on page scroll
            start: "top top-=1000", // Approx 1000px down (past Hero)
            endTrigger: "#faq-section", // End based on FAQ
            end: "center center", // Hide when Middle of FAQ hits Middle of Viewport
            onToggle: (self) => setIsVisible(self.isActive), // Only true inside this range
            markers: false
        });
    }, []);

    useEffect(() => {
        if (!buttonRef.current) return;

        if (isVisible) {
            gsap.to(buttonRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.75)" // "Pop" effect
            });
        } else {
            gsap.to(buttonRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.5, // Shrink out
                duration: 0.4,
                ease: "power2.in"
            });
        }
    }, [isVisible]);

    return (
        <Link
            ref={buttonRef}
            href="/services"
            className="fixed bottom-8 right-8 z-50 opacity-0 translate-y-4 scale-90 group"
        >
            <div className="relative flex items-center justify-center w-16 h-16 bg-black border border-zinc-800 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:border-[#ccff00]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/0 to-[#ccff00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon: Brain / Thinking Process */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="w-7 h-7 text-white group-hover:text-[#ccff00] transition-colors relative z-10"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>

                {/* Ring Animation (Pulse) */}
                <span className="absolute inset-0 rounded-full border border-[#ccff00] opacity-0 scale-100 animate-ping group-hover:opacity-30" />

                {/* Constant Pop/Pulse Animation for "Attention" */}
                {isVisible && (
                    <span className="absolute inset-0 rounded-full bg-[#ccff00] opacity-[0.05] animate-pulse" />
                )}
            </div>

            {/* Tooltip Label */}
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold uppercase tracking-widest py-1 px-3 rounded opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Master Plan
            </span>
        </Link>
    );
}
