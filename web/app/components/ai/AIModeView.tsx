'use client';

import { portfolioData } from '@/app/data/content';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { missions } from '@/lib/missions';

export default function AIModeView() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { experience, about, ...restContent } = portfolioData;

    const { hero, projects, contact } = portfolioData;
    const { experience, about, ...rest } = portfolioData; // verify no other keys missed

    // Explicit Order: Hero -> About -> Experience (Missions) -> Projects -> Contact
    const fullData = {
        hero,
        about: {
            ...about,
            description: "I build digital experiences that merge Technical Precision with Aesthetic Fluidity. My work is defined by a commitment to Performance, Accessibility, and Pixel-Perfect Execution."
        },
        experience: missions,
        projects,
        contact
    };

    const [displayedText, setDisplayedText] = React.useState('');
    const fullTextString = JSON.stringify(fullData, null, 2);

    React.useEffect(() => {
        let currentIndex = 0;
        const speed = 2; // chars per frame

        const type = () => {
            if (currentIndex < fullTextString.length) {
                setDisplayedText(fullTextString.slice(0, currentIndex + speed));
                currentIndex += speed;
                requestAnimationFrame(type);
            }
        };

        type();
    }, [fullTextString]);

    return (
        <div
            ref={containerRef}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[9999] bg-black text-white font-mono p-4 md:p-8 overflow-y-auto h-[100dvh] overscroll-y-contain pointer-events-auto"
        >
            <div className="max-w-4xl mx-auto pb-32">

                {/* Header Information */}
                <div className="mb-6 opacity-50 text-[10px] md:text-xs">
                    <p># MODE: AI_READABLE</p>
                    <p># TIMESTAMP: {new Date().toISOString()}</p>
                    <p># ACCESS: GRANTED</p>
                </div>

                {/* Box Structure / Terminal Window */}
                <div className="border border-white/20 rounded-lg overflow-hidden bg-white/5">
                    {/* Fake Terminal Header */}
                    <div className="px-4 py-2 bg-white/10 border-b border-white/10 flex items-center justify-between">
                        <span className="text-xs font-bold opacity-70">portfolio_data.json</span>
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 md:p-6 text-[10px] md:text-sm leading-relaxed overflow-x-auto">
                        <pre className="whitespace-pre-wrap">
                            {JSON.stringify(fullData, null, 2)}
                        </pre>
                    </div>
                </div>

            </div>
        </div>
    );
}
