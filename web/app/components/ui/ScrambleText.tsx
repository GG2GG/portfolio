'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface ScrambleTextProps {
    text: string;
    className?: string;
    reveal?: boolean; // If true, scrambles from random to text on mount
    hover?: boolean;  // If true, scrambles on hover
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function ScrambleText({ text, className, reveal = false, hover = true }: ScrambleTextProps) {
    const [display, setDisplay] = useState(text);
    const containerRef = useRef<HTMLSpanElement>(null);
    const isAnimating = useRef(false);

    const scramble = (targetText: string, duration: number = 0.5) => {
        if (isAnimating.current) return;
        isAnimating.current = true;

        const length = targetText.length;
        const startTime = Date.now();

        const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / (duration * 1000), 1);

            if (progress === 1) {
                setDisplay(targetText);
                isAnimating.current = false;
                return;
            }

            let result = "";
            for (let i = 0; i < length; i++) {
                // If progress is far enough, show real char, else random
                if (i / length < progress) {
                    result += targetText[i];
                } else {
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                }
            }

            setDisplay(result);
            requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    };

    const hasRevealed = useRef(false);

    useGSAP(() => {
        if (reveal && !hasRevealed.current) {
            hasRevealed.current = true;
            setDisplay(Array(text.length).fill('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
            // Small delay to decluster
            setTimeout(() => scramble(text, 0.8), Math.random() * 500);
        }
    }, [text, reveal]);

    const handleMouseEnter = () => {
        if (hover) {
            // Scramble to random then back to text
            // Implementation simplified: just scramble to text again is often enough visual noise
            // or reset to random first:
            // setDisplay(Array(text.length).fill('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''));
            scramble(text, 0.4);
        }
    };

    return (
        <span
            ref={containerRef}
            className={className}
            onMouseEnter={handleMouseEnter}
        >
            {display}
        </span>
    );
}
