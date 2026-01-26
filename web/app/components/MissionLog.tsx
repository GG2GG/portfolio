'use client';

import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { missions } from '@/lib/missions';
import MissionRail from './mission/MissionRail';
import MissionCard from './mission/MissionCard';

gsap.registerPlugin(ScrollTrigger);

export default function MissionLog() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Use all missions
    const activeMissions = missions;

    useEffect(() => {
        const sections = document.querySelectorAll('.mission-panel');

        sections.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveIndex(index),
                onEnterBack: () => setActiveIndex(index),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={containerRef} className="relative bg-zinc-950">
            <div className="flex flex-col w-full">
                {activeMissions.map((mission, index) => (
                    <div
                        key={mission.id}
                        className="mission-panel w-full min-h-screen flex flex-col md:flex-row bg-zinc-950 border-b border-zinc-900 last:border-b-0"
                    >

                        {/* Left Rail - Header on Mobile, Sticky Rail on Desktop */}
                        <div className="w-full md:w-[30%] h-auto md:h-screen sticky top-0 md:top-0 border-b md:border-b-0 md:border-r border-zinc-900 p-8 flex flex-col justify-between relative bg-black z-20 md:z-10 transition-colors duration-500">
                            <MissionRail
                                mission={mission}
                                index={index}
                                total={activeMissions.length}
                                isActive={index === activeIndex}
                            />
                        </div>

                        {/* Right Content - The Case Study Card */}
                        <div className="w-full md:w-[70%] min-h-auto md:min-h-screen relative overflow-hidden flex items-center justify-center p-4 md:p-8 bg-zinc-950/50">
                            <MissionCard mission={mission} isActive={index === activeIndex} />
                        </div>
                    </div>
                ))}
            </div>


        </section>
    );
}
