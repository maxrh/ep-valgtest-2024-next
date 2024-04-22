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
                    initial={{  opacity:0, marginBottom: 10,  marginTop: 0 }}
                    animate={{ opacity: 1, marginBottom: expanded === index ? 20 : 10, marginTop: expanded === index && index !== 0 ? 20 : 0 }}
                    transition={{ 
                        opacity: { duration: 0.4, ease: easeInOut, delay: (index % 15) * 0.05 }, // Delay resets every 15 items
                        marginBottom: { duration: 0.2, ease: easeInOut },
                        marginTop: { duration: 0.2, ease: easeInOut }
                    }}

                    className={`${expanded === index ? "" : "" }`}
                >
                    <motion.header
                        initial={false}
                        animate={{ 
                            backgroundColor: expanded === index ? "#0d1220" : "#0d1220",
                        }}
                        transition={{ duration: 0.2, ease: easeInOut }}
                        onClick={() => toggleItem(index)}
                        className={`w-full flex flex-col items-center cursor-pointer relative text-gray-50  `}
                    >
                        <motion.div 
                            initial={false}
                            animate={{ height: expanded === index ? "64px" : "56px", paddingLeft: expanded === index ? "24px" : "16px", paddingRight: expanded === index ? "24px" : "16px"}}
                            transition={{ duration: 0.2, ease: easeInOut }}
                            className={`w-full flex items-center justify-between py-3`}
                        >
                            <div className="flex items-center h-full ">
                                <motion.div
                                    initial={false}
                                    animate={{ 
                                        scale: expanded === index ? 3 : 1, 
                                        x: expanded === index ? 30 : 0,
                                        marginRight: expanded === index ? 28 : 16,
                                    }}
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`flex items-center justify-center rounded-full overflow-hidden insert-0 z-10 shadow-lg`}
                                    style={{ borderColor: "#0d1220" }}
                                >
                                    {result.img ? (
                                        <NextImage 
                                            src={`/images/kandidater/${result.img}`} 
                                            alt={result.name} 
                                            width={100}
                                            height={100}
                                            className={`object-cover h-8 w-8 `}
                                            priority
                                        />
                                    ) : (                                        
                                        <NextImage 
                                            src={`/images/kandidater/placeholder.jpg`} 
                                            alt={result.name} 
                                            width={100}
                                            height={100}
                                            className={`object-cover h-8 w-8 `}
                                            priority
                                        />
                                    )}
                                </motion.div>
                                <motion.h3 
                                    initial={false}
                                    animate={{ 
                                        x: expanded === index ? 60 : 0,
                                        fontSize: expanded === index ? "1.125rem" : "1rem",
                                        fontWeight: expanded === index ? "600" : "500"
                                    }}
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`mt-0.5`}
                                >{result.name} <span className="font-light">({result.party})</span>
                                </motion.h3>
                            </div>
                            <motion.span 
                                initial={false}
                                animate={{ fontSize: expanded === index ? "1.125rem" : "0.875rem" }}
                                transition={{ duration: 0.2, ease: easeInOut }}
                                className={`font-bold mx-2 mt-0.5`}
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
                                    className="p-10 pb-12 pt-10"
                                >
                                    <h4 className="mb-4 pb-4 text-sm font-normal text-gray-300 border-b border-gray-800">Hvorfor man skal stemme på {result.name} til det kommende EP-valg?</h4>
                                    <p className="font-normal text-lg mb-4">{`"${result.comment}"`}</p>

                                    <h4 className="mb-4 pb-4 text-sm font-normal text-gray-300 mt-10 border-b border-gray-800">Sådan matchede dine og {result.name}&apos;s stemmer</h4>
                                    <div className="flex items-center justify-start mb-6">
                                        <svg className="w-4 h-4 text-gray-700 mr-1.5 -ml-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/></svg>
                                            <p className="font-normal text-xs  text-gray-400 ">Klik et nummer for at se udsagn igen</p>
                                        </div>
                                        <div className='flex items-center justify-start -mx-1 flex-wrap'>
                                            {result.details.map(detail => (
                                                <button 
                                                    key={detail.questionId}                                                    
                                                    className={`h-8 w-8 m-1 rounded-full flex items-center justify-center shrink-0 relative transition-all duration-300
                                                    ${detail.politicianVote === 0 ? 'bg-red-500/40 hover:bg-red-500/60' : detail.politicianVote === 1 ? 'bg-green-500/40 hover:bg-green-500/60' : 'bg-gray-700'}`}
                                                    onClick={() => handleOpenPopup(detail.questionId)}
                                                >   
                                                    {detail.matched ? (
                                                        <svg className="w-4 h-4 text-gray-300 absolute -top-1 -right-1 shadow-sm" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/></svg>
                                                    ) : null}     
                                                    <span className="text-sm text-gray-900 font-black">{detail.questionId + 1}</span>
                                                </button>
                                            ))}

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