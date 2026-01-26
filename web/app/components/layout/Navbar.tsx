'use client';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <nav
                className="fixed top-0 left-0 w-full z-[999] flex justify-between items-center px-8 py-6 pointer-events-none mix-blend-difference text-white"
            >
                <div className="pointer-events-auto font-black text-xl tracking-tighter uppercase">
                    GG
                </div>

                <div
                    className="pointer-events-auto w-12 h-12 relative cursor-pointer z-[1000] flex items-center justify-center p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="flex flex-col justify-center gap-1.5 w-full">
                        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2 bg-[#ccff00]" : ""}`} />
                        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-[#ccff00]" : ""}`} />
                    </div>
                </div>
            </nav>
        </>
    );
}
