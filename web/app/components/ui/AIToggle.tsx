'use client';

import { useViewMode } from '@/app/context/ViewModeContext';

export default function AIToggle() {
    const { isAIMode, toggleMode } = useViewMode();

    // RETRO 1990's Style for AI Mode
    if (isAIMode) {
        return (
            <button
                onClick={toggleMode}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-[10000] font-mono text-[10px] md:text-sm bg-black border border-white text-white px-2 py-1 md:px-4 md:py-2 hover:bg-white hover:text-black transition-colors pointer-events-auto shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[-50%] active:translate-y-[2px] active:shadow-none whitespace-nowrap"
            >
                <span className="md:hidden">{`[ Human_Mode ]`}</span>
                <span className="hidden md:inline">{`[ SWITCH_TO_HUMAN_MODE ]`}</span>
            </button>
        );
    }

    // Modern Style for Human Mode
    return (
        <button
            onClick={toggleMode}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-[10000] flex items-center gap-0 bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-1 transition-all hover:scale-105 active:scale-95 group overflow-hidden pointer-events-auto mix-blend-difference`}
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
