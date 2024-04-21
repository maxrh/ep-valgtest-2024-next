import { useState, useEffect } from 'react'
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import NextImage from 'next/image';  // Rename the import

export default function ResultPol({ sortedResults, partyColors }) {
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
                    initial={false}
                    animate={{ 
                        marginBottom: expanded === index ? 20 : 10, 
                        marginTop: expanded === index && index !== 0 ? 20 : 0  // Check if it's expanded and not the first item
                    }}
                    transition={{ duration: 0.2, ease: easeInOut }}
                    className={`${expanded === index ? "" : "" }`}
                >
                    <motion.header
                        initial={false}
                        animate={{ 
                            backgroundColor: expanded === index ? "#0d1220" : "#0d1220",
                        }}
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
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: 1,
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
                                <motion.h2 
                                    initial={false}
                                    animate={{ 
                                        x: expanded === index ? 60 : 0,
                                        fontSize: expanded === index ? "1.125rem" : "1rem",
                                        fontWeight: expanded === index ? "600" : "500"
                                    }}
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`mt-0.5`}
                                >{result.name} <span className="font-light">({result.party})</span>
                                </motion.h2>
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
                                    <p className="mb-4 text-sm font-light text-gray-300">Hvorfor man skal stemme på {result.name} til det kommende EP-valg?</p>
                                    <p className="font-normal">{`"${result.comment}"`}</p>
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