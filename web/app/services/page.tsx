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

            {/* 3. Services */}
            <section className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-zinc-900">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
                        Beyond the <span className="text-zinc-700">Keyboard</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed">
                        I don&apos;t just manage products; I engineer their success through technical depth and strategic foresight.
                    </p>
                </div>

                {/* Core Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">

                    {/* Service 1 */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-[#ccff00]/50 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="text-6xl">🤖</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">AI & GenAI Product Strategy</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            From RAG pipelines to fine-tuned LLMs. I translate &quot;AI Hype&quot; into deployed, revenue-generating features.
                        </p>
                        <ul className="space-y-2 text-sm font-mono text-zinc-500">
                            <li>• Model Selection & Eval</li>
                            <li>• Prompt Engineering Ops</li>
                            <li>• Ethics & Safety Guardrails</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-[#ccff00]/50 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="text-6xl">🚀</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">0-to-1 MVP Development</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            I write the first lines of code and the last lines of the PRD. Speed is the feature.
                        </p>
                        <ul className="space-y-2 text-sm font-mono text-zinc-500">
                            <li>• Rapid Prototyping (Next.js)</li>
                            <li>• Market Validation</li>
                            <li>• Scalable Architecture</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-[#ccff00]/50 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="text-6xl">📊</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Technical Program Management</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            Aligning engineering reality with business dreams. I speak API, AWS, and OKR fluently.
                        </p>
                        <ul className="space-y-2 text-sm font-mono text-zinc-500">
                            <li>• Cross-functional Leadership</li>
                            <li>• System Design Review</li>
                            <li>• Agile / scrum Mastery</li>
                        </ul>
                    </div>

                    {/* Service 4 */}
                    <div className="group p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-[#ccff00]/50 transition-colors relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                            <span className="text-6xl">📈</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Growth Engineering</h3>
                        <p className="text-zinc-400 leading-relaxed mb-8">
                            Building loops, not just funnels. Optimizing for retention and LTV using data-driven experiments.
                        </p>
                        <ul className="space-y-2 text-sm font-mono text-zinc-500">
                            <li>• A/B Testing Infrastructure</li>
                            <li>• Analytics Implementation</li>
                            <li>• User Onboarding Flows</li>
                        </ul>
                    </div>

                </div>

                {/* Why Me Section */}
                <div className="mb-32 p-8 md:p-16 bg-[#ccff00] text-black rounded-3xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                        Why work with me?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="font-bold text-xl mb-2">I Ship Code</h4>
                            <p className="text-black/80 font-serif text-lg">
                                You won&apos;t hear &quot;that&apos;s technically impossible&quot; without a proof of concept attached.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">I Speak Engineer & Business</h4>
                            <p className="text-black/80 font-serif text-lg">
                                Fluent in both Jira tickets and investor decks. I bridge the gap, not widen it.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">I'm a Force Multiplier</h4>
                            <p className="text-black/80 font-serif text-lg">
                                My goal isn&apos;t to just manage, but to elevate your team&apos;s capabilities and output.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl mb-2">I Get My Hands Dirty</h4>
                            <p className="text-black/80 font-serif text-lg">
                                From writing SQL queries to debugging APIs, I&apos;m in the trenches with the team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Beyond the Keyboard (Hobbies) */}
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
