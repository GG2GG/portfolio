'use client';

import { useViewMode } from '@/app/context/ViewModeContext';

export default function AIToggle() {
    const { isAIMode, toggleMode } = useViewMode();

    return (
        <button
            onClick={toggleMode}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1 transition-all hover:scale-105 active:scale-95 group overflow-hidden pointer-events-auto mix-blend-difference`}
        >
            <div
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${!isAIMode ? 'bg-white text-black' : 'text-white/50 hover:text-white'}`}
            >
                Human
            </div>
            <div
                className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${isAIMode ? 'bg-[#00ff41] text-black shadow-[0_0_10px_#00ff41]' : 'text-white/50 hover:text-white'}`}
            >
                AI
            </div>
        </button>
    );
}
