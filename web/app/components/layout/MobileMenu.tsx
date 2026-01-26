'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isOpen) {
            // Open animation
            gsap.set(containerRef.current, { display: "flex" });
            gsap.to(containerRef.current, {
                yPercent: 0,
                duration: 0.6,
                ease: "power4.inOut",
            });
            gsap.fromTo(".mobile-link",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.3 }
            );
        } else {
            // Close animation
            gsap.to(containerRef.current, {
                yPercent: -100,
                duration: 0.6,
                ease: "power4.inOut",
                onComplete: () => {
                    if (containerRef.current) gsap.set(containerRef.current, { display: "none" });
                }
            });
        }
    }, { dependencies: [isOpen] });

    // Initial setup to hide it
    useGSAP(() => {
        gsap.set(containerRef.current, { yPercent: -100, display: "none" });
    }, { scope: containerRef });

    const handleLinkClick = (href: string) => {
        onClose();
    };

    const handleContactClick = () => {
        onClose();
        window.dispatchEvent(new CustomEvent('open-contact'));
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[998] bg-zinc-950 flex flex-col items-center justify-center" // Removed hidden and transform classes
        >
            <div ref={linksRef} className="flex flex-col items-center gap-8">
                {[
                    { name: 'HOME', href: '/' },
                    { name: 'WORK', href: '/#work' },
                    { name: 'ABOUT', href: '/services' },
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => handleLinkClick(item.href)}
                        className="mobile-link text-5xl font-black text-white uppercase tracking-tighter hover:text-[#ccff00] transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}

                <button
                    onClick={handleContactClick}
                    className="mobile-link text-5xl font-black text-white uppercase tracking-tighter hover:text-[#ccff00] transition-colors"
                >
                    CONTACT
                </button>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-8 text-zinc-800 font-mono text-xs uppercase tracking-widest">
                Always Building The Future.
            </div>
        </div>
    );
}
