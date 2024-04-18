"use client"

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const qlist = [
    { id: 1, text: "Biodiversitet og natur skal prioriteres på højde med klima og andre politikområder." },
    { id: 2, text: "Klimaindsatsen er vigtigere end økonomisk vækst." },
    { id: 3, text: "Atomkraft bør indtænkes som en løsning på klimakrisen." },
    { id: 4, text: "Landbrugsstøtten skal i højere grad anvendes til at sikre grøn omstilling af landbruget." },
    { id: 5, text: "EU skal stramme reguleringen af Big Tech og kunstig intelligens." },
    { id: 6, text: "Virksomheder med stor indtjening i Europa skal beskattes hårdere, bl.a. gennem en mindstesats for selskabsskat i EU." },
    { id: 7, text: "Medlemslandene skal i højere grad forpligtes på at overholde de af EU vedtagne initiativer og principper, bl.a. gennem tilbageholdelse af midler eller tildeling af store bøder." },
    { id: 8, text: "Medlemslandene skal bidrage med færre penge til EU\'s budget." },

];

export default function SwipeVoter() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(300); // Start assuming exit to the right (enter from left)

    const handleSwipe = (dir, fromButton = false) => {
        const newDirection = dir === 'uenig' ? 300 : -300;
        setDirection(newDirection);

        if (fromButton) {
            setTimeout(() => {
                changeSlide();
            }, 300); // Delay the slide change to allow the exit animation
        } else {
            changeSlide();
        }
    };

    const changeSlide = () => {
        let newCurrent = current + 1;
        if (newCurrent >= qlist.length) newCurrent = 0;
        setCurrent(newCurrent);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden">
            
            <AnimatePresence initial={false}>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, x: -direction }} // Enter from the opposite direction
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }} 
                    transition={{
                        opacity: { duration: 0.3 },
                        x: { type: 'spring', stiffness: 260, damping: 10 }
                    }}
                    drag="x"
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (Math.abs(swipe) > swipeConfidenceThreshold) {
                            handleSwipe(offset.x > 0 ? 'uenig' : 'enig');
                        }
                    }}
                    className="h-full w-full absolute top-0 left-0 cursor-grab"
                >
                    <div className="h-full w-full p-14 flex items-center justify-center">
                        <div className="max-w-4xl text-left">
                            <div className="font-semibold mb-4">Spørgsmål {current + 1} of {qlist.length}</div>
                            <h1 className="text-xl  md:text-5xl leading-tight font-bold">{qlist[current]?.text}</h1>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="justify-between w-full pointer-events-none absolute left-0 hidden lg:flex ">
                <button onClick={() => handleSwipe('uenig')} className="bg-gray-300 px-8 py-4 pointer-events-auto">Uenig</button>
                <button onClick={() => handleSwipe('enig')} className="bg-gray-300 px-8 py-4 pointer-events-auto">Enig</button>
            </div>

        </div>
    );
}
