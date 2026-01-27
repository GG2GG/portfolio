'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { roiContent } from '@/app/data/roi';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Icon Map
const Icons: Record<string, React.FC<{ className?: string }>> = {
    compass: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
    ),
    users: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    ),
    cpu: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
    ),
    rocket: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1" /><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4" /></svg>
    ),
    activity: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
    shield: ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    )
};

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<any[]>([]); // Array of refs for connecting lines

    useGSAP(() => {
        if (!containerRef.current) return;

        // 1. Draw the central line
        gsap.fromTo(lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                duration: 2,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%", // Trigger earlier
                    end: "bottom 95%", // Extend further down
                    scrub: 1
                }
            }
        );

        // 2. Reveal Steps & Connectors
    });

    // 3. Animate Start/End Caps
    // Entropy (Start) - Chaotic dots converging
    const chaosDots = gsap.utils.toArray('.chaos-dot');
    gsap.to(chaosDots, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 1
        }
    });

    // Infinity (End) - Pulse on reach
    gsap.fromTo('.infinity-symbol',
        { scale: 0.8, opacity: 0.5 },
        {
            scale: 1.2,
            opacity: 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "bottom 80%",
                toggleActions: "play pause resume pause"
            }
        }
    );

}, { scope: containerRef });

return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto mt-24 mb-32 relative min-h-[1600px] pt-32 pb-32">
        {/* Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        {/* Absolute Center Line (The Spine) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-300 md:-translate-x-1/2 z-0">
            {/* Active Progress Line */}
            <div ref={lineRef} className="w-full bg-gradient-to-b from-[#ccff00] via-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(204,255,0,0.5)]" style={{ height: '0%' }} />
        </div>

        {/* --- START NODE: THE ORIGIN (Entropy) --- */}
        <div className="absolute top-0 left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* Label */}
            <div className="mb-8 bg-black/5 backdrop-blur-sm border border-black/10 px-4 py-2 rounded-full">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">The Origin</span>
            </div>

            {/* Chaos Cloud (Visual only) */}
            <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Central Core */}
                <div className="w-4 h-4 bg-black rounded-full relative z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)]" />
                <div className="absolute inset-0 border border-dashed border-zinc-300 rounded-full animate-spin-slow opacity-30" />

                {/* Scattered Dots (Animated via GSAP to converge) */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="chaos-dot absolute w-2 h-2 bg-zinc-400 rounded-full"
                        style={{
                            left: '50%',
                            top: '50%',
                            transform: `translate(${Math.cos(i) * 60}px, ${Math.sin(i) * 60}px)`
                        }}
                    />
                ))}
            </div>
            <div className="mt-4 text-center">
                <h4 className="text-xl font-black uppercase text-black">Chaos</h4>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Raw Problem Space</p>
            </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-20 relative z-10 py-12">
            {roiContent.process.map((step, i) => {
                const isEven = i % 2 === 0; // Even = Left Side (Desktop), Odd = Right Side (Desktop)
                const Icon = Icons[step.icon as keyof typeof Icons] || Icons.compass;
                const stepColor = step.color || '#ccff00';

                return (
                    <div
                        key={i}
                        className="process-node flex items-center justify-center w-full md:flex-row flex-row"
                        style={{ '--step-color': stepColor } as React.CSSProperties}
                    >
                        {/* 1. Card Side (Desktop Left) - Only functional on Desktop for Even items */}
                        <div className="w-[45%] hidden md:flex justify-end relative">
                            {isEven && (
                                <div className="w-full max-w-md">
                                    <ProcessCard step={step} Icon={Icon} color={stepColor} align="right" />
                                </div>
                            )}
                        </div>

                        {/* 2. Center Spine Area (10%) */}
                        <div className="w-12 md:w-[10%] relative flex items-center justify-center shrink-0 h-12">
                            {/* Connecting Line (Animated) */}
                            <div
                                className="absolute left-[39px] top-20 bottom-0 w-[2px] bg-zinc-800 -z-10 origin-top transform-gpu"
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                ref={(el: any) => { lineRefs.current[i] = el; }}
                            />
                            {/* Central Dot on Spine */}
                            <div
                                className="process-dot absolute left-6 md:left-1/2 top-1/2 md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 rounded-full shadow-[0_0_15px_currentColor] z-30"
                                style={{ borderColor: stepColor, color: stepColor }}
                            />

                            {/* Connector Line (Desktop) */}
                            <div className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 h-[2px] process-connector-line overflow-visible z-10 ${isEven ? 'right-1/2 justify-start origin-right' : 'left-1/2 justify-end origin-left'}`} style={{ width: 'calc(100% - 2rem)' }}>

                                {/* The Line Itself */}
                                <div className="w-full h-full" style={{ backgroundColor: stepColor, boxShadow: `0 0 8px ${stepColor}` }} />

                                {/* Terminal Node (The branching endpoint at the CARD side) */}
                                <div className={`process-terminal w-3 h-3 rounded-full bg-black border-2 absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-1.5' : '-right-1.5'}`} style={{ borderColor: stepColor }} />
                            </div>

                            {/* Connector Line (Mobile) - Always points Right from spine center */}
                            <div className="md:hidden absolute top-1/2 -translate-y-1/2 left-6 w-8 h-[1px] bg-zinc-300 process-connector-line origin-left">
                                <div className="w-full h-full" style={{ backgroundColor: stepColor }} />
                            </div>
                        </div>

                        {/* 3. Opposite Side(Desktop Right) or Main Content (Mobile) */}
                        <div className="w-full md:w-[45%] pl-4 md:pl-0">
                            {/* Desktop: Show if Odd. Mobile: Show Always. */}
                            <div className={`${!isEven ? 'block' : 'md:hidden'} w-full max-w-md`}>
                                <ProcessCard step={step} Icon={Icon} color={stepColor} align="left" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* --- END NODE: THE HORIZON (Infinity) --- */}
        <div className="absolute bottom-0 left-6 md:left-1/2 -translate-x-1/2 translate-y-1/2 z-20 flex flex-col items-center">
            <div className="mb-4 text-center">
                <h4 className="text-xl font-black uppercase text-black">Impact</h4>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Continuous Growth</p>
            </div>

            {/* Infinity Symbol (Animated) */}
            <div className="infinity-symbol relative w-24 h-12 text-black flex items-center justify-center">
                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(204,255,0,0.6)]">
                    <path
                        d="M25,25m-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0 M75,25m-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        pathLength="1"
                        className="opacity-20"
                    />
                    <path
                        d="M25,25 Q45,25 50,25 Q55,25 75,25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                    <text x="50" y="28" textAnchor="middle" fontSize="30" fontWeight="bold" fill="currentColor">∞</text>
                </svg>
            </div>

            {/* Badge */}
            <div className="mt-8 bg-black text-white px-6 py-2 rounded-full border border-zinc-800 shadow-2xl z-30">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ccff00]">ROI Realized</span>
            </div>
        </div>

    </div>
);
}

// Sub-component for Cleaner Layout
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProcessCard({ step, Icon, color, align }: { step: any, Icon: any, color: string, align: 'left' | 'right' }) {
    return (
        <div
            className={`process-card w-full p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl relative transition-colors group hover:bg-white hover:shadow-xl hover:shadow-black/5 ${align === 'right' ? 'text-right' : 'text-left'}`}
        >
            {/* Hover Glow - Border Focus */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--step-color)] group-hover:shadow-[0_0_20px_var(--step-color)] transition-all duration-500 opacity-100" />

            <div className={`flex flex-col md:flex-row gap-5 md:gap-6 items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className="process-icon shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black group-hover:scale-110 transition-transform duration-300 shadow-sm" style={{ color: color }}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                    <h3 className="text-xl md:text-3xl font-black text-black mb-2 uppercase tracking-tight group-hover:text-[var(--step-color)] transition-colors">
                        {step.title}
                    </h3>
                    <p className="text-zinc-600 font-medium leading-relaxed text-base">
                        {step.desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
