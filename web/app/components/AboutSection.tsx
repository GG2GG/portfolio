'use client';

import { portfolioData } from '../data/content';
import ProfileReveal from './ProfileReveal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function AboutSection() {
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".about-text", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 70%"
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    }, { scope: container });

    return (
        <section ref={container} className="py-16 md:py-32 px-4 md:px-8 bg-white" data-theme="light">
            <div className="max-w-[1600px] mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-32 items-center">

                {/* Left Column: Bio Text */}
                <div className="space-y-10 w-full">
                    <h2 className="about-text text-5xl md:text-7xl font-black uppercase tracking-tighter text-center md:text-left">
                        Who I Am
                    </h2>

                    {/* Skills Grid - Move Up for Mobile impact */}
                    <div className="about-text flex flex-col items-center md:items-start">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Core Competencies</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {portfolioData.about.skills.map(skill => (
                                <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-900 border border-zinc-200 text-xs font-bold uppercase tracking-widest rounded-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="about-text space-y-8 text-xl md:text-2xl leading-relaxed text-gray-700 font-medium text-center md:text-left">
                        <p>{portfolioData.about.description}</p>
                        <p>
                            I specialize in building digital experiences that merge technical precision with aesthetic fluidity.
                            My work is defined by a commitment to performance, accessibility, and pixel-perfect execution.
                        </p>
                    </div>
                </div>

                {/* Right Column: Interactive Profile */}
                <div className="about-text w-full">
                    <ProfileReveal />
                </div>

            </div>
        </section>
    );
}
