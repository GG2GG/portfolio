'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { roiContent } from '@/app/data/roi';

import ProcessTimeline from './roi/ProcessTimeline';
import RoiCTA from './roi/RoiCTA';

gsap.registerPlugin(ScrollTrigger);

export default function ROISection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Animation Controller
    useGSAP(() => {
        // 1. Header (Fade Up)
        gsap.fromTo('.roi-header',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.roi-header',
                    start: "top 80%",
                }
            }
        );

        // 1.5 Shimmer Effect (Continuous)
        gsap.to('.roi-shimmer-text', {
            backgroundPosition: "200% center",
            duration: 3,
            repeat: -1,
            ease: "linear"
        });

        // 2. Metrics (Batch Stagger)
        ScrollTrigger.batch('.roi-metric', {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onEnter: (batch: any) => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.7)"
            }),
            start: "top 85%",
        });

        // 3. Capability Grid (Batch Stagger)
        ScrollTrigger.batch('.roi-card', {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onEnter: (batch: any) => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                duration: 1,
                ease: "power3.out"
            }),
            start: "top 80%",
        });

        // 4. Checklist & Process Title
        gsap.fromTo(['.roi-process-title', '.roi-checklist'],
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: '.roi-checklist',
                    start: "top 85%"
                }
            }
        );

        // 5. CTA
        gsap.fromTo('.roi-cta',
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "elastic.out(1, 0.5)",
                scrollTrigger: {
                    trigger: '.roi-cta',
                    start: "top 85%"
                }
            }
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full bg-black py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Background Grid (Dark Mode) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* 1. Header */}
                <div className="text-center mb-24">
                    <h2 className="roi-header text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter opacity-0 translate-y-8">
                        {roiContent.title}
                    </h2>
                    <h3 className="roi-header text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto mb-8 leading-relaxed opacity-0 translate-y-8">
                        {roiContent.subtitle}
                    </h3>

                    {/* Shimmer Text Wrapper */}
                    <div className="roi-header opacity-0 translate-y-8 inline-block">
                        <p className="roi-shimmer-text text-sm font-bold font-mono uppercase tracking-widest px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/50 inline-block shadow-[0_0_20px_rgba(204,255,0,0.1)]
                            bg-gradient-to-r from-zinc-500 via-[#ccff00] to-zinc-500 bg-[length:200%_auto] bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">
                            {roiContent.supporting}
                        </p>
                    </div>
                </div>

                {/* 2. Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-32 border-y border-zinc-800 py-12">
                    {roiContent.metrics.map((m, i) => (
                        <div key={i} className="roi-metric text-center group cursor-default opacity-0 translate-y-8 p-4 rounded-xl transition-all duration-300 hover:bg-zinc-900/50 hover:shadow-[0_0_20px_rgba(204,255,0,0.1)] hover:-translate-y-1">
                            <div className="text-xs text-zinc-500 font-bold font-mono uppercase mb-3 tracking-wider group-hover:text-zinc-400 transition-colors">{m.label}</div>
                            <div className="text-4xl md:text-5xl font-black text-white mb-3 group-hover:text-[#ccff00] transition-colors tracking-tight">{m.value}</div>

                            {/* Reveal "How" on Hover */}
                            <div className="h-6 flex items-center justify-center overflow-hidden">
                                <div className="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                    {m.suffix}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Capability Grid Removed */}

                {/* 4. Process */}
                <div className="mb-32">

                    <h3 className="roi-process-title text-center text-3xl font-black text-white mb-16 uppercase tracking-tight opacity-0">How I Deliver</h3>
                    <ProcessTimeline />
                </div>

                {/* 5. Checklist (Simple 2-col) */}
                <div className="roi-checklist bg-zinc-900/50 border border-zinc-800 rounded-2xl p-12 mb-20 max-w-5xl mx-auto shadow-2xl shadow-black opacity-0 translate-y-8 backdrop-blur-sm">
                    <h3 className="text-sm font-bold font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">
                        Deliverables Checklist
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                        {roiContent.checklist.map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#ccff00]/10 text-[#ccff00] text-xs font-bold mt-0.5">✓</span>
                                <span className="text-zinc-300 font-medium leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 6. CTA */}
                <div className="roi-cta opacity-0 scale-95">
                    <RoiCTA />
                </div>

            </div>
        </section>
    );
}
