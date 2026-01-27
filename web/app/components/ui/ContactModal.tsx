'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { portfolioData } from '@/app/data/content';

export default function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Listen for custom event
    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-contact', handleOpen);
        return () => window.removeEventListener('open-contact', handleOpen);
    }, []);

    useGSAP(() => {
        if (isOpen) {
            gsap.to(modalRef.current, {
                autoAlpha: 1,
                duration: 0.3
            });
            gsap.fromTo(contentRef.current,
                { y: 50, scale: 0.9, opacity: 0 },
                { y: 0, scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.2)" }
            );
        } else {
            gsap.to(modalRef.current, {
                autoAlpha: 0,
                duration: 0.3
            });
        }
    }, [isOpen]);

    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopy = (text: string, type: 'phone' | 'email') => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard API not supported');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            if (type === 'phone') {
                setCopiedPhone(true);
                setTimeout(() => setCopiedPhone(false), 2000);
            } else {
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
            }
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm opacity-0"
            onClick={() => setIsOpen(false)}
        >
            <div
                ref={contentRef}
                className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-700 transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">
                    Get in Touch
                </h2>

                <div className="space-y-6">
                    {/* Phone */}
                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex items-center justify-between group hover:border-[#ccff00] transition-colors">
                        <div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Phone</span>
                            <span className="text-xl font-bold text-white tracking-tight">{portfolioData.contact.phone}</span>
                        </div>
                        <button
                            onClick={() => handleCopy(portfolioData.contact.phone, 'phone')}
                            className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all ${copiedPhone ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-zinc-400 group-hover:bg-[#ccff00] group-hover:text-black'}`}
                        >
                            {copiedPhone ? 'Copied!' : 'Copy'}
                        </button>
                    </div>

                    {/* Email */}
                    <div className="bg-black border border-zinc-800 rounded-xl p-4 flex items-center justify-between group hover:border-[#ccff00] transition-colors">
                        <div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">Email</span>
                            <span className="text-xl font-bold text-white tracking-tight break-all">{portfolioData.contact.email}</span>
                        </div>
                        <button
                            onClick={() => handleCopy(portfolioData.contact.email, 'email')}
                            className={`px-3 py-1 rounded text-xs font-bold uppercase transition-all ${copiedEmail ? 'bg-[#ccff00] text-black' : 'bg-zinc-800 text-zinc-400 group-hover:bg-[#ccff00] group-hover:text-black'}`}
                        >
                            {copiedEmail ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-zinc-500 text-sm">
                        Prefer social? Find me on <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" className="text-white hover:text-[#ccff00] underline">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
