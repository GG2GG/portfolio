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
    return (
        <div
            ref={containerRef}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[9999] bg-[#0000AA] text-white font-mono flex flex-col items-center justify-center p-2 overscroll-y-contain pointer-events-auto select-none"
        >
            {/* Top Menu Bar */}
            <div className="absolute top-0 left-0 w-full bg-[#D3D3D3] text-black flex px-4 py-1 text-sm md:text-base font-bold shadow-sm z-50 pointer-events-none">
                <span className="mr-6"><span className="text-[#AA0000]">≡</span></span>
                <span className="mr-6"><span className="text-[#AA0000]">F</span>ile</span>
                <span className="mr-6"><span className="text-[#AA0000]">E</span>dit</span>
                <span className="mr-6"><span className="text-[#AA0000]">S</span>earch</span>
                <span className="mr-6"><span className="text-[#AA0000]">R</span>un</span>
                <span className="mr-6"><span className="text-[#AA0000]">C</span>ompile</span>
                <span className="mr-6 hidden md:inline"><span className="text-[#AA0000]">D</span>ebug</span>
                <span className="mr-6 hidden md:inline"><span className="text-[#AA0000]">P</span>roject</span>
                <span className="mr-6 hidden md:inline"><span className="text-[#AA0000]">O</span>ptions</span>
                <span className="mr-6 hidden md:inline"><span className="text-[#AA0000]">W</span>indow</span>
                <span className="mr-6"><span className="text-[#AA0000]">H</span>elp</span>
            </div>

            {/* Main Window Frame */}
            <div className="relative w-full max-w-[95%] md:max-w-6xl h-[85vh] mt-6 flex flex-col">

                {/* Window Title Bar (Top Border) */}
                <div className="text-white leading-none font-bold whitespace-nowrap text-sm md:text-base overflow-hidden">
                    <div className="flex justify-between items-center bg-[#0000AA]">
                        <span>╔═[<span className="text-[#55FF55]">■</span>]══════════════════════════════════════</span>
                        <span className="px-2 bg-[#0000AA] text-yellow-300 mx-auto -translate-y-[1px]">PORTFOLIO.CPP</span>
                        <span>═══════════════════════[<span className="text-[#55FF55]">↑</span>]═╗</span>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-[#0000AA] border-x-2 border-double border-white overflow-y-auto overflow-x-hidden relative scrollbar-retro p-1">
                    <div className="w-full min-h-full p-2 md:p-4 text-xs md:text-sm lg:text-base">
                        <pre className="whitespace-pre-wrap font-mono relative">
                            {/* Line Numbers Sidebar */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 border-r border-white/20 text-[#00AAAA] select-none hidden md:block">
                                {Array.from({ length: 20 }).map((_, i) => (
                                    <div key={i} className="text-right pr-2">{i + 1}</div>
                                ))}
                            </div>

                            {/* Code Payload */}
                            <div className="md:pl-10">
                                <span className="text-[#55FF55]">#include</span> <span className="text-[#FF5555]">&lt;portfolio.h&gt;</span>
                                <br />
                                <span className="text-[#55FF55]">#include</span> <span className="text-[#FF5555]">&lt;missions.h&gt;</span>
                                <br />
                                <br />
                                <span className="text-white">void</span> <span className="text-yellow-300">main</span>() {'{'}
                                <br />
                                <span className="text-white ml-4">Portfolio g_driver = </span><span className="text-[#00AAAA]">DETECT</span>;
                                <br />
                                <span className="text-white ml-4">initgraph(&g_driver, "C:\\PORTFOLIO\\BGI");</span>
                                <br />
                                <br />
                                <code className="language-json text-yellow-300 block">
                                    {displayedText}
                                    <span className="animate-pulse inline-block w-2.5 h-5 bg-[#55FF55] align-bottom ml-1"></span>
                                </code>
                                <span className="text-white">{'}'}</span>
                            </div>
                        </pre>
                    </div>
                </div>

                {/* Window Bottom Border */}
                <div className="text-white leading-none font-bold whitespace-nowrap text-sm md:text-base overflow-hidden">
                    <div className="flex justify-between items-center bg-[#0000AA]">
                        <span>╚═══════════════════════════════════════════════════════════════════════════════════════<span className="text-[#00AAAA]">1:1</span>══╝</span>
                    </div>
                </div>

                {/* Scrollbar styling injected within scope */}
                <style jsx global>{`
                    .scrollbar-retro::-webkit-scrollbar {
                        width: 16px;
                        background: #D3D3D3;
                        border: 1px solid white;
                    }
                    .scrollbar-retro::-webkit-scrollbar-thumb {
                        background: #0000AA; 
                        border: 2px solid white;
                        image-rendering: pixelated;
                        background-image: repeating-linear-gradient(45deg, transparent, transparent 2px, #ffffff 2px, #ffffff 4px);
                    }
                    .scrollbar-retro::-webkit-scrollbar-button {
                        background: #D3D3D3;
                        color: black;
                        display: block;
                        height: 16px;
                        border: 1px outset white;
                    }
                `}</style>

            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-[#D3D3D3] text-black flex items-center px-2 py-1 text-xs md:text-sm font-bold gap-4 z-50">
                <span><span className="text-[#AA0000]">F1</span> Help</span>
                <span><span className="text-[#AA0000]">F2</span> Save</span>
                <span><span className="text-[#AA0000]">F3</span> Open</span>
                <span><span className="text-[#AA0000]">Alt-F9</span> Compile</span>
                <span><span className="text-[#AA0000]">F9</span> Make</span>
                <span><span className="text-[#AA0000]">F10</span> Menu</span>
            </div>
        </div>
    );
}
