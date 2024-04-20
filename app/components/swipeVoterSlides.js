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
                        initial={ direction ? { opacity: 0, x: -direction, scale: 0.3} : { opacity: 0, y: -40}}
                        animate={ direction ? { opacity: 1, x: 0, scale: 1} : { opacity: 1, y: 0}}
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
                        className="h-full w-full absolute top-0 left-0 cursor-grab z-10"
                    >
                        <div className="h-full w-full p-14 flex flex-col items-center justify-center">
                            <div className="my-10 max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl ">
                                <h1 className=" leading-tight font-bold text-slate-50">{slides[current]?.text}</h1>
                            </div>
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
                        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
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
                            className="p-12 pb-14 rounded-lg  max-w-xl w-full relative shadow-2xl bg-gray-950/95"
                            onClick={(e) => e.stopPropagation()}
                        >  
                            <button 
                                onClick={() => setShowPopup(false)}
                                className="flex items-center justify-center w-16 h-16 absolute top-0 right-0 "
                            >
                                <svg class="w-6 h-6 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                            </button>

                            <h2 className="text-2xl font-bold text-gray-600 mb-3">For</h2>
                            <p className='text-gray-200 text-lg'>{slides[current]?.for}</p>
                            <h2 className="text-2xl font-bold text-gray-600 mb-3 mt-6">Imod</h2>
                            <p className='text-gray-200  text-lg'>{slides[current]?.imod}</p>
                        </motion.div>

                    </motion.div>
                )}
        </>
    )
}