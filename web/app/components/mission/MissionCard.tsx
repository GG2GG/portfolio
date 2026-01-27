'use client';

import { Mission } from '@/lib/missions';
import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import ScrambleText from '../ui/ScrambleText';
import { getAssetPath } from '@/app/utils/assets';

interface MissionCardProps {
    mission: Mission;
    isActive: boolean;
}

export default function MissionCard({ mission, isActive }: MissionCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Animation: Sequential HUD Boot
    useGSAP(() => {
        if (!cardRef.current) return;

        const blocks = cardRef.current.querySelectorAll('.hud-block');
        const idWatermark = cardRef.current.querySelector('.id-watermark');

        if (isActive) {
            // Reset
            gsap.set(blocks, { opacity: 0, x: -20 });
            gsap.set(idWatermark, { opacity: 0, scale: 0.8 });

            // Animate In with Stagger
            gsap.to(blocks, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.1
            });

            // Watermark (Slow fade)
            gsap.to(idWatermark, {
                opacity: 0.05,
                scale: 1,
                duration: 1.5,
                ease: "power3.out"
            });

        } else {
            // Fast exit
            gsap.to(blocks, { opacity: 0, x: 20, duration: 0.3 });
            gsap.to(idWatermark, { opacity: 0, duration: 0.3 });
        }
    }, [isActive]);


    return (
        <div
            ref={cardRef}
            className="relative w-full max-w-5xl mx-auto h-full flex flex-col justify-center pointer-events-none" // HUD floats, pass-through if needed
        >
            {/* Massive Background Watermark (e.g. 01) */}
            <div className="id-watermark absolute -top-20 -left-20 text-[20rem] font-black leading-none text-white select-none z-0">
                {mission.id.split('_')[1]}
            </div>

            {/* Content Container */}
            <div className="relative z-10 pl-8 md:pl-16 border-l border-white/20 ml-8 md:ml-0 pointer-events-auto">

                {/* Block 1: Header (Role & Company) */}
                <div className="hud-block mb-8 relative">
                    {/* Index Number Removed - Moved to Rail */}

                    <div className="flex items-center gap-4 mb-4">
                        {/* Logo */}
                        <div className="w-16 h-16 rounded-xl bg-white border border-white/20 flex items-center justify-center shrink-0 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <img
                                src={getAssetPath(mission.logo)}
                                alt={`${mission.company} Logo`}
                                className="w-full h-full object-contain p-1"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest shadow-fuchsia-400/20 drop-shadow-[0_0_5px_rgba(232,121,249,0.5)]">
                                {mission.duration}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-none uppercase tracking-tighter mt-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                                <ScrambleText text={mission.company} reveal={isActive} />
                            </h2>
                        </div>
                    </div>

                    <h3 className="text-xl md:text-2xl text-cyan-400 font-mono font-medium border-b border-cyan-500/30 pb-4 inline-block drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                        <ScrambleText text={mission.role} reveal={isActive} /> <span className="text-white/30 mx-2">|</span> <ScrambleText text={mission.location} reveal={isActive} />
                    </h3>
                </div>

                {/* Block 2: Objective (Summary) */}
                <div className="hud-block mb-10 max-w-2xl">
                    <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                        <ScrambleText text="Mission Brief" reveal={isActive} />
                    </h4>
                    <p className="text-xl md:text-2xl text-white font-light leading-relaxed line-clamp-4">
                        {mission.summary}
                    </p>
                </div>

                {/* Block 3: Key Outcomes (Achievements) */}
                <div className="hud-block mb-8 max-w-3xl">
                    <h4 className="text-[10px] font-bold text-teal-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        <ScrambleText text="Key Outcomes" reveal={isActive} />
                    </h4>
                    <ul className="space-y-3 mb-8">
                        {mission.achievements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                                <span className="text-teal-500/50 mt-1 font-mono text-xs shrink-0">{`>_`}</span>
                                <span className="text-base md:text-lg text-zinc-300 font-light leading-snug group-hover:text-white transition-colors">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* Check if mission has case study and show CTA */}
                    {mission.hasCaseStudy && (
                        <Link
                            href={`/case-studies/${mission.id}`}
                            className="inline-flex items-center gap-2 text-teal-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group mt-4"
                        >
                            <span>View Products Built</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    )}
                </div>



            </div>
        </div>
    );
}
