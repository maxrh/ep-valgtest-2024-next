import { useState, useEffect } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import NextImage from 'next/image';  // Rename the import

export default function ResultPol({ sortedResults, partyColors, handleOpenPopup }) {
    const [expanded, setExpanded] = useState(0)
    const [itemCount, setItemCount] = useState(15) // Display initial 10 items

    // Preload images for the first set of results
    useEffect(() => {
        sortedResults.slice(0, itemCount).forEach(result => {
            if (result.img) {
                const img = new Image();
                img.src = `/images/kandidater/${result.img}`;
            }
        });
    }, []); // Empty dependency array ensures this only runs once on mount

    const loadMoreItems = () => {
        setItemCount(prevItemCount => prevItemCount + 15); // Load 10 more items
    }

    const toggleItem = (index) => {
        if (expanded !== index) setExpanded(index)
    }
    
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 }
    }

    return (
        <div id="accordion-collapse" data-accordion="collapse" className="w-full flex flex-col items-stretch">
            {sortedResults.slice(0, itemCount).map((result, index) => (
                <motion.div 
                    key={index}
                    initial={{  opacity:0, marginBottom: 8,  marginTop: 0 }}
                    animate={{ opacity: 1, marginBottom: expanded === index ? 8 : 8, marginTop: expanded === index && index !== 0 ? 8 : 0 }}
                    transition={{ 
                        opacity: { duration: 0.4, ease: easeInOut, delay: (index % 15) * 0.05 }, // Delay resets every 15 items
                        marginBottom: { duration: 0.2, ease: easeInOut },
                        marginTop: { duration: 0.2, ease: easeInOut }
                    }}

                    className={`${expanded === index ? "" : "" }`}
                >
                    <motion.header
                        initial={false}
                        layout  // This enables automatic size animation
                        transition={{ duration: 0.2, ease: easeInOut }}
                        onClick={() => toggleItem(index)}
                        className={`w-full flex flex-col items-center cursor-pointer relative text-gray-50  `}
                        style={{ backgroundColor: "#0d1220" }}
                    >
                        <motion.div 
                            initial={false}
                            layout  // This enables automatic size animation
                            transition={{ duration: 0.2, ease: easeInOut }}
                            className={`w-full flex items-center justify-between py-3 px-3 md:px-4 z-10 ${expanded === index ? "h-16" : "h-14"} `}
                        >
                            <div className="flex items-center h-full ">
                                <motion.div
                                    initial={false}
                                    layout  // This enables automatic size animation
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`flex items-center justify-center rounded-full overflow-hidden insert-0 shadow-lg shrink-0 ${expanded === index ? "h-10 w-10 md:h-20 md:w-20" : "h-8 w-8"} ${expanded === index ? "mr-4" : "mr-4"}`}
                                    style={{ borderColor: "#0d1220" }}
                                >
                                        {result.img ? (
                                            <NextImage 
                                                src={`/images/kandidater/${result.img}`} 
                                                alt={result.name} 
                                                width={100}
                                                height={100}
                                                className={`object-cover  ${expanded === index ? "h-10 w-10 md:h-20 md:w-20" : "h-8 w-8"} `}
                                                priority
                                            />
                                        ) : (                                        
                                            <NextImage 
                                                src={`/images/kandidater/placeholder.jpg`} 
                                                alt={result.name} 
                                                width={100}
                                                height={100}
                                                className={`object-cover  ${expanded === index ? "h-10 w-10 md:h-20 md:w-20" : "h-8 w-8"}`}
                                                priority
                                            />
                                        )}
                                </motion.div>
                                <motion.h3 
                                    initial={false}
                                    layout  // This enables automatic size animation
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`mt-0.5 leading-tight ${expanded === index ? "text-base md:text-lg font-semibold" : "text-sm md:text-base font-medium"} `}
                                >{result.name} <span className="font-light">({result.party})</span>
                                </motion.h3>
                            </div>
                            <motion.span 
                                initial={false}
                                layout  // This enables automatic size animation
                                transition={{ duration: 0.2, ease: easeInOut }}
                                className={`font-bold mx-2 mt-0.5 ${expanded === index ? "text-lg " : "text-sm "} `}
                            >{result.matchPercentage}%</motion.span>
                        </motion.div>

                        <div className="w-full h-1 z-0 bg-gray-950/50 ">
                            <div 
                                className="h-full rounded-r-lg" 
                                style={{
                                    width: `${result.matchPercentage}%`,
                                    backgroundImage: `linear-gradient(90deg, rgba(${partyColors[result.party]}, 0.5) , rgba(${partyColors[result.party]}, 1) )`
                                }}
                            ></div>
                        </div>
                    </motion.header>
                    <AnimatePresence >
                        {expanded === index && (
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={variants}
                                transition={{ duration: 0.2, ease: easeInOut }}
                                className=" bg-gray-950/15 text-gray-100"
                            >
                                <motion.div
                                    layout  // Adding layout can help manage size changes more smoothly
                                    className="px-5 py-7 md:p-10 "
                                >
                                    <h4 className="mb-4 pb-4 text-sm font-normal text-gray-300 border-b border-gray-800">Hvorfor skal man stemme på {result.name}?</h4>
                                    <p className="font-normal text-base md:text-lg mb-4">{`"${result.comment}"`}</p>

                                    <h4 className="mb-5 pb-4 text-sm font-normal text-gray-300 mt-10 border-b border-gray-800">Sådan matchede dine og {result.name}&apos;s stemmer</h4>
                                    
                                    <div className='flex items-center justify-start -mx-1 flex-wrap'>
                                        {result.details.map(detail => (
                                            <button 
                                                key={detail.questionId}                                                    
                                                className={`h-8 w-8 m-1 rounded-full flex items-center justify-center shrink-0 relative transition-all duration-300
                                                ${detail.politicianVote === 0 ? 'bg-red-500/40 hover:bg-red-500/60' : detail.politicianVote === 1 ? 'bg-green-500/40 hover:bg-green-500/60' : 'bg-gray-700 hover:bg-gray-500'}`}
                                                onClick={() => handleOpenPopup(detail.questionId)}
                                            >   
                                                {detail.matched ? (
                                                    <svg className="w-4 h-4 text-gray-300 absolute -top-1 -right-1 shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/></svg>
                                                ) : null}     
                                                <span className="text-sm text-gray-900 font-black">{detail.questionId + 1}</span>
                                            </button>
                                        ))}

                                    </div>
                                    <div className="flex items-center justify-start mt-5">
                                        <svg className="w-4 h-4 text-gray-700 mr-1.5 -ml-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/></svg>
                                        <p className="font-normal text-xs  text-gray-400 ">Klik et nummer for at se udsagn igen</p>
                                    </div>

                                </motion.div>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}

            {itemCount < sortedResults.length && (
                <button 
                    className="mt-6 px-8 py-4 bg-gray-800 text-white rounded  transition duration-300" 
                    onMouseOver={(e) => e.target.style.backgroundColor = "#002176"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#1F2937"}
                    onClick={loadMoreItems}>
                    Se flere
                </button>
            )}
        </div>
    )
}