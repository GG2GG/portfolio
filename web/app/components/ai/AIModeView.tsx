'use client';

import { portfolioData } from '@/app/data/content';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { missions } from '@/lib/missions';

export default function AIModeView() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Destructure all needed parts at once to avoid redeclaration issues
    const { hero, projects, contact, experience: _ignoredExp, about, ...rest } = portfolioData;

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
        // Finish in ~5 seconds (300 frames at 60fps)
        const totalFrames = 300;
        const speed = Math.max(2, Math.ceil(fullTextString.length / totalFrames));

        const type = () => {
            if (currentIndex < fullTextString.length) {
                setDisplayedText(fullTextString.slice(0, currentIndex + speed));
                currentIndex += speed;
                requestAnimationFrame(type);
            } else {
                setDisplayedText(fullTextString);
            }
        };

        type();
    }, [fullTextString]);

    return (
        <div
            ref={containerRef}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[9999] bg-black text-white font-mono flex items-center justify-center p-4 overscroll-y-contain pointer-events-auto overflow-hidden h-[100dvh]"
        >
            <div className="w-full max-w-5xl h-[85vh] flex flex-col">

                {/* Vintage Frame Header */}
                <div className="text-white leading-none font-bold whitespace-nowrap text-sm md:text-base overflow-hidden select-none">
                    <div className="flex justify-between items-center bg-black">
                        <span>╔═[<span className="text-white">■</span>]══════════════════════════════════════</span>
                        <span className="px-2 bg-black text-white mx-auto -translate-y-[1px]">PORTFOLIO.CPP</span>
                        <span>═══════════════════════[<span className="text-white">↑</span>]═╗</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-black border-x-2 border-double border-white overflow-y-auto relative scrollbar-retro p-4 md:p-6">
                    <pre className="whitespace-pre-wrap font-mono text-xs md:text-sm lg:text-base leading-relaxed text-white">
                        <div className="mb-4 opacity-50 text-[10px]">
                            #include &lt;portfolio.h&gt;<br />
                            #include &lt;missions.h&gt;
                        </div>

                        <div className="mb-4">
                            void main() {'{'}
                        </div>

                        <div className="pl-6 md:pl-10">
                            <code>
                                {displayedText}
                                <span className="animate-pulse inline-block w-2.5 h-5 bg-white align-bottom ml-1"></span>
                            </code>
                        </div>

                        <div className="mt-4">
                            {'}'}
                        </div>
                    </pre>
                </div>

                {/* Vintage Frame Footer */}
                <div className="text-white leading-none font-bold whitespace-nowrap text-sm md:text-base overflow-hidden select-none">
                    <div className="flex justify-between items-center bg-black">
                        <span>╚═════════════════════════════════════════════════════════════════════════════════════════╝</span>
                    </div>
                </div>

                {/* Custom Scrollbar Styling */}
                <style jsx global>{`
                    .scrollbar-retro::-webkit-scrollbar {
                        width: 10px;
                        background: #111;
                    }
                    .scrollbar-retro::-webkit-scrollbar-thumb {
                        background: #eee; 
                        border: 2px solid #000;
                    }
                `}</style>

            </div>
        </div>
    );
}
