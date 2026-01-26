'use client';

import Link from 'next/link';

export default function StaticROIButton() {
    return (
        <div className="w-full relative flex flex-col items-center justify-center py-24 static-cta-marker overflow-hidden">
            {/* Background Blending Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50 to-transparent pointer-events-none" />

            {/* Floating PM Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 select-none">
                {/* Icon 1: Strategy/Target (Left Top) */}
                <svg className="absolute top-10 left-[10%] w-16 h-16 text-zinc-400 animate-float" style={{ animationDelay: '0s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>

                {/* Icon 2: Data/Chart (Right Top) */}
                <svg className="absolute top-16 right-[15%] w-20 h-20 text-zinc-400 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                </svg>

                {/* Icon 3: Users (Left Bottom) */}
                <svg className="absolute bottom-10 left-[20%] w-14 h-14 text-zinc-400 animate-float" style={{ animationDelay: '4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>

                {/* Icon 4: Roadmap/Timeline (Right Bottom) */}
                <svg className="absolute bottom-12 right-[10%] w-16 h-16 text-zinc-400 animate-float" style={{ animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
            </div>

            {/* Vertical Connector Line (Top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[50%] bg-gradient-to-b from-zinc-300 to-transparent" />

            {/* Vertical Connector Line (Bottom) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[50%] bg-gradient-to-b from-transparent to-zinc-800" />

            <Link
                href="/services"
                className="group relative z-10 inline-flex items-center gap-4 px-12 py-6 bg-zinc-900 text-white rounded-full overflow-hidden transition-transform duration-500 hover:scale-110 shadow-2xl hover:shadow-[0_20px_60px_-10px_rgba(204,255,0,0.3)] border border-zinc-800 hover:border-[#ccff00]"
            >
                {/* Neon Glow Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <span className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#ccff00] text-black font-bold shadow-[0_0_20px_rgba(204,255,0,0.5)] group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </span>

                {/* Text */}
                <div className="relative z-10 flex flex-col items-start leading-none h-full justify-center">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#ccff00] font-mono mb-1.5 opacity-80 group-hover:opacity-100 transition-opacity">Strategies Declassified</span>
                    <span className="text-xl md:text-2xl font-black uppercase tracking-tight group-hover:tracking-normal transition-all duration-300">View More About Me</span>
                </div>

                {/* Arrow */}
                <span className="relative z-10 text-zinc-600 group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all duration-300 ml-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </Link>
        </div>
    );
}
