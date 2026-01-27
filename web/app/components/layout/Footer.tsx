'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '@/app/data/content';
import Link from 'next/link';
import { getAssetPath } from '@/app/utils/assets';

export default function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const icon = iconRef.current;
        if (!icon) return;

        const onMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();

            // Eye Tracking Logic
            const eyes = document.querySelectorAll('.mascot-eye');
            eyes.forEach(eye => {
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;
                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
                const distance = Math.min(8, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 10);

                gsap.to(eye, {
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    duration: 0.2
                });
            });

            // Head Tilt (Parallax)
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            gsap.to('.mascot-head', {
                rotationY: (x - 0.5) * 15,
                rotationX: (y - 0.5) * -10,
                duration: 0.8,
                transformPerspective: 1000
            });
        };



        const onScrollComplete = () => {
            const tl = gsap.timeline();


            // 1. (Removed) Text is now static


            // 2. Nav & Ticker "Fall into place"
            tl.to(['.footer-nav', '.footer-ticker'], {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "back.out(1.7)"
            }, "-=0.6");

            // 3. Mascot Pop
            tl.to('.mascot-head', {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "elastic.out(1, 0.75)"
            }, "-=0.6");
        };

        // Initial Hiding
        gsap.set(['.footer-nav', '.footer-ticker', '.mascot-head'], {
            autoAlpha: 0,
            y: 50
        });

        window.addEventListener('scroll-complete', onScrollComplete);
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('scroll-complete', onScrollComplete);
        }

    }, { scope: containerRef });

    return (
        <footer
            ref={containerRef}
            className="relative w-[95%] md:w-[98%] mx-auto mb-4 md:mb-6 rounded-b-[40px] md:rounded-b-[60px] pt-20 pb-6 overflow-hidden min-h-screen flex flex-col justify-end bg-transparent"
            data-theme="dark"
        >
            {/* The "Hill" Background */}
            <div className="absolute inset-0 top-[20%] md:top-[25%] w-full h-[120%] bg-[#0a0a0a]">
                {/* SVG Notch Curve at the top */}
                <div className="absolute -top-[50px] md:-top-[80px] left-0 w-full h-[80px] md:h-[120px] z-0">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full fill-[#0a0a0a]">
                        {/* 
                            Path Logic:
                            1. Start bottom-left (0,120)
                            2. Line to top-left corner with curve (0,40) -> (40,0)
                            3. Line across to start of center notch
                            4. Curve up for notch
                            5. Line across to top-right
                            6. Curve down to bottom-right (1400,0) -> (1440,40)
                            7. Close shape
                        */}
                        <path d="M0,120 L0,40 Q0,0 40,0 L610,0 Q680,0 720,-30 Q760,0 830,0 L1400,0 Q1440,0 1440,40 L1440,120 Z" />
                    </svg>
                </div>

                {/* Grid Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col items-center pb-10 flex-1">

                {/* 1. Main Visual: Mascot & Text */}
                <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-start pt-32 md:pt-20 mb-2 text-center">

                    {/* Big Text Layer (Relative Flow) */}
                    <div className="footer-text relative w-full flex flex-col items-center justify-center text-center z-0 pointer-events-none select-none mb-12 transition-all duration-1000">
                        <h2 className="flex flex-col items-center leading-none">
                            <span className="text-[10vw] md:text-[8vw] font-anton uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-400 to-zinc-700">
                                ALWAYS BUILDING
                            </span>
                            <span className="text-[10vw] md:text-[8vw] font-anton uppercase tracking-tight text-[#ccff00]">
                                THE FUTURE
                            </span>
                        </h2>
                    </div>

                    {/* Mascot (Anchored to Bottom of Container) */}
                    {/* -bottom-10 to overlap nicely with the footer links/hill */}


                </div>
            </div>



            {/* 2. Side Columns (Navigation) */}
            <div className="footer-nav w-full max-w-[1600px] mx-auto px-6 md:px-12 flex flex-row justify-between items-start md:items-end mb-10 relative z-20">

                {/* Left: Pages */}
                <div className="flex flex-col gap-2 text-left">
                    <h5 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Pages</h5>
                    {
                        [
                            { name: 'HOME', url: '/' },
                            { name: 'WORK', url: '/#work' },
                            { name: 'ABOUT', url: '/services' },
                            { name: 'CONTACT', action: () => window.dispatchEvent(new CustomEvent('open-contact')) }
                        ].map(item => (
                            item.action ? (
                                <button key={item.name} onClick={item.action} className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors text-left">{item.name}</button>
                            ) : (
                                <Link key={item.name} href={item.url} className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors">{item.name}</Link>
                            )
                        ))
                    }
                    <a href={getAssetPath("/resume.pdf")} download="Gautham_Ganesh_CV.pdf" className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-[#ccff00] mt-4 hover:underline">RESUME</a>
                </div>

                {/* Right: Socials */}
                <div className="flex flex-col gap-2 text-right">
                    <h5 className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">Follow On</h5>
                    {
                        [

                            { name: 'LINKEDIN', url: portfolioData.contact.linkedin },
                            { name: 'GITHUB', url: portfolioData.contact.github },
                            { name: 'EMAIL', action: () => window.dispatchEvent(new CustomEvent('open-contact')) },
                            { name: 'X', url: portfolioData.contact.x }
                        ].map(item => (
                            item.action ? (
                                <button key={item.name} onClick={item.action} className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors text-right">{item.name}</button>
                            ) : (
                                <a key={item.name} href={item.url.startsWith('http') ? item.url : `https://${item.url}`} target="_blank" className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white hover:text-[#ccff00] transition-colors">
                                    {item.name}
                                </a>
                            )
                        ))
                    }
                </div>
            </div>

            {/* 3. Bottom Logo Ticker */}
            <div className="footer-ticker w-full max-w-[1600px] mx-auto px-6 pt-8 border-t border-zinc-900 flex flex-wrap justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 z-20 relative" >
                {/* Placeholders for logos */}
                <div className="flex items-center gap-8 md:gap-16 overflow-hidden" >
                    {
                        ['NEXT.JS', 'REACT', 'TYPESCRIPT', 'TAILWIND', 'GSAP', 'NODE.JS', 'PYTHON', 'RIVE'].map(tech => (
                            <span key={tech} className="font-mono font-bold text-sm text-white tracking-widest">{tech}</span>
                        ))
                    }
                </div >
                <div className="hidden md:flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase">
                    <span>© 2026 GG</span>
                    <span>All Rights Reserved</span>
                </div>
            </div >

            {/* Mascot (Anchored to Bottom of Footer) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div ref={iconRef} className="mascot-head w-40 h-40 md:w-[400px] md:h-[400px] relative transition-transform will-change-transform">
                    {/* SVG Droid Face (Scaled Up) */}
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_20px_50px_rgba(204,255,0,0.15)]">
                        {/* Antennas */}
                        <line x1="60" y1="50" x2="60" y2="20" stroke="#fff" strokeWidth="3" />
                        <circle cx="60" cy="15" r="4" fill="#ccff00" />
                        <line x1="140" y1="50" x2="140" y2="20" stroke="#fff" strokeWidth="3" />
                        <circle cx="140" cy="15" r="4" fill="#ccff00" />

                        {/* Head Shape */}
                        <rect x="30" y="50" width="140" height="110" rx="35" fill="#111" stroke="#333" strokeWidth="3" />

                        {/* Mouth / Grill */}
                        <path d="M80 140 H120" stroke="#444" strokeWidth="3" strokeLinecap="round" />
                        <path d="M85 145 H115" stroke="#444" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

                        {/* Eyes Container */}
                        <circle cx="75" cy="95" r="24" fill="#000" stroke="#333" strokeWidth="2" />
                        <circle cx="125" cy="95" r="24" fill="#000" stroke="#333" strokeWidth="2" />

                        {/* Pupils (Tracking Targets) */}
                        <g className="mascot-eye">
                            <circle cx="75" cy="95" r="10" fill="#ccff00" />
                            <circle cx="78" cy="92" r="4" fill="#fff" opacity="0.8" />
                        </g>
                        <g className="mascot-eye">
                            <circle cx="125" cy="95" r="10" fill="#ccff00" />
                            <circle cx="128" cy="92" r="4" fill="#fff" opacity="0.8" />
                        </g>
                    </svg>
                </div>
            </div >


        </footer >
    );
}
