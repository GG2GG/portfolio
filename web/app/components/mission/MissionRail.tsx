'use client';

import { Mission } from '@/lib/missions';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import ScrambleText from '../ui/ScrambleText';
import { getAssetPath } from '@/app/utils/assets';

interface MissionRailProps {
    mission: Mission;
    index: number;
    total: number;
    isActive: boolean;
}

const REPULSION_RADIUS = 250;
const REPULSION_FORCE = 0.5; // Balanced push
const DAMPING = 0.98; // Low friction for continuous drift
const MAX_VELOCITY = 2; // Allow slightly faster bounce

export default function MissionRail({ mission, index, total, isActive }: MissionRailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isStackOpen, setIsStackOpen] = useState(false);

    useGSAP(() => {
        if (!containerRef.current || !isActive) return;

        // Setup Animation (Simple Stagger)
        const tl = gsap.timeline();
        tl.fromTo('.rail-title',
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        )
            .fromTo('.rail-meta',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 0.4 },
                "-=0.3"
            )
            .fromTo('.tech-cloud-item',
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, stagger: 0.05, duration: 0.3, ease: "back.out(1.7)" },
                "-=0.2"
            );

    }, { scope: containerRef, dependencies: [isActive] });

    return (
        <div ref={containerRef} className={`h-full flex flex-col relative overflow-hidden ${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity duration-500`}>

            {/* Background Giant Numeral - Positioned to minimize cutoff */}
            <div className="absolute -right-8 top-0 text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-purple-500/10 to-transparent select-none z-0 leading-none">
                {String(index + 1).padStart(2, '0')}
            </div>

            {/* Top: Header */}
            <div className="relative z-10 flex flex-col gap-4 mb-4">
                {/* HUD Header Line */}
                <div className="flex items-center gap-2 text-[#ccff00] font-mono text-[10px] tracking-widest uppercase">
                    <div className="relative w-2 h-2">
                        <div className="absolute inset-0 bg-[#ccff00] rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-2 h-2 bg-[#ccff00] rounded-full"></div>
                    </div>
                    <span>Log {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}</span>
                    <div className="flex-1 h-[1px] bg-gradient-to-r from-[#ccff00]/50 to-transparent" />
                </div>

                <h3 className="rail-title text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] break-words hyphens-auto drop-shadow-lg">
                    <ScrambleText text={mission.title} reveal={isActive} hover={true} />
                </h3>
            </div>

            {/* Middle: Cloud Container (Collapsible Tech Stack) */}
            <div
                className={`cloud-container relative w-full my-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm p-4 transition-all duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-40 pointer-events-none'}`}
            >
                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none rounded-2xl overflow-hidden" style={{ backgroundImage: `url(${getAssetPath('/assets/grid.svg')})`, backgroundSize: '20px 20px' }}></div>

                {/* Header / Toggle Trigger */}
                {/* Desktop Header (Always Visible) */}
                <div className="hidden md:flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]" />
                    <span className="text-[10px] uppercase tracking-widest font-mono text-white">
                        System Architecture
                    </span>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setIsStackOpen(!isStackOpen)}
                    className="w-full flex md:hidden items-center justify-between group z-20 relative focus:outline-none"
                >
                    <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${isStackOpen ? 'bg-[#ccff00]' : 'bg-zinc-500 group-hover:bg-[#ccff00]'} transition-colors`} />
                        <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-400 group-hover:text-white transition-colors">
                            {isStackOpen ? 'System Architecture' : 'View Stack'}
                        </span>
                    </div>
                    {/* Icon */}
                    <div className={`w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-black/20 group-hover:border-[#ccff00]/50 transition-all ${isStackOpen ? 'rotate-180' : ''}`}>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-zinc-400 group-hover:text-[#ccff00] transition-colors">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>

                {/* Collapsible Content */}
                <div
                    className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isStackOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'} md:max-h-none md:opacity-100 md:mt-4`}
                >
                    <div className="flex flex-wrap content-start gap-2 pb-2">
                        {mission.stack.map((tech, i) => (
                            <div
                                key={i}
                                className="tech-cloud-item relative group text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider bg-black/40 border border-white/10 px-2 py-1 rounded hover:border-[#ccff00] hover:text-[#ccff00] hover:bg-[#ccff00]/10 transition-all cursor-default"
                            >
                                <ScrambleText text={tech} hover={true} reveal={isActive && isStackOpen} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            {/* Bottom: HUD Meta Grid */}
            <div className="relative z-10 mt-auto">
                <div className="flex items-center justify-between gap-4">
                    <div className="rail-meta">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Status</span>
                        <div className="flex items-center gap-3">
                            {/* Radar Status Icon */}
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                <span className={`absolute inset-0 rounded-full border border-[#ccff00] ${mission.status === 'Active' ? 'animate-ping' : 'opacity-0'}`} />
                                <span className={`relative w-2 h-2 rounded-full ${mission.status === 'Active' ? 'bg-[#ccff00] shadow-[0_0_10px_#ccff00]' : 'bg-zinc-500'}`} />
                            </div>
                            <span className="text-xl font-bold text-white uppercase tracking-tight">{mission.status}</span>
                        </div>
                    </div>

                    <div className="rail-meta text-right">
                        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-1">Role</span>
                        <span className="text-xl font-bold text-white uppercase tracking-tight drop-shadow-md">Lead</span>
                    </div>
                </div>
            </div>


        </div>

    );
}
