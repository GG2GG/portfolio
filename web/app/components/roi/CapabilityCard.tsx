'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { roiContent } from '@/app/data/roi';

// Type from data
type Capability = typeof roiContent['capabilities'][0];

export default function CapabilityCard({ item }: { item: Capability }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Toggle Expansion
    useGSAP(() => {
        if (!contentRef.current) return;

        if (isExpanded) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.8, ease: "power2.out" });
            gsap.to(cardRef.current, { backgroundColor: "#09090b", borderColor: "#ccff00", duration: 0.3 }); // zinc-950 + neon
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.6, ease: "power2.inOut" });
            gsap.to(cardRef.current, { backgroundColor: "#09090b", borderColor: "#27272a", duration: 0.3 }); // zinc-950 + zinc-800
        }
    }, [isExpanded]);

    return (
        <div
            ref={cardRef}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8 cursor-pointer overflow-hidden group transition-all duration-500 relative hover:shadow-[0_0_30px_rgba(204,255,0,0.05)] hover:border-[#ccff00]/30"
        >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ccff00] to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Header: Title + Problem */}
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#ccff00] transition-colors duration-300 leading-tight pr-4">
                        {item.title}
                    </h3>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-500 transition-all duration-300 border border-zinc-800 ${isExpanded ? 'rotate-45 bg-[#ccff00]/10 text-[#ccff00] border-[#ccff00]/50' : 'group-hover:bg-zinc-800'}`}>
                        <span className="text-xl font-light leading-none mb-0.5">+</span>
                    </div>
                </div>

                <div className="mb-6 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-red-400 mb-2">
                        The Problem
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                        {item.problem}
                    </p>
                </div>

                {/* Tags (Preview) */}
                {!isExpanded && (
                    <div className="flex flex-wrap gap-2 mt-2">
                        {item.tools.slice(0, 3).map(tool => (
                            <span key={tool} className="text-[10px] bg-zinc-900 px-3 py-1.5 rounded-md text-zinc-500 font-bold uppercase tracking-wide border border-zinc-800">
                                {tool}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Hidden Content: Build + ROI + Full Stack */}
            <div
                ref={contentRef}
                className="h-0 opacity-0 overflow-hidden relative z-10"
            >
                <div className="pt-6 border-t border-zinc-900 mt-6 space-y-6">

                    {/* What I Build */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#ccff00] mb-2">
                            The Solution
                        </h4>
                        <p className="text-zinc-300 text-sm leading-relaxed">
                            {item.build}
                        </p>
                    </div>

                    {/* ROI Impact */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2">
                            ROI Impact
                        </h4>
                        <p className="text-white font-bold text-lg leading-tight">
                            {item.roi}
                        </p>
                    </div>

                    {/* Full Tools */}
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-3">
                            Full Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {item.tools.map(tool => (
                                <span key={tool} className="text-xs bg-black px-3 py-1.5 rounded border border-zinc-800 text-zinc-400 font-mono shadow-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
