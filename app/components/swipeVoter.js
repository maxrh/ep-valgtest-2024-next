"use client"

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { VoteContext } from '../context/voteContext';
import Image from 'next/image';

const qlist = [
    { id: 1, img: "1.jpg", text: "Biodiversitet og natur skal prioriteres på højde med klima og andre politikområder." },
    { id: 2, img: "2.jpg", text: "Klimaindsatsen er vigtigere end økonomisk vækst." },
    { id: 3, img: "3.jpg", text: "Atomkraft bør indtænkes som en løsning på klimakrisen." },
    { id: 4, img: "4.jpg", text: "Landbrugsstøtten skal i højere grad anvendes til at sikre grøn omstilling af landbruget." },
    { id: 5, img: "5.jpg", text: "EU skal stramme reguleringen af Big Tech og kunstig intelligens." },
    { id: 6, img: "6.jpg", text: "Virksomheder med stor indtjening i Europa skal beskattes hårdere, bl.a. gennem en mindstesats for selskabsskat i EU." },
    { id: 7, img: "7.jpg", text: "Medlemslandene skal i højere grad forpligtes på at overholde de af EU vedtagne initiativer og principper, bl.a. gennem tilbageholdelse af midler eller tildeling af store bøder." },
    { id: 8, img: "8.jpg", text: "Medlemslandene skal bidrage med færre penge til EU\'s budget." },
    { id: 9, img: "9.jpg", text: "EU\'s direktiv om øremærket barsel til mænd er en god idé." },
    { id: 10, img: "10.jpg", text: "EU bør give økonomisk støtte til medlemslande med høj gæld." },
    { id: 11, img: "11.jpg", text: "Arbejdskraftens fri bevægelighed indenfor EU bør begrænses." },
    { id: 12, img: "12.jpg", text: "EU skal forebygge migration ved at øge den økonomiske støtte til de klassiske flygtningelande." },
    { id: 13, img: "13.jpg", text: "EU bør styrke kontrollen ved de ydre grænser." },
    { id: 14, img: "14.jpg", text: "Ukraine skal optages i EU hurtigst muligt." },
    { id: 15, img: "15.jpg", text: "EU skal donere de nødvendige våben og artilleri til Ukraine." },
    { id: 16, img: "16.jpg", text: "En kommende udvidelse, så EU indbefatter over 30 medlemslande, er en god idé." },
    { id: 17, img: "17.jpg", text: "EU skal udvikle sig til en militær union med egen våbenindustri." },
    { id: 18, img: "18.jpg", text: "EU skal i stigende grad positionere sig som en selvstændig stormagt." },
    { id: 19, img: "19.jpg", text: "EU-Parlamentsvalget bør i fremtiden bestå af tværnationale partier og stemmelister." },
    { id: 20, img: "20.jpg", text: "EU\'s borgere skal kunne stemme direkte på lovforslag." },
    { id: 21, img: "21.jpg", text: "EU skal arbejde for en fredsaftale mellem Ukraine og Rusland." },

]

export default function SwipeVoter() {
    const router = useRouter()
    const { addVote, clearVotes } = useContext(VoteContext);  // Destructure the addVote function
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); 
    const [initialized, setInitialized] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false); // State to handle thank you message visibility
    const [redirectDelay, setRedirectDelay] = useState(3000); // Duration in milliseconds

    useEffect(() => {
        clearVotes();  
        setTimeout(() => {
            setInitialized(true);
        }, 3000);
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
        setCurrent(newCurrent);

        if (newCurrent === qlist.length) {
            setTimeout(() => {
                // Ensure the progress bar animation completes to 100% before showing the thank you message
                setShowThankYou(true);
                setTimeout(() => {
                    router.push('/resultat');
                }, redirectDelay);
            }, 300); // This delay must match or exceed the duration of the progress bar animation to 100%
        }
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    // const progressPercentage = (current / (qlist.length)) * 100; // Calculate progress to be full 100% at the last slide
    const progressPercentage = (current / qlist.length) * 100;
    const nextImageIndex = current + 1 < qlist.length ? current + 1 : null;

    if (!initialized) {
        return (
                <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='h-screen w-screen flex flex-col items-center justify-center'
                >
                    <h1 className="text-lg leading-tight font-semibold mb-2 text-slate-300">EP valgtest 2024</h1>
                    <p className='text-xs mb-4 text-slate-500'>Udarbejdet af DEO | Demokrati i Europa Oplysningsforbundet</p>
                </motion.div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden ">
            
                {showThankYou ? (
                    <AnimatePresence mode="wait">
                        <motion.div 
                            initial={{ opacity: 0, x: -direction}}
                            animate={{ opacity: 1, x: 0}}
                            transition={{ 
                                opacity: { duration: 0.3 },
                                x: { type: 'spring', stiffness: 260, damping: 10 } 
                            }}
                            className="flex flex-col items-center justify-center max-w-4xl text-white"
                        >
                            <h1 className="text-xl md:text-4xl leading-tight font-bold mb-6">Tak for din deltagelse!</h1>
                            <p className='mb-4'>Du viderestilles til dit resultat ...</p>
                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 max-w-40">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: redirectDelay / 1000, ease: "linear" }}
                                    className="bg-blue-600 h-1.5 rounded-full"
                                ></motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                ) : (

                    <>
                       
                        <AnimatePresence >
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
                                className="h-full w-full absolute top-0 left-0 cursor-grab z-10"
                            >
                                <div className="h-full w-full p-14 flex items-center justify-center">
                                    <div className="max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl ">
                                        <h1 className=" leading-tight font-bold text-white">{qlist[current]?.text}</h1>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {qlist[current] && (
                            <AnimatePresence mode="sync">
                                <motion.div
                                    key={`slide-${current}`}
                                    initial={{ opacity: 0,  x: -direction  }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 0 }}
                                    transition={{
                                        type: 'spring', stiffness: 560, damping: 60 
                                    }}
                                    className='h-full w-full absolute top-0 left-0 pointer-events-none z-'
                                >
                                    <Image  
                                        src={`/images/slides/${qlist[current]?.img}`}
                                        alt={qlist[current]?.text}
                                        width={1440}
                                        height={900}
                                        className='object-cover w-full h-full opacity-60'
                                        priority={true}
                                    />

                                    {/* Preload next image but keep it invisible */}
                                    {nextImageIndex !== null && (
                                        <Image
                                            src={`/images/slides/${qlist[nextImageIndex].img}`}
                                            alt={qlist[nextImageIndex].text}
                                            width={1440}
                                            height={900}
                                            className='object-cover w-full h-full hidden'
                                            style={{ visibility: 'hidden', position: 'absolute', top: 0 }}
                                            priority={true}
                                            />
                                    )}

                                </motion.div>
                            </AnimatePresence>
                        )}

                        <motion.button 
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{
                                type: 'spring', stiffness: 260, damping: 10 
                            }}
                            onClick={() => handleSwipe('uenig')} 
                            className="pointer-events-auto items-center justify-center absolute left-0 hidden md:flex z-10 -ml-4"
                        >
                            <svg className="w-52 h-52 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clipRule="evenodd"/></svg>
                            <svg className="w-8 h-8 text-white absolute ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clipRule="evenodd"/></svg>
                            <span className='absolute right-3 uppercase font-bold tracking-widest text-white -rotate-90'>Uenig</span>
                        </motion.button>

                        <motion.button 
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{
                                opacity: { duration: 0.3 },
                                x: { type: 'spring', stiffness: 260, damping: 10 }
                            }}
                            onClick={() => handleSwipe('enig')} 
                            className="pointer-events-auto items-center justify-center absolute right-0 hidden md:flex z-10 -mr-4"
                        >
                            <svg className="w-52 h-52 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>
                            <svg className="w-8 h-8 text-white absolute mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd"/></svg>
                            <span className='absolute left-5 uppercase font-bold tracking-widest text-white rotate-90'>Enig</span>
                        </motion.button>

                        <div className="flex flex-col items-end justify-center w-full z-10 mt-4 absolute bottom-0 p-14">
                            <div className="font-semibold mb-4 text-slate-50">{current + 1 > qlist.length ? qlist.length : current + 1} af {qlist.length}</div>
                            <div className="w-full bg-slate-50/20 rounded-full h-1.5">
                                <motion.div
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${progressPercentage}%` }}  // Dynamically update the width based on the current slide
                                    transition={{ 
                                        type: 'spring', stiffness: 200, damping: 25
                                    }}
                                    className="bg-slate-50/80  h-1.5 rounded-full w-1/2"
                                ></motion.div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center z-10 absolute top-0 right-0 p-14">
                            <div className="w-full text-right text-white">
                                <h1 className="text-xl font-semibold mb-2">EP Valgtest 2024</h1>
                                <p className='leading-snug font-light text-sm'>Swipe til venstre eller højre alt efter <br />om du er uenig eller enig og se hvilke <br />politikere du matcher bedst med.</p>
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}
