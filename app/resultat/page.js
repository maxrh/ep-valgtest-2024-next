"use client"

import { VoteContext } from "../context/voteContext";
import { useContext, useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';


const partyColors = {
    'ALT': '46, 134, 60',
    'DF': '234, 201, 62',
    'DD': '121, 150, 210',
    'KF': '143, 178, 32',
    'EL': '226, 130, 30',
    'M': '175, 139, 211',  
    'LA': '61, 179, 191',
    'RV': '117, 48, 128',
    'SF': '222, 127, 169',
    'S': '167, 41, 29',
    'V': '30, 71, 93',
}

export default function Resultat() {
    const { matchResults } = useContext(VoteContext)
    const [expanded, setExpanded] = useState(0)

    const sortedResults = matchResults.sort((a, b) => b.matchPercentage - a.matchPercentage)

    const toggleItem = (index) => {
        if (expanded !== index) setExpanded(index)
    }
    
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 }
    }

	return (
		<main className="flex flex-col items-center min-h-screen px-14 py-32">
			<h1 className="text-7xl font-bold mb-8 text-gray-700">Resultat</h1>
            <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-2xl  rounded-lg">
                {sortedResults.map((result, index) => (
                    <motion.div 
                        key={index}
                        initial={false}
                        animate={{ marginBottom: expanded === index ? 40 : 10, marginTop: expanded === index ? 40 : 10 }}
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
                                        initial={false}
                                        animate={{ 
                                            scale: expanded === index ? 3 : 1, 
                                            x: expanded === index ? 40 : 0,
                                            marginRight: expanded === index ? 32 : 16,
                                        }}
                                        transition={{ duration: 0.2, ease: easeInOut }}
                                        className={`flex items-center justify-center rounded-full overflow-hidden insert-0 z-10 border`}
                                        style={{ borderColor: "#0d1220" }}
                                    >
                                        {result.img ? (
                                            <Image 
                                                src={`/images/kandidater/${result.img}`} 
                                                alt={result.name} 
                                                width={100}
                                                height={100}
                                                className={`object-cover h-8 w-8 `}
                                            />
                                        ) : (                                        
                                            <Image 
                                                src={`/images/kandidater/placeholder.jpg`} 
                                                alt={result.name} 
                                                width={100}
                                                height={100}
                                                className={`object-cover h-8 w-8 `}
                                            />
                                        )}
                                    </motion.div>
                                    <motion.h2 
                                        initial={false}
                                        animate={{ 
                                            x: expanded === index ? 60 : 0,
                                            fontSize: expanded === index ? "1.125rem" : "0.875rem",
                                            fontWeight: expanded === index ? "600" : "500"
                                        }}
                                        transition={{ duration: 0.2, ease: easeInOut }}
                                        className={``}
                                    >{result.name} <span className="font-light">({result.party})</span>
                                    </motion.h2>
                                </div>
                                <motion.span 
                                    initial={false}
                                    animate={{ fontSize: expanded === index ? "1.125rem" : "0.875rem" }}
                                    transition={{ duration: 0.2, ease: easeInOut }}
                                    className={`font-bold mx-2`}
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
                                    className=" bg-gray-950/15 text-gray-200"
                                >
                                    <motion.div
                                        layout  // Adding layout can help manage size changes more smoothly
                                        className="p-10 pb-12 pt-10"
                                    >
                                        <p className="mb-4 text-sm">Hvorfor man skal stemme på {result.name} til det kommende EP-valg?</p>
                                        <p className="font-medium">{`"${result.comment}"`}</p>
                                    </motion.div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
		</main>
	);
}