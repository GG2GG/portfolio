'use client';

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import MissionLog from "./components/MissionLog";
import ProjectShowcase from "./components/ProjectShowcase";
import Stats from "./components/Stats";
import Footer from "./components/layout/Footer";
import Preloader from "./components/ui/Preloader";
import ROISection from "./components/ROISection"; // Kept if needed, but linking to /services
import FloatingCTA from "./components/ui/FloatingCTA";
import FAQ from "./components/FAQ";
import StaticROIButton from "./components/ui/StaticROIButton";
import { portfolioData } from "./data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Session Check (Skip Preloader on internal navigation)
  useEffect(() => {
    // Check if we've already loaded this session (persists on Nav, clears on Refresh)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any)._hasSessionLoaded) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShowPreloader(false);
      setIsLoaded(true);
    }
  }, []);

  useGSAP(() => {
    // Zoom Transition Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%", // Extend scroll duration
        pin: true,
        scrub: 1, // Smooth scrub
        anticipatePin: 1
      }
    });

    // Animate Hero OUT (Scale Up + Fade)
    tl.to(heroRef.current, {
      scale: 1.2,
      autoAlpha: 0, // Unblocks pointer events when opacity hits 0
      filter: "blur(10px)",
      duration: 1,
      ease: "power2.inOut"
    }, 0);

    // Animate Profile IN (Zoom from Background)
    tl.fromTo(profileRef.current,
      {
        scale: 0.8,
        autoAlpha: 0, // Hidden initially so it doesn't block Hero
        y: 100
      },
      {
        scale: 1,
        autoAlpha: 1, // Becomes visible and interactive
        y: 0,
        duration: 1,
        ease: "power2.inOut"
      },
      0.2 // Small delay for overlap feel
    );

  }, { scope: containerRef });

  return (
    <main className="w-full bg-black">
      {showPreloader && (
        <Preloader
          onFinish={() => {
            setIsLoaded(true);
            setShowPreloader(false);
            if (typeof window !== 'undefined') {
              (window as any)._hasSessionLoaded = true;
            }
          }}
        />
      )}
      {/* Zoom Transition Container */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">

        {/* Layer 1: Hero (Bottom visually, but z-index lower than Profile when Profile appears) */}
        <div ref={heroRef} className="absolute inset-0 z-20 w-full h-full">
          <Hero startAnimation={isLoaded} />
        </div>

        {/* Layer 2: Profile (Top Layer for Interaction Priority) */}
        <div ref={profileRef} className="absolute inset-0 z-30 w-full h-full flex flex-col items-center justify-center bg-white text-black overflow-hidden pointer-events-auto">
          <div className="scale-[0.8] w-full h-full flex flex-col items-center justify-center">
            {/* The entire About Section zooms in */}
            <AboutSection />
          </div>
        </div>
      </div>

      {/* Subsequent Sections (Normal Scroll) */}
      <div className="relative z-30 bg-zinc-50">
        <Stats />
        <MissionLog />

        {/* Project Showcase */}
        <div className="relative z-30 bg-zinc-50">
          <ProjectShowcase />
        </div>

        {/* Global Floating CTA */}
        <FloatingCTA />



        {/* Footer */}
        <FAQ />
        <StaticROIButton />
        <Footer />
      </div>
    </main>
  );
}
