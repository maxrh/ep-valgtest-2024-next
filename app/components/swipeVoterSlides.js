import { motion, AnimatePresence, delay } from 'framer-motion'
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
                            <span className='flex items-center justify-center text-xs font-mediumn  tracking-wide'> 
                                <svg className="w-4 h-4 text-gray-200 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
                                Træk/Swipe
                                <svg class="w-4 h-4 text-gray-200 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>

                            </span>
                            <h1 className=" leading-tight font-bold text-slate-50 my-6 md:my-8">{slides[current]?.text}</h1>
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
                            className="p-8 md:p-12 pb-14 rounded-lg max-w-3xl w-full relative shadow-2xl bg-gray-950/95"
                            onClick={(e) => e.stopPropagation()}
                        >  
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="flex items-center justify-center w-16 h-16 absolute top-0 right-0 "
                            >
                                <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                            </button>

                            <h2 className="text-base md:text-lg font-normal text-slate-500 mb-3">For</h2>
                            <p className='text-gray-50 text-base md:text-xl font-semibold md:font-bold leading-snug'>{slides[current]?.for}</p>
                            <h2 className="text-base md:text-lg font-normal text-slate-500 mb-3 mt-6">Imod</h2>
                            <p className='text-gray-50 text-base md:text-xl font-semibold md:font-bold leading-snug'>{slides[current]?.imod}</p>
                        </motion.div>

                    </motion.div>
                )}
        </>
    )
}