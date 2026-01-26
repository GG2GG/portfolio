'use client';

import { useScroll, useSpring, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function GlobalProgressBar() {
    const { scrollYProgress } = useScroll();
    const [isComplete, setIsComplete] = useState(false);

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.99 && !isComplete) {
            setIsComplete(true);
            window.dispatchEvent(new CustomEvent('scroll-complete'));
        } else if (latest < 0.99 && isComplete) {
            setIsComplete(false);
        }
    });

    return (
        <motion.div
            className={`fixed left-0 right-0 bg-[#ccff00] origin-center z-[9999] pointer-events-none`}
            style={{
                scaleX,
                height: '4px',
                bottom: 0
            }}
            animate={isComplete ? {
                y: -300,        // Move up towards text
                scaleX: 0.2,    // Compress horizontally
                opacity: [1, 0, 0] // Fade out at top
            } : {
                y: 0,
                scaleX: undefined, // Let spring handle it
                opacity: 1
            }}
            transition={{
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99] // Custom easing resembling backIn
            }}
            layoutId="progressBar"
        />
    );
}
