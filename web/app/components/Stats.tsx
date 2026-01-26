'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const stats = [
    { label: "Years Experience", value: "7.5+" },
    { label: "Products Launched", value: "12" },
    { label: "Users Reached", value: "30M" },
    { label: "AI accuracy", value: "99%" }
];

export default function Stats() {
    return (
        <section className="relative w-full py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="group relative p-[1px] rounded-xl overflow-hidden bg-zinc-900/50"
                        >
                            {/* Shimmer Border Moving */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:animate-shimmer transition-opacity duration-300" />

                            {/* Inner Card */}
                            <div className="relative h-full bg-black/90 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center border border-zinc-800 group-hover:border-transparent transition-colors duration-300">
                                <span className="text-5xl md:text-6xl font-black text-white tracking-tighter group-hover:text-[#ccff00] transition-colors duration-300">
                                    {stat.value}
                                </span>
                                <span className="mt-4 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] text-center group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </span>

                                {/* Corner Accents */}
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
