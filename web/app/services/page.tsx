'use client';

import ProcessTimeline from '../components/roi/ProcessTimeline';
import Footer from "../components/layout/Footer";
import Image from 'next/image';

export default function ServicesPage() {
    return (
        <main className="w-full min-h-screen bg-black text-white pt-24">

            {/* 1. Hero / Intro */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-8">
                    More Than <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-zinc-500">Just a Prod-Man</span>
                </h1>
                <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 leading-relaxed font-light border-l py-4 pl-4 border-zinc-800">
                    I believe great products are born at the intersection of technical precision and human intuition.
                    I don't just build systems; I orchestrate experiences.
                </p>
            </section>

            {/* 2. Bio & Personal Grid */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Text Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#ccff00] mb-4">The Origin Story</h2>
                            <p className="text-zinc-300 leading-8 text-lg">
                                My journey began not in a computer lab, but understanding how things work. From engineering systems at college, participating in Japanese Robotics research to architecting SaaS products & AI Developments, the drive has always been the same: <strong className="text-white">Curiosity.</strong>
                            </p>
                            <p className="text-zinc-300 leading-8 text-lg mt-4">
                                Today, I act as a bridge. A bridge between the abstract world of AI research and the tangible reality of user needs. I speak fluent Engineer, Product, and Design, allowing me to eliminate the friction that typically kills innovation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#ccff00] mb-4">Philosophy</h2>
                            <blockquote className="text-3xl font-black leading-tight text-white">
                                "Complexity should be internal. Simplicity should be external."
                            </blockquote>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="relative w-full h-[600px] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
                        {/* Placeholder for Profile / Candid Shot */}
                        {/* Profile Image */}
                        <div className="absolute inset-0">
                            <Image
                                src="/assets/profile.png"
                                alt="Gautham Ganesh Profile"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>

                </div>
            </section>

            {/* 3. Beyond the Keyboard (Hobbies) */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
                        Beyond the <span className="text-zinc-700">Keyboard</span>
                    </h2>
                    <p className="text-zinc-400 max-w-xl">
                        When I'm not shipping products, I'm refueling my curiosity & creativity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hobby 1 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0">
                            <Image
                                src="/assets/photography.jpg"
                                alt="Photography"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Photography</h3>
                            <p className="text-sm text-zinc-400">Capturing the entropy of urban life. Finding structure in chaos.</p>
                        </div>
                    </div>

                    {/* Hobby 2 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0">
                            <Image
                                src="/assets/ferrari.jpg"
                                alt="Formula 1 Racing"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Formula 1</h3>
                            <p className="text-sm text-zinc-400">Obsessed with the intersection of human courage and engineering perfection. Data-driven strategy at 250mph.</p>
                        </div>
                    </div>

                    {/* Hobby 3 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0">
                            <Image
                                src="/assets/running.png"
                                alt="Endurance Sports"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-bold uppercase text-white mb-2">Endurance Sports</h3>
                            <p className="text-sm text-zinc-400">Boxing for discipline, Running for clarity. Training the mental resilience required for the marathon of product building.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. The Process (Journey) */}
            <div className="border-t border-zinc-900 bg-[#FDFCF0]">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
                    <h3 className="text-center text-3xl font-black text-black mb-16 uppercase tracking-tight">How I Deliver</h3>
                    <ProcessTimeline />
                </div>
            </div>

            {/* Footer for this page */}
            <Footer />
        </main>
    );
}
