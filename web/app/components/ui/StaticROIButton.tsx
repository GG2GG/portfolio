'use client';

import Link from 'next/link';

export default function StaticROIButton() {
    return (
        <div className="w-full relative flex flex-col items-center justify-center py-24 static-cta-marker overflow-hidden">
            {/* Background Blending Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-zinc-50 to-transparent pointer-events-none" />

            {/* Floating PM Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 select-none">
                {/* 1. Strategy/Target (Left Top) */}
                <svg className="absolute top-10 left-[10%] w-16 h-16 text-zinc-300 animate-float" style={{ animationDelay: '0s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>

                {/* 2. Data/Chart (Right Top) */}
                <svg className="absolute top-16 right-[15%] w-20 h-20 text-zinc-300 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                </svg>

                {/* 3. Users (Left Bottom) */}
                <svg className="absolute bottom-10 left-[20%] w-14 h-14 text-zinc-300 animate-float" style={{ animationDelay: '4s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>

                {/* 4. Roadmap/Timeline (Right Bottom) */}
                <svg className="absolute bottom-12 right-[10%] w-16 h-16 text-zinc-300 animate-float" style={{ animationDelay: '1.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>

                {/* 5. Bulb/Idea (Top Center Left) */}
                <svg className="absolute top-1/4 left-[30%] w-12 h-12 text-zinc-300 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.6 20h4.8c.4 0 .8-.5.6-.9l-.6-1h-4.8l-.6 1c-.2.5.2.9.6.9z" />
                    <path d="M15 14a5 5 0 0 0-3-9 5 5 0 0 0-3 9" />
                </svg>

                {/* 6. Code/Terminal (Bottom Center Right) */}
                <svg className="absolute bottom-1/3 right-[30%] w-14 h-14 text-zinc-300 animate-float" style={{ animationDelay: '3s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6M12 19h8" />
                </svg>

                {/* 7. Rocket (Top Right Corner) */}
                <svg className="absolute top-4 right-4 w-10 h-10 text-zinc-300 animate-float" style={{ animationDelay: '0.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                </svg>

                {/* 8. Chat/Feedback (Center Left) */}
                <svg className="absolute top-1/2 left-4 w-12 h-12 text-zinc-300 animate-float" style={{ animationDelay: '2.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>

                {/* 9. Lightning/Speed (Center Right) */}
                <svg className="absolute top-1/3 right-4 w-10 h-10 text-zinc-300 animate-float" style={{ animationDelay: '3.5s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>

                {/* 10. Cube/Product (Bottom Left Corner) */}
                <svg className="absolute bottom-4 left-4 w-12 h-12 text-zinc-300 animate-float" style={{ animationDelay: '1.2s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.27 6.96L12 12.01l8.73-5.05" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.08V12" />
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
