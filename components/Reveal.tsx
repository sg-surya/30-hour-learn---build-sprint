import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const Reveal = ({ children, delay = 0, x = 0 }: { children?: React.ReactNode; delay?: number; x?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, x }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};
