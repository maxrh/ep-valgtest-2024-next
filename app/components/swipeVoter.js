"use client"

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { VoteContext } from '../context/voteContext';

const qlist = [
    { id: 1, text: "Biodiversitet og natur skal prioriteres på højde med klima og andre politikområder." },
    { id: 2, text: "Klimaindsatsen er vigtigere end økonomisk vækst." },
    { id: 3, text: "Atomkraft bør indtænkes som en løsning på klimakrisen." },
    { id: 4, text: "Landbrugsstøtten skal i højere grad anvendes til at sikre grøn omstilling af landbruget." },
    { id: 5, text: "EU skal stramme reguleringen af Big Tech og kunstig intelligens." },
    { id: 6, text: "Virksomheder med stor indtjening i Europa skal beskattes hårdere, bl.a. gennem en mindstesats for selskabsskat i EU." },
    { id: 7, text: "Medlemslandene skal i højere grad forpligtes på at overholde de af EU vedtagne initiativer og principper, bl.a. gennem tilbageholdelse af midler eller tildeling af store bøder." },
    { id: 8, text: "Medlemslandene skal bidrage med færre penge til EU\'s budget." },
    { id: 9, text: "EU\'s direktiv om øremærket barsel til mænd er en god idé." },
    { id: 10, text: "EU bør give økonomisk støtte til medlemslande med høj gæld." },
    { id: 11, text: "Arbejdskraftens fri bevægelighed indenfor EU bør begrænses." },
    { id: 12, text: "EU skal forebygge migration ved at øge den økonomiske støtte til de klassiske flygtningelande." },
    { id: 13, text: "EU bør styrke kontrollen ved de ydre grænser." },
    { id: 14, text: "Ukraine skal optages i EU hurtigst muligt." },
    { id: 15, text: "EU skal donere de nødvendige våben og artilleri til Ukraine." },
    { id: 16, text: "En kommende udvidelse, så EU indbefatter over 30 medlemslande, er en god idé." },
    { id: 17, text: "EU skal udvikle sig til en militær union med egen våbenindustri." },
    { id: 18, text: "EU skal i stigende grad positionere sig som en selvstændig stormagt." },
    { id: 19, text: "EU-Parlamentsvalget bør i fremtiden bestå af tværnationale partier og stemmelister." },
    { id: 20, text: "EU\'s borgere skal kunne stemme direkte på lovforslag." },
    { id: 21, text: "EU skal arbejde for en fredsaftale mellem Ukraine og Rusland." },

];

export default function SwipeVoter() {
    const router = useRouter()
    const { addVote, clearVotes } = useContext(VoteContext);  // Destructure the addVote function
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); 
    const [initialized, setInitialized] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false); // State to handle thank you message visibility
    const [redirectDelay, setRedirectDelay] = useState(3000); // Duration in milliseconds

    useEffect(() => {
        clearVotes();  // Reset vote data on component mount
        setInitialized(true);
    }, []);

    const handleSwipe = (dir, fromButton = false) => {
        const newDirection = dir === 'uenig' ? -300 : 300;
        setDirection(newDirection);
        addVote(current, dir === 'uenig' ? 0 : 1);  // Save the vote

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
        if (newCurrent >= qlist.length) {
            setShowThankYou(true);
            setTimeout(() => {
                router.push('/resultat');
            }, redirectDelay);
            return;
        }
        setCurrent(newCurrent);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    if (!initialized) {
        return null; // Render nothing until the component is ready
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden">
            
            <AnimatePresence initial={false}>
                {showThankYou ? (
                        <motion.div 
                            initial={{ opacity: 0, x: -direction}}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ 
                                opacity: { duration: 0.3 },
                                x: { type: 'spring', stiffness: 260, damping: 10 } 
                            }}
                            className="flex flex-col items-center justify-center max-w-4xl"
                        >
                            <h1 className="text-xl md:text-4xl leading-tight font-bold mb-6">Tak for din deltagelse!</h1>
                            <p className='mb-4'>Du viderestilles til dit resultat ...</p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 max-w-40">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: redirectDelay / 1000, ease: "linear" }}
                                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                                ></motion.div>
                            </div>
                        </motion.div>
                    ) : (
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: -direction, scale: 0.3}}
                        animate={{ opacity: 1, x: 0, scale: 1}}
                        exit={{ opacity: 0 }}
                        transition={{
                            opacity: { duration: 0.3 },
                            x: { type: 'spring', stiffness: 260, damping: 10 }
                        }}
                        drag="x"
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (Math.abs(swipe) > swipeConfidenceThreshold) {
                                handleSwipe(offset.x > 0 ? 'enig' : 'uenig');
                            }
                        }}
                        className="h-full w-full absolute top-0 left-0 cursor-grab"
                    >
                        <div className="h-full w-full p-14 flex items-center justify-center">
                            <div className="max-w-4xl text-left">
                                <div className="font-semibold mb-4">Question {current + 1} of {qlist.length}</div>
                                <h1 className="text-xl md:text-5xl leading-tight font-bold">{qlist[current]?.text}</h1>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="justify-between w-full pointer-events-none absolute left-0 hidden lg:flex ">
                <button onClick={() => handleSwipe('uenig')} className="bg-gray-300 px-8 py-4 pointer-events-auto">Uenig</button>
                <button onClick={() => handleSwipe('enig')} className="bg-gray-300 px-8 py-4 pointer-events-auto">Enig</button>
            </div>

        </div>
    );
}
