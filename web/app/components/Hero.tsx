'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RivePlayer from './ui/RivePlayer'; // New Architecture
import SplitText from './ui/SplitText';
import { portfolioData } from '../data/content';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    startAnimation?: boolean;
}

export default function Hero({ startAnimation = true }: HeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Initial Entry State
        if (!startAnimation) {
            gsap.set(containerRef.current, { autoAlpha: 0, y: 100 });
            return;
        }

        // ENTRY ANIMATION (Slide Up)
        gsap.to(containerRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out"
        });

        // STANDARD SCROLL LOGIC
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                scrub: true,
            }
        });

        // Parallax Effect (Background moves slower)
        tl.to(".rive-layer", { y: "20%", ease: "none" }, 0);

        // Content Fade Out
        tl.to(".hero-text", { opacity: 0, y: -50, ease: "none" }, 0);

        // Staggered Text Entry (Only if already loaded, otherwise handled by zoom)
        // We'll disable the standard text stagger on load if we are doing the zoom entry
        // to avoid double-animation chaos.
        // Scroll Indicator Animation ("Reveal" bounce + Arrow Stagger)
        if (scrollIndicatorRef.current) {
            // 1. Container explicit bounce (Suggests "Pull Up")
            gsap.to(scrollIndicatorRef.current, {
                y: -15,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // 2. Arrow Stagger Loop
            gsap.fromTo(".scroll-arrow",
                { opacity: 0, y: -10 },
                {
                    opacity: 1,
                    y: 5,
                    duration: 1.5,
                    stagger: {
                        each: 0.2,
                        repeat: -1,
                    },
                    ease: "power2.inOut"
                }
            );
        }
    }, { scope: containerRef, dependencies: [startAnimation] });

    return (
        <section ref={triggerRef} className="relative w-full h-[100vh] overflow-hidden" data-theme="dark">
            <div ref={containerRef} className="w-full h-full relative">
                {/* Rive Background Layer (Parallax) */}
                <div className="absolute inset-0 z-0 rive-layer scale-105">
                    <RivePlayer
                        src="https://cdn.rive.app/animations/vehicles.riv"
                        stateMachine="bumpy"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white hero-text pointer-events-none mix-blend-difference">
                    <div className="overflow-hidden">
                        <h1 className="hero-line text-6xl md:text-[10rem] font-black uppercase leading-none tracking-tighter">
                            <SplitText>{portfolioData.hero.title}</SplitText>
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-line text-6xl md:text-[10rem] font-black uppercase leading-none tracking-tighter text-brand">
                            <SplitText>{portfolioData.hero.lastName}</SplitText>
                        </h1>
                    </div>
                    <div className="mt-6 text-xl md:text-2xl font-bold tracking-widest uppercase opacity-100 hero-subtitle">
                        {portfolioData.hero.role}
                    </div>
                </div>

                {/* Tagline - Absolute Bottom */}
                {/* Scroll Indicator - Absolute Bottom */}
                <div ref={(el) => {
                    // @ts-ignore
                    scrollIndicatorRef.current = el;
                }} className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-2 z-20 pointer-events-none mix-blend-difference">

                    {/* Scroll Down Arrows - GSAP Animated */}
                    <div className="flex flex-col items-center gap-[-4px]">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="scroll-arrow w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 opacity-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
