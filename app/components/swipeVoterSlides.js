import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function SwipeVoterSlides({ current, direction, handleSwipe, nextImageIndex, slides }) {
    const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    }
   // Function to close the popup and disable pointer events
   const handleClosePopup = () => {
    setShowPopup(false);
};

    // Function to open the popup and enable pointer events
    const handleOpenPopup = () => {
    setShowPopup(true);
};

    return (
        <>
            <AnimatePresence>
                {current < slides.length && ( 
                    <motion.div
                        key={current}
                        initial={ current !== 0 ? { opacity: 0, x: -direction, scale: 0.3} : { opacity: 0, y: -40}}
                        animate={ current !== 0 ? { opacity: 1, x: 0, scale: 1} : { opacity: 1, y: 0}}
                        exit={{ opacity: 1 }}
                        transition={{
                            duration: 0.3,
                            x: { type: 'spring', stiffness: 260, damping: 10 },
                        }}
                        drag="x"
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            if (Math.abs(swipe) > swipeConfidenceThreshold) {
                                handleSwipe(offset.x > 0 ? 'enig' : 'uenig');
                            }
                        }}
                        className="h-full w-full absolute top-0 left-0 cursor-grab z-10 px-8 py-32 md:px-14 flex flex-col items-center justify-center"
                    >
                        <div className="pb-24 md:pb-0 max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl ">
                            <span className='flex items-center justify-center text-xs font-mediumn  tracking-wide  text-gray-50'> 
                                <svg class="w-3 h-3 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clipRule="evenodd"/></svg>
                                Træk/Swipe
                                <svg class="w-3 h-3 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/></svg>

                            </span>
                            <h1 className="md:leading-tight font-bold text-slate-50 mt-6 mb-8 ">{slides[current]?.text}</h1>
                            <button onClick={handleOpenPopup} className="text-sm font-medium px-8 py-4 border border-gray-200/40 rounded-full hover:bg-slate-200/10 hover:shadow-lg duration-500 transition-all ease-in-out ">
                                Se argumenter for og imod
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {current < slides.length && slides[current] && (
                    <motion.div
                        key={`slide-${current}`}
                        initial={{ opacity: 0,  x: -direction  }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ 
                            opacity: 0, 
                            transition: { 
                                ease: 'easeIn', 
                                duration: 0.3,
                                delay: .3,
                            }
                            }}
                        transition={{
                            type: 'spring', stiffness: 560, damping: 40,
                            delay: .1,
                        }}
                        className='h-full w-full absolute top-0 left-0 pointer-events-none z-0'
                        style={{ backgroundColor: 'rgb(17 24 39)' }}
                    >
                        <Image  
                            src={`/images/slides/${slides[current]?.img}`}
                            alt={slides[current]?.text}
                            width={1440}
                            height={900}
                            className='object-cover w-full h-full opacity-50'
                            priority={true}
                        />

                        {/* Preload next image but keep it invisible */}
                        {nextImageIndex !== null && (
                            <Image
                                src={`/images/slides/${slides[nextImageIndex].img}`}
                                alt={slides[nextImageIndex].text}
                                width={1440}
                                height={900}
                                className='object-cover w-full h-full hidden'
                                style={{ visibility: 'hidden', position: 'absolute', top: 0 }}
                                priority={true}
                            />
                        )}

                    </motion.div>
                )}
            </AnimatePresence>

                {showPopup && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .2, ease: 'easeInOut' }}
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-8"
                        onClick={handleClosePopup}
                        style={{ 
                            backgroundColor: 'rgba(17, 24, 39, .9)', 
                        }}
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: -50}}
                            animate={{ opacity: 1, y: 0}}
                            transition={{ 
                                delay: .2,
                                type: 'spring',
                                stiffness: 1600,
                                damping: 50,
                            }}
                            className="p-6 md:p-12 pt-8 rounded-lg max-w-3xl w-full relative shadow-2xl bg-gray-950/95"
                            onClick={(e) => e.stopPropagation()}
                        >  
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="flex items-center justify-center w-16 h-16 absolute top-0 right-0 "
                            >
                                <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                            </button>

                            <h2 className="text-base md:text-lg font-normal text-slate-500 mb-3">For</h2>
                            <p className='text-gray-50 text-sm md:text-xl font-semibold md:font-bold'>{slides[current]?.for}</p>
                            <h2 className="text-base md:text-lg font-normal text-slate-500 mb-3 mt-6">Imod</h2>
                            <p className='text-gray-50 text-sm md:text-xl font-semibold md:font-bold'>{slides[current]?.imod}</p>
                        </motion.div>

                    </motion.div>
                )}
        </>
    )
}