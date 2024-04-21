"use client"

import { VoteContext } from "../context/voteContext";
import { useContext, useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';
import { useRouter } from 'next/navigation'


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
    const router = useRouter()
    const { matchResults, partyMatchResults } = useContext(VoteContext)
    const [expanded, setExpanded] = useState(0)
    const [itemCount, setItemCount] = useState(10) // Display initial 10 items

    const loadMoreItems = () => {
        setItemCount(prevItemCount => prevItemCount + 10); // Load 10 more items
    }

    const sortedResults = matchResults.sort((a, b) => b.matchPercentage - a.matchPercentage)
    const sortedPartyResults = partyMatchResults.sort((a, b) => b.matchPercentage - a.matchPercentage)

    const toggleItem = (index) => {
        if (expanded !== index) setExpanded(index)
    }
    
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 }
    }

    console.log('matchResults', matchResults, partyMatchResults)

	return (
		<main className=" min-h-screen px-14 py-32">
            <div className="w-full flex items-center justify-between mt-4 mb-6 pb-6  border-b border-gray-800">
			    <h1 className="text-5xl font-bold text-gray-700 -indent-0.5 -mb-3">Resultat</h1>
                <button 
                    className="group flex items-center justify-center ml-4 text-sm font-medium text-gray-400 hover:text-gray-300 hover:shadow-xl border border-gray-800 hover:border-gray-700 transition-all py-3 px-6 rounded-full duration-300"
                    onClick={() => router.push('/')}
                >
                    <svg class="w-6 h-6 text-gray-600 group-hover:text-gray-500 mr-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>

                    Tag testen igen
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="column w-full h-full">
                    <h2 className="text-lg font-semibold mb-8 pb-3 text-gray-200 ">Kandidater <span className="font-light text-gray-500">({sortedResults.length})</span></h2>

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
                                                    <Image 
                                                        src={`/images/kandidater/${result.img}`} 
                                                        alt={result.name} 
                                                        width={100}
                                                        height={100}
                                                        className={`object-cover h-8 w-8 `}
                                                        priority
                                                    />
                                                ) : (                                        
                                                    <Image 
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
                </div>
                <div className="column w-full">
                    <h2 className="text-lg font-semibold mb-8 pb-3 text-gray-200">Partier <span className="font-light text-gray-500" >({sortedPartyResults.length})</span></h2>

                    <div className="w-full flex flex-col items-stretch mb-5">
                        {sortedPartyResults.map((result, index) => (

                            <div 
                                key={index} 
                                className="w-full flex items-center text-sm justify-between text-gray-50 h-10 bg-slate-950/20 mb-2 relative"
                                style={{ backgroundColor: `#0d1220`  }}
                            >
                                <div className="h-full flex items-center z-10">
                                    <div 
                                        className="h-full w-10 flex items-center justify-center mr-5 font-black uppercase text-gray-50"
                                        style={{ backgroundColor: `rgba(${partyColors[result.parti]}, 1)` }}
                                    
                                    >{result.parti}</div>
                                    <div className="h-full flex items-center font-medium">{result.partiNavn} <span className="ml-4 font-light text-xs text-gray-300">{result.politiciansCount} deltagere </span></div>
                                </div>
                                <div className={`flex items-center justify-center font-medium h-full z-10 px-4`}>
                                    {result.matchPercentage}%
                                </div>
                                <div 
                                    className="h-full absolute top-0 left-0 z-0"
                                    style={{
                                        width: `${result.matchPercentage}%`,
                                        backgroundImage: `linear-gradient(90deg, rgba(${partyColors[result.parti]}, 0) , rgba(${partyColors[result.parti]}, .25) )`
                                    }}
                                ></div>
                            </div>
                        ))}

              
                    </div>
                    <p className="text-sm text-gray-400 font-light border-t border-gray-800 pt-6 mt-6">* Vi tager højde for potentielle skævheder, som kan opstå, hvis et parti har mange flere deltagende politikere end andre partier. Dette sikres ved gennemsnitsberegningen, som normaliserer overensstemmelsen baseret på antal deltagere fra hvert parti.</p>

                </div>
            </div>
		</main>
	);
}