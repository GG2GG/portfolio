'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import { portfolioData } from '../data/content';

// --- CONFIGURATION ---
// Edit these values to adjust the animation feel
// --- CONFIGURATION ---
// Edit these values to adjust the animation feel
const ANIM_DURATION = 0.4; // Faster, snappier movement
const ANIM_EASE = "back.out(1.2)"; // Bouncy "pop" effect
const ANIM_DELAY = 0; // Immediate response (removed lag)
const SPREAD_SPACING = 320; // Cards spread wide enough to be fully visible
// --- LAYOUT CONFIGURATION ---
const SECTION_GAP = 40;    // Vertical gap between Header, Cards, and Text (px)
const SECTION_PADDING = 10; // Top/Bottom padding of the section (px)
// ---------------------

export default function ProjectShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [stageHeight, setStageHeight] = useState(600); // Default reactive height
    const router = useRouter();

    const handleGhostClick = (index: number) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const link = (portfolioData.projects[index] as any).link;
        if (link) {
            router.push(link);
        }
    };

    // Measure and set reactive height
    const updateDimensions = () => {
        const cards = containerRef.current?.querySelectorAll('.project-card');
        // Fallback if no cards found yet, assuming standard height 500
        let cardHeight = 500;

        if (cards && cards.length > 0) {
            const measured = cards[0].getBoundingClientRect().height;
            if (measured > 0) cardHeight = measured;
        }

        // Calculate maximum vertical dip (fan effect)
        // Max index distance from center
        const count = cards ? cards.length : 5; // Fallback count
        const mid = (count - 1) / 2;
        const maxDist = Math.max(mid, count - 1 - mid);
        // Formula from yOffset logic: Math.pow(dist, 2) * 12
        const maxDip = Math.pow(maxDist, 2) * 12;

        // Total needed height = Card Height + Max Dip + Buffer
        // buffer reduced to 50px per user request to remove vacant space
        const totalHeight = cardHeight + maxDip + 50;

        setStageHeight(totalHeight);
    };

    // Run on Mount + Resize
    useEffect(() => {
        // Run immediately (next frame to avoid warning)
        requestAnimationFrame(() => updateDimensions());

        // Run again after a delay to ensure paint
        const timeout = setTimeout(updateDimensions, 500);

        // Resize Listener
        window.addEventListener('resize', updateDimensions);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

        // Also run measurement here just in case GSAP context is ready
        updateDimensions();

        cards.forEach((card, i) => {
            // Initial Fan State
            const mid = (cards.length - 1) / 2;
            const distFromMid = i - mid;
            const xOffset = distFromMid * 50;
            const rotate = distFromMid * 4;
            const yOffset = Math.pow(distFromMid, 2) * 12; // Quadratic Arc

            // Set initial position
            gsap.set(card, {
                x: xOffset,
                y: yOffset,
                xPercent: -50, // Center horizontally
                rotation: rotate,
                transformOrigin: "bottom center",
                zIndex: i, // Base z-index
            });
        });
    }, { scope: containerRef });

    // ... (imports and constants remain) ...

    // ... (helper functions like updateDimensions remain) ...

    // Modified Handlers for Ghost Columns
    const handleGhostEnter = (index: number) => {
        setActiveIndex(index);
        const cards = containerRef.current?.querySelectorAll('.project-card');
        if (!cards) return;

        cards.forEach((card, i) => {
            gsap.killTweensOf(card);

            if (i === index) {
                // Active Card
                gsap.to(card, {
                    x: 0,
                    y: -20,
                    xPercent: -50, // Maintain centering
                    scale: 1.1,
                    rotation: 0,
                    zIndex: 100,
                    opacity: 1,
                    duration: ANIM_DURATION,
                    delay: ANIM_DELAY,
                    ease: ANIM_EASE,
                    overwrite: 'auto'
                });
            } else {
                // Neighbors
                const distance = i - index;
                const spacing = SPREAD_SPACING;
                const xPos = distance * spacing;
                const yPos = 10;
                const rotate = distance * 2;

                gsap.to(card, {
                    x: xPos,
                    y: yPos,
                    xPercent: -50, // Maintain centering
                    rotation: rotate,
                    scale: 0.9,
                    zIndex: 10 - Math.abs(distance),
                    opacity: 0.6,
                    duration: ANIM_DURATION,
                    delay: ANIM_DELAY,
                    ease: ANIM_EASE,
                    overwrite: 'auto'
                });
            }
        });
    };

    const handleGhostLeave = () => {
        setActiveIndex(null);
        const cards = containerRef.current?.querySelectorAll('.project-card');
        if (!cards) return;

        cards.forEach((card, i) => {
            gsap.killTweensOf(card);
            const mid = (cards.length - 1) / 2;
            const distFromMid = i - mid;
            const xOffset = distFromMid * 50;
            const rotate = distFromMid * 4;
            const yOffset = Math.pow(distFromMid, 2) * 12;

            gsap.to(card, {
                x: xOffset,
                y: yOffset,
                xPercent: -50, // Maintain centering
                rotation: rotate,
                scale: 1,
                zIndex: i,
                opacity: 1,
                duration: 0.6,
                ease: "power3.out",
                overwrite: 'auto'
            });
        });
    };

    return (
        <section
            className="relative w-full bg-zinc-100 flex flex-col items-center justify-center overflow-visible"
            id="work"
            style={{
                gap: `${SECTION_GAP}px`,
                paddingTop: `20px`, // Reduced from 100px to 20px
                paddingBottom: `0px` // Remove bottom padding per user request
            }}
        >
            {/* Background Blend to Next Section (Zinc-50) */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-zinc-50 pointer-events-none z-0" />

            {/* 1. Header (Top) */}
            <div className="z-10 text-center">
                <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.8] mb-2">
                    Product<br className="md:hidden" /><span className="text-zinc-300">Showcase</span>
                </h2>
                <p className="text-zinc-500 text-sm md:text-lg font-light uppercase tracking-widest">
                    Hover to explore
                </p>
            </div>

            {/* 2. Stage (Cards) - Middle */}

            {/* MOBILE VIEW: Horizontal Snap Scroll Carousel */}
            <div className="relative w-full h-[500px] flex md:hidden items-center overflow-x-auto snap-x snap-mandatory px-8 gap-6 no-scrollbar z-20">
                {portfolioData.projects.map((project, i) => (
                    <div
                        key={`mobile-${project.id}`}
                        className="relative w-[85vw] h-[450px] shrink-0 snap-center bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-xl"
                        onClick={() => {
                            if (project.link) router.push(project.link);
                        }}
                    >
                        {/* Image Placeholder / Background */}
                        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                            <div className={`w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950`} />
                            <span className="absolute -bottom-10 -right-10 text-[150px] font-black text-white/5 leading-none select-none">
                                0{i + 1}
                            </span>
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 to-transparent">
                            <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-full w-fit">
                                {project.category}
                            </span>
                            <h3 className="text-3xl font-bold uppercase leading-none text-white mb-4">
                                {project.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ccff00]">
                                View Case Study <span>→</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP VIEW: GSAP Fan Interaction */}
            <div
                className="hidden md:flex relative w-full items-center justify-center z-20"
                style={{ height: `${stageHeight}px`, transition: 'height 0.3s ease-out' }}
            >
                {/* --- INTERACTION LAYER (GHOST COLUMNS) --- */}
                {/* Sits on top (z-50), invisible, handles events */}
                {/* Constrained width to match the visual "Fan" closely so mapping feels 1:1 */}
                {/* Constrained height to top (600px) so hover doesn't trigger in the empty buffer zone below */}
                <div
                    className="absolute top-0 h-[550px] left-1/2 -translate-x-1/2 w-full max-w-[600px] flex items-center justify-center z-50 pointer-events-auto"
                    onMouseLeave={handleGhostLeave}
                >
                    {portfolioData.projects.map((project, i) => (
                        <div
                            key={`ghost-${project.id}`}
                            className="h-full flex-1 bg-transparent cursor-pointer"
                            onMouseEnter={() => handleGhostEnter(i)}
                            onClick={() => {
                                if (project.link) router.push(project.link);
                            }}
                        />
                    ))}
                </div>

                {/* --- VISUAL LAYER (CARDS) --- */}
                {/* z-10 to z-20, pointer-events-NONE to prevent jitter */}
                <div
                    ref={containerRef}
                    className="relative w-full h-full flex items-center justify-center perspective-[1000px] pointer-events-none"
                >
                    {portfolioData.projects.map((project, i) => {
                        const isActive = i === activeIndex;
                        return (
                            <div
                                key={project.id}
                                className="project-card absolute top-0 mt-12 left-1/2 w-[280px] h-[400px] md:w-[340px] md:h-[500px] bg-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl"
                            >
                                {/* Card Content */}
                                <div className="relative w-full h-full group">
                                    {/* Image Placeholder / Background */}
                                    <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                                        <div className={`w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950`} />

                                        {/* Large Number BG (Faded) */}
                                        <span className="absolute -bottom-10 -right-10 text-[200px] font-black text-white/5 leading-none select-none transition-opacity duration-500">
                                            0{i + 1}
                                        </span>
                                    </div>

                                    {/* Content Overlay (New) */}
                                    <div className={`absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                        <div className="transform transition-transform duration-500 translate-y-2">
                                            {/* Category Badge */}
                                            <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest uppercase bg-white text-black rounded-full shadow-lg">
                                                {project.category}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-2xl md:text-3xl font-bold uppercase leading-none text-white mb-2">
                                                {project.title}
                                            </h3>

                                            {/* Action Button (Reveals on Active) */}
                                            <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-[50px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                                                <button className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
                                                    View Case Study
                                                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 3. Context Panel (Text) - Removed per user request */}
            {/* The activeIndex state is preserved for card animations, but no text is shown. */}

        </section>
    );
}
