'use client';

import { useState, useRef } from 'react';

const faqs = [
    {
        question: "How do you bridge the gap between Engineering and Product?",
        answer: "I speak both languages fluently. My background in full-stack engineering allows me to validate feasibility instantly, while my product experience ensures we're building for ROI, not just complexity. I eliminate the 'translation layer' friction."
    },
    {
        question: "What is your approach to AI implementation?",
        answer: "Pragmatic and user-centric. I prioritize 'Invisible AI'—systems that enhance utility without forcing users to become prompt engineers. I focus heavily on data pipelines (RAG, Fine-tuning) and evaluation metrics before scaling."
    },
    {
        question: "Are you hands-on with code?",
        answer: "Extremely. I prototype every feature I spec. From writing Python/FastAPI backends to tweaking React frontends/Tailwind styles. I believe you can't manage what you can't build (or at least deeply understand)."
    },
    {
        question: "What industries do you specialize in?",
        answer: "My deep dives have been in Retail Tech (Computer Vision, Cashier-less stores) and EdTech (Growth Engines, Personalized Learning). However, my core skillset of 'Data -> Insight -> Action' is sector-agnostic."
    },
    {
        question: "How do you handle ambiguity in product requirements?",
        answer: "I embrace it. Ambiguity is just a lack of data. I use rapid prototyping and user feedback loops to turn assumptions into facts, ensuring we build the right thing before we build it right."
    },
    {
        question: "What is your leadership style?",
        answer: "Servant-leadership backed by technical empathy. I clear blockers, shield the team from scope creep, and ensure engineers have the context they need to make autonomous decisions."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleTile = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq-section" ref={containerRef} className="py-16 md:py-32 bg-zinc-50 relative z-10 w-full text-black border-t border-zinc-200">
            {/* Ambient Vertical Guide Lines (Subtle) */}
            <div className="absolute inset-0 pointer-events-none mx-auto max-w-7xl border-x border-zinc-100/50" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                {/* Tech Separator Badge */}
                <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 bg-zinc-50 px-6 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    <span className="font-mono text-[10px] tracking-[0.3em] font-bold text-zinc-400 uppercase">
                        System Inquiries
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                </div>
                {/* Header */}
                <div className="mb-20 text-center">
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
