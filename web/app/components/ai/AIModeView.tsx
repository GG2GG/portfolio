'use client';

import { portfolioData } from '@/app/data/content';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { missions } from '@/lib/missions';

export default function AIModeView() {
    const containerRef = useRef<HTMLDivElement>(null);

    const fullData = {
        ...portfolioData,
        missions: missions
    };

    useGSAP(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[500] bg-[#050505] text-[#00ff41] font-mono p-8 overflow-y-auto selection:bg-[#00ff41] selection:text-black"
        >
            <div className="max-w-4xl mx-auto whitespace-pre-wrap leading-relaxed text-sm md:text-base opacity-80">
                {`# DATA_STREAM_INITIATED
# MODE: AI_READABLE
# TIMESTAMP: ${new Date().toISOString()}

"""
Accessing portfolio data for LLM consumption...
Parsing structure...
Render complete.
"""

${JSON.stringify(fullData, null, 4)}
`}
            </div>
        </div>
    );
}
