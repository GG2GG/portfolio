'use client';

import { useState, useRef } from 'react';
import { portfolioData } from '../data/content';

const faqs = portfolioData.faqs;

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleTile = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-section" ref={containerRef} className="pt-24 pb-16 md:py-32 bg-zinc-50 relative z-10 w-full text-black border-t border-zinc-200">
            {/* Ambient Vertical Guide Lines (Subtle) */}
            <div className="absolute inset-0 pointer-events-none mx-auto max-w-7xl border-x border-zinc-100/50" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-2 md:pt-0">
                {/* Tech Separator Badge - Hidden on mobile */}
                <div className="hidden md:flex absolute -top-[13px] left-1/2 -translate-x-1/2 bg-zinc-50 px-6 items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">
                        System Inquiries
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                </div>
                {/* Header */}
                <div className="mt-4 md:mt-16 mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-6">
                        Frequently Asked
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase inline-block border border-zinc-200 px-4 py-2 rounded-full bg-white">
                        // Decoding the workflow
                    </p>
                </div>

                {/* Tile Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            onClick={() => toggleTile(i)}
                            className={`
                                group relative bg-white border rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-500
                                ${openIndex === i ? 'border-zinc-400 shadow-xl ring-1 ring-zinc-200' : 'border-zinc-200 hover:border-[#ccff00]/50 hover:shadow-lg'}
                            `}
                        >
                            {/* Accent Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-[#ccff00] transition-opacity duration-300 ${openIndex === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                            {/* Header */}
                            <div className="flex justify-between items-start gap-4 mb-2 relative z-10">
                                <h3 className={`text-xl font-bold transition-colors duration-300 ${openIndex === i ? 'text-black' : 'text-zinc-800 group-hover:text-black'}`}>
                                    <span className="text-zinc-400 font-mono text-sm mr-3">0{i + 1}</span>
                                    {faq.question}
                                </h3>

                                {/* Plus Icon */}
                                <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-zinc-50 shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-[#ccff00] rotate-45 text-black' : 'text-zinc-400 group-hover:bg-zinc-100'}`}>
                                    <span className="text-xl leading-none mb-0.5">+</span>
                                </div>
                            </div>

                            {/* Answer Content - Height Animation Wrapper */}
                            <div
                                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="pt-6 border-t border-zinc-100">
                                        <p className="text-zinc-600 leading-relaxed font-medium">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
