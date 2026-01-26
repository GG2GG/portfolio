'use client';

import Link from 'next/link';

export default function RoiCTA() {
    return (
        <div className="relative w-full max-w-5xl mx-auto mt-32 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-900/20">
            <div className="bg-zinc-900 p-12 md:p-20 text-center relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Want Me to Build This for Your Business?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto">
                        Tell me your workflow pain point — I’ll map the ROI and propose a build plan.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <Link
                            href="tel:+919600881851"
                            className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-full shadow-lg hover:scale-105 transform duration-300"
                        >
                            Book a Call
                        </Link>
                        <Link
                            href="https://wa.me/919600881851"
                            target="_blank"
                            className="px-10 py-5 bg-zinc-800 text-white font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors rounded-full border border-zinc-700"
                        >
                            Message Me
                        </Link>
                    </div>
                    <div className="mt-8">
                        <Link
                            href="/cases"
                            className="text-sm text-zinc-500 font-mono uppercase tracking-widest hover:text-white transition-colors border-b border-zinc-800 hover:border-white pb-1"
                        >
                            See Case Studies
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
