"use client"

import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { VoteContext } from '../context/voteContext';
import SwipeVoterSlides from './swipeVoterSlides';
import Image from 'next/image';

export default function SwipeVoter() {
    const router = useRouter()
    const { addVote, clearVotes } = useContext(VoteContext);  // Destructure the addVote function
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0); 
    const [initialized, setInitialized] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false); // State to handle thank you message visibility
    const [redirectDelay, setRedirectDelay] = useState(3000); // Duration in milliseconds
    const [slides, setSlides] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/slides');  
            if (response.ok) {
                const jsonResponse = await response.json();
                setSlides(jsonResponse.data);  
            } else {
                console.error("Failed to fetch data:", response.statusText);
            }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        clearVotes();  
        setTimeout(() => {
            setInitialized(true);
        }, redirectDelay);
    }, [])

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
    }

    const changeSlide = () => {
        let newCurrent = current + 1;
        setCurrent(newCurrent);

        if (newCurrent === slides.length) {
            setTimeout(() => {
                // Ensure the progress bar animation completes to 100% before showing the thank you message
                setShowThankYou(true);
                setTimeout(() => {
                    router.push('/resultat');
                }, redirectDelay);
            }, 500); // This delay must match or exceed the duration of the progress bar animation to 100%
        }
    }

    // const progressPercentage = (current / (slides.length)) * 100; // Calculate progress to be full 100% at the last slide
    const progressPercentage = (current / slides.length) * 100;
    const nextImageIndex = current + 1 < slides.length ? current + 1 : null;
    
    if (!initialized) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden ">
                <AnimatePresence>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='flex flex-col items-center justify-center max-w-lg w-full'
                    >
                        <h1 className="text-lg leading-tight font-semibold text-slate-300">EP valgtest 2024</h1>
                        <div className="w-full bg-gray-700 rounded-full h-px my-4">
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: redirectDelay / 1000, ease: "linear" }}
                                className="bg-slate-500 h-full rounded-full"
                            ></motion.div>
                        </div>
                        <p className='text-xs mb-4 text-slate-500'>Udarbejdet af DEO | Demokrati i Europa Oplysningsforbundet</p>
                    </motion.div>
                </AnimatePresence>

                {/* Preload next image but keep it invisible */}
                <Image
                    src={`/images/slides/1.jpg`}
                    alt={slides[0]?.text}
                    width={1440}
                    height={900}
                    className='object-cover w-full h-full hidden'
                    style={{ position: 'absolute', top: 0 }}
                    priority
                />
            </div>
        )
    }

    if (showThankYou) {
        return (
            <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden ">
                <AnimatePresence>
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
             
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen relative overflow-hidden ">

            <SwipeVoterSlides current={current} direction={direction} handleSwipe={handleSwipe} nextImageIndex={nextImageIndex} slides={slides}/>

            {current < slides.length && (
                <>
                    <motion.button 
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{
                            delay: .5,
                            duration: 0.3,
                            ease: 'easeInOut'
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
                            delay: .5,
                            duration: 0.3,
                            ease: 'easeInOut'
                        }}
                        onClick={() => handleSwipe('enig')} 
                        className="pointer-events-auto items-center justify-center absolute right-0 hidden md:flex z-10 -mr-4"
                    >
                        <svg className="w-52 h-52 text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>
                        <svg className="w-8 h-8 text-white absolute mr-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.03 9.684h3.965c.322 0 .64.08.925.232.286.153.532.374.717.645a2.109 2.109 0 0 1 .242 1.883l-2.36 7.201c-.288.814-.48 1.355-1.884 1.355-2.072 0-4.276-.677-6.157-1.256-.472-.145-.924-.284-1.348-.404h-.115V9.478a25.485 25.485 0 0 0 4.238-5.514 1.8 1.8 0 0 1 .901-.83 1.74 1.74 0 0 1 1.21-.048c.396.13.736.397.96.757.225.36.32.788.269 1.211l-1.562 4.63ZM4.177 10H7v8a2 2 0 1 1-4 0v-6.823C3 10.527 3.527 10 4.176 10Z" clipRule="evenodd"/></svg>
                        <span className='absolute left-5 uppercase font-bold tracking-widest text-white rotate-90'>Enig</span>
                    </motion.button>
                </>
            )}

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1, duration: 0.3 }}
                className="flex flex-col items-end justify-center w-full z-10 mt-4 absolute bottom-0 p-14"
            >
                <div className="font-semibold mb-4 text-slate-50">{current + 1 > slides.length ? slides.length : current + 1} af {slides.length}</div>
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
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.3 }}
                className="flex items-center justify-center z-10 absolute top-0 right-0 p-14"
            >
                <div className="w-full text-right text-white">
                    <h1 className="text-xl font-semibold mb-2">EP Valgtest 2024</h1>
                    <p className='leading-snug font-light text-sm'>Swipe til venstre eller højre alt efter <br />om du er uenig eller enig og se hvilke <br />politikere du matcher bedst med.</p>
                </div>
            </motion.div>
        </div>
    )
}
