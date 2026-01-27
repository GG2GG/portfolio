'use client';

import { useRef } from 'react';
import { portfolioData } from '@/app/data/content';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Footer from '@/app/components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

interface CaseStudyClientProps {
    slug: string;
}

export default function CaseStudyClient({ slug }: CaseStudyClientProps) {
    const router = useRouter();
    const containerRef = useRef<HTMLDivElement>(null);

    // Data Lookup
    const projectIndex = portfolioData.projects.findIndex(p => p.slug === slug);
    const project = portfolioData.projects[projectIndex];

    // Navigation Logic (Looping)
    const prevProject = projectIndex > 0
        ? portfolioData.projects[projectIndex - 1]
        : portfolioData.projects[portfolioData.projects.length - 1];

    const nextProject = projectIndex < portfolioData.projects.length - 1
        ? portfolioData.projects[projectIndex + 1]
        : portfolioData.projects[0];

    // Initial & Scroll Animation
    useGSAP(() => {
        if (!containerRef.current) return;

        // Entry
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".animate-title", { y: 50, opacity: 0, duration: 1 })
            .from(".animate-meta", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
            .from(".animate-image", { scale: 0.95, opacity: 0, duration: 1.2 }, "-=0.6")
            .from(".animate-sidebar", { x: -20, opacity: 0, duration: 1 }, "-=0.8");

        // Scroll Reveals for Content
        const sections = gsap.utils.toArray('.scroll-reveal');
        sections.forEach((section: any) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 95%", // Trigger almost immediately when in view
                    toggleActions: "play none none none" // Don't reverse/hide
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

    }, { scope: containerRef, dependencies: [slug] });

    if (!project || !project.caseStudy) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading or Project Not Found...</div>;
    }

    // Dynamic Color Theme based on Category (Simplified)
    const accentColor = "text-teal-500";
    const gradientBg = "from-teal-500/10 to-transparent";

    return (
        <main ref={containerRef} className="min-h-screen bg-white text-black selection:bg-teal-500 selection:text-white">

            {/* Background Splash */}
            <div className={`fixed top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b ${gradientBg} rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-50`} />

            {/* Nav / Back - Pushed down to avoid overlap with global nav */}
            <nav className="fixed top-24 left-0 w-full px-6 md:px-12 z-40 flex justify-between items-center pointer-events-none text-white">
                <button
                    onClick={() => router.back()}
                    className="pointer-events-auto group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-white/70 transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Go Back
                </button>
                <div className="text-xs font-mono opacity-50 mix-blend-difference">{String(projectIndex + 1).padStart(2, '0')} / {portfolioData.projects.length}</div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-32 pb-12 md:pb-20 px-6 md:px-24 max-w-[1600px] mx-auto z-10">

                {/* Header */}
                <div className="mb-16 md:mb-24 relative">
                    <span className={`animate-meta block text-sm font-bold tracking-widest ${accentColor} mb-6 uppercase`}>
                        Case Study • {project.category}
                    </span>
                    <h1 className="animate-title text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-8">
                        {project.title}
                    </h1>
                    <p className="animate-meta text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-light">
                        {project.description}
                    </p>
                </div>

                {/* Hero Image */}
                <div className={`animate-image relative w-full h-auto bg-zinc-50 rounded-2xl overflow-hidden mb-24 border border-zinc-100 shadow-2xl`}>
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto block"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Placeholder Graphic */}
                            <div className="text-center opacity-30">
                                <div className="w-24 h-24 border-2 border-dashed border-zinc-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                    <span className="text-xs font-mono">IMG</span>
                                </div>
                                <span className="text-xs font-mono uppercase tracking-[0.5em] text-zinc-400">Visual Assets Pending</span>
                            </div>
                        </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
                </div>

                {/* Hero Stats / Summary */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 border-t border-zinc-200 pt-12 md:pt-20">
                    <div className="md:col-span-4 animate-sidebar">
                        <div className="sticky top-32">
                            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-8 border-b border-zinc-100 pb-4">
                                Project Data
                            </h3>
                            <ul className="space-y-8">
                                <div>
                                    <label className="block text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Role</label>
                                    <div className="text-xl font-serif text-zinc-900">AI Technical Product Manager</div>
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Timeline</label>
                                    <div className="text-xl font-serif text-zinc-900">4 Months</div>
                                </div>
                                <div>
                                    <label className="block text-[10px] text-zinc-400 uppercase tracking-widest mb-2">Primary Impact</label>
                                    <div className="text-xl font-serif text-zinc-900 leading-snug">{project.caseStudy.impact.split('.')[0]}Faster checkout and experience handling</div>
                                </div>
                            </ul>

                            {/* Tech Stack */}
                            <div className="mt-12">
                                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.caseStudy.features.map((f, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-zinc-50 border border-zinc-100 text-zinc-500 text-[10px] font-mono rounded-md uppercase tracking-wide">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Rail: Narrative */}
                    <div className="md:col-span-8 space-y-32">

                        {/* Section: The Challenge (or Custom Title) */}
                        {project.caseStudy.problem && (
                            <div className="scroll-reveal">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-baseline gap-6">
                                    {!project.caseStudy.sectionTitles && <span className={`text-base font-mono ${accentColor} font-normal`}>01</span>}
                                    {project.caseStudy.sectionTitles?.problem || "The Challenge"}
                                </h2>
                                <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 font-serif">
                                    {project.caseStudy.problem}
                                </p>
                            </div>
                        )}

                        {/* Image Break 1 (Challenge Visual or Gallery) */}
                        {project.caseStudy.challengeGallery ? (
                            <div className="scroll-reveal grid grid-cols-1 gap-12">
                                {project.caseStudy.challengeGallery.map((img: string, i: number) => (
                                    <div key={i} className="w-full bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-md relative">
                                        <img
                                            src={img}
                                            alt={`Cashier Interface ${i + 1}`}
                                            className="w-full h-auto block"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : project.caseStudy.challengeImage ? (
                            <div className="scroll-reveal w-full bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-lg relative h-auto">
                                <img
                                    src={project.caseStudy.challengeImage}
                                    alt="Challenge Visualization"
                                    className="w-full h-auto block"
                                />
                            </div>
                        ) : project.caseStudy.problem ? (
                            <div className="scroll-reveal w-full aspect-[16/10] bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center shadow-lg">
                                <div className="text-center opacity-20">
                                    <span className="text-4xl block mb-2">❖</span>
                                    <span className="text-[10px] font-mono uppercase tracking-widest">Wireframe View</span>
                                </div>
                            </div>
                        ) : null}

                        {/* Section: The Solution (or Custom Title) */}
                        {project.caseStudy.solution && (
                            <div className="scroll-reveal">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-baseline gap-6 mt-32">
                                    {!project.caseStudy.sectionTitles && <span className={`text-base font-mono ${accentColor} font-normal`}>02</span>}
                                    {project.caseStudy.sectionTitles?.solution || "The Solution"}
                                </h2>
                                <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 font-serif mb-8">
                                    {project.caseStudy.solution}
                                </p>
                            </div>
                        )}

                        {/* Image Break 2 (Solution Visual or Gallery) */}
                        {project.caseStudy.solutionGallery ? (
                            <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                                {project.caseStudy.solutionGallery.map((img: string, i: number) => (
                                    <div key={i} className={`w-full ${project.caseStudy.solutionImagePortrait ? 'max-w-sm mx-auto' : ''} bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-lg relative`}>
                                        <img
                                            src={img}
                                            alt={`Customer Interface ${i + 1}`}
                                            className="w-full h-auto block"
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : project.caseStudy.solutionImage ? (
                            <div className={`scroll-reveal w-full ${project.caseStudy.solutionImagePortrait ? 'max-w-sm mx-auto' : ''} bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-lg relative h-auto mb-32`}>
                                <img
                                    src={project.caseStudy.solutionImage}
                                    alt="Solution Visualization"
                                    className="w-full h-auto block"
                                />
                            </div>
                        ) : project.caseStudy.solution ? (
                            <div className="scroll-reveal grid grid-cols-2 gap-4 mb-32">
                                <div className="aspect-square bg-zinc-900 rounded-xl flex items-center justify-center shadow-lg">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Dark Mode UI</span>
                                </div>
                                <div className="aspect-square bg-zinc-50 rounded-xl border border-zinc-100 flex items-center justify-center shadow-lg">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-300">Light Mode UI</span>
                                </div>
                            </div>
                        ) : null}

                        {/* Section: The Impact (or Custom Title) */}
                        {project.caseStudy.impact && (
                            <div className="scroll-reveal">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-baseline gap-6">
                                    {!project.caseStudy.sectionTitles && <span className={`text-base font-mono ${accentColor} font-normal`}>03</span>}
                                    {project.caseStudy.sectionTitles?.impact || "The Impact"}
                                </h2>
                                <p className="text-xl md:text-2xl leading-relaxed text-zinc-700 font-serif mb-8">
                                    {project.caseStudy.impact}
                                </p>

                                {/* Impact Visual */}
                                {project.caseStudy.impactImage && (
                                    <div className="mt-12 w-full bg-zinc-50 rounded-xl overflow-hidden border border-zinc-100 shadow-lg relative h-auto">
                                        <img
                                            src={project.caseStudy.impactImage}
                                            alt="Impact Visualization"
                                            className="w-full h-auto block"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="mt-20 pt-12 border-t border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Previous */}
                    <Link href={prevProject.link || '#'} className="group block text-left">
                        <span className="block text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4 group-hover:text-teal-500 transition-colors">Previous Case Study</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-zinc-300 group-hover:text-black transition-colors">
                            {prevProject.title}
                        </h2>
                    </Link>

                    {/* Next */}
                    <Link href={nextProject.link || '#'} className="group block text-right">
                        <span className="block text-xs font-bold tracking-widest text-zinc-400 uppercase mb-4 group-hover:text-teal-500 transition-colors">Next Case Study</span>
                        <h2 className="text-3xl md:text-5xl font-black uppercase text-zinc-300 group-hover:text-black transition-colors">
                            {nextProject.title}
                        </h2>
                    </Link>
                </div>

            </section>
            <Footer />
        </main>
    );
}
