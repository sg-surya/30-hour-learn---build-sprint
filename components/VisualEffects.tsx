
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';

// --- GRAIN OVERLAY ---
export const GrainOverlay = () => {
    return (
        <div className="noise-overlay pointer-events-none fixed inset-0 z-[9999] opacity-[0.03]" />
    );
};

// --- CUSTOM CURSOR ---
export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer');

            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
            style={{
                x: springX,
                y: springY,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(109, 124, 255, 0.1)' : 'transparent',
            }}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full bg-primary" />
        </motion.div>
    );
};

// --- SCROLL PROGRESS ---
export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accentPurple to-primary origin-left z-[9999]"
            style={{ scaleX }}
        />
    );
};

// --- TEXT REVEAL ---
interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export const TextReveal = ({ children, className = "", delay = 0 }: TextRevealProps) => {
    // Split text into words, then characters for finer control if needed, 
    // but for now let's do word-by-word reveal for "slide up" effect which is cinematic
    const words = children.split(" ");

    const containerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        }
    };

    const wordVariant = {
        hidden: { y: 20, opacity: 0, filter: "blur(10px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.h1
            className={`flex flex-wrap ${className}`}
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden inline-block mr-[0.25em] last:mr-0 align-bottom">
                    <motion.span variants={wordVariant} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.h1>
    );
};

// --- PARALLAX BLOBS for BACKGROUND ---
export const ParallaxBackground = () => {
    const { scrollY } = useScroll();
    const range = 50; // movement range in pixels

    // We can use mouse position for parallax if we want, but Framer Motion's useSpring + mouse event listener in Hero is better.
    // However, let's make a component that just sits in the background and reacts to mouse.

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            x.set((e.clientX - centerX) / 20);
            y.set((e.clientY - centerY) / 20);
        };
        window.addEventListener("mousemove", updateMouse);
        return () => window.removeEventListener("mousemove", updateMouse);
    }, [x, y]);

    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <motion.div
                className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"
                style={{ x, y }}
            />
            <motion.div
                className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-accentPurple/10 blur-[120px] rounded-full"
                style={{ x: useTransform(x, v => -v), y: useTransform(y, v => -v) }}
            />
        </div>
    );
};
