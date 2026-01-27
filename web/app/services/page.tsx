'use client';

import ProcessTimeline from '../components/roi/ProcessTimeline';
import Footer from "../components/layout/Footer";
import Image from 'next/image';
import { getAssetPath } from '../utils/assets';

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
                    I don&apos;t just build systems; I orchestrate experiences.
                </p>
            </section>

            {/* 2. Bio & Personal Grid */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-zinc-900">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Text Column (First in DOM, Left on Desktop, Bottom on Mobile) */}
                    <div className="space-y-12 text-center md:text-left">
                        <div>
                            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#ccff00] mb-6">The Origin Story</h2>
                            <p className="text-zinc-300 leading-relaxed text-lg md:text-xl">
                                My journey began not in a computer lab, but understanding how things work. From engineering systems at college, participating in Japanese Robotics research to architecting SaaS products & AI Developments, the drive has always been the same: <strong className="text-white">Curiosity.</strong>
                            </p>
                            <p className="text-zinc-300 leading-relaxed text-lg md:text-xl mt-6">
                                Today, I act as a bridge. A bridge between the abstract world of AI research and the tangible reality of user needs. I speak fluent Engineer, Product, and Design, allowing me to eliminate the friction that typically kills innovation.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-[#ccff00] mb-6">Philosophy</h2>
                            <blockquote className="text-2xl md:text-4xl font-black leading-tight text-white">
                                &quot;Complexity should be internal. Simplicity should be external.&quot;
                            </blockquote>
                        </div>
                    </div>

                    {/* Image Column (Second in DOM, Right on Desktop, Top on Mobile) */}
                    <div className="relative w-full aspect-square md:aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                        {/* Profile Image - Full View */}
                        <Image
                            src={getAssetPath("/assets/about_profile_new.png")}
                            alt="Gautham Ganesh Profile"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>

                </div>
            </section>


            {/* 3. Beyond the Keyboard (Hobbies) */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
                        Beyond the <span className="text-zinc-700">Keyboard</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                        I don&apos;t just manage products; I engineer their success through technical depth and strategic foresight.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Hobby 1 */}
                    <div className="group relative aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                        <div className="absolute inset-0">
                            <Image
                                src={getAssetPath("/assets/photography.jpg")}
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
                                src={getAssetPath("/assets/ferrari.jpg")}
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
                                src={getAssetPath("/assets/running.png")}
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
                    <h3 className="text-center text-5xl md:text-7xl font-black text-black mb-48 uppercase tracking-tight">How I Deliver</h3>
                    <ProcessTimeline />
                </div>
            </div>

            {/* Footer for this page */}
            <Footer />
        </main>
    );
}
