import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Spinner() {
    const numberOfStars = 12;
    const radius = 40;
    const centerX = 50;
    const centerY = 50;
    const duration = 1;  // Duration for a complete rotation

    // Generate keyframes for circular motion
    const generateKeyframes = (offset) => {
        return Array.from({ length: 101 }).map((_, frame) => {
            const angle = (2 * Math.PI * frame / 100) + offset;  // Generate a full circle divided into 100 steps
            return {
                x: centerX + radius * Math.cos(angle),
                y: centerY + radius * Math.sin(angle),
                scale: 1 // Static scale, change this for dynamic scaling
            };
        });
    };
    return (
        <div className="flex justify-center items-center opacity-80">
            <svg width="100" height="100" viewBox="0 0 100 100" className="">
                {Array.from({ length: numberOfStars }).map((_, index) => {
                    const offset = (2 * Math.PI * index / numberOfStars);  // Offset for each star
                    const keyframes = generateKeyframes(offset);
                    return (
                        <motion.path
                            key={index}
                            d="M1.5,5.6l4.4,0l-3.5,2.5l1.3,-4.1l-3.5,-2.5h4.3l1.3,-4.1l1.3,4.1h4.3l-3.5,2.5l1.3,4.1l-3.5,-2.5z"
                            fill="gold"
                            style={{
                                translateX: keyframes.map(kf => kf.x - 5),  // Adjust these values based on the actual size of your path
                                translateY: keyframes.map(kf => kf.y - 5)
                            }}
                            initial={{
                                translateX: keyframes[0].x - 5,
                                translateY: keyframes[0].y - 5,
                                scale: keyframes[0].scale,
                                opacity: 0,
                                

                            }}
                            animate={{
                                translateX: keyframes.map(kf => kf.x - 5),
                                translateY: keyframes.map(kf => kf.y - 5),
                                scale: keyframes.map(kf => kf.scale),
                                opacity: 1,
                                transition: {
                                    repeat: 0,
                                    delay: 2 + index * .1,
                                    duration: duration,
                                    ease: "linear"
                                }
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
}