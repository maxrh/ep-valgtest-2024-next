"use client"

import { VoteContext } from "../context/voteContext";
import { useContext, useState, useEffect } from "react";
import Image from 'next/image';
import { motion, AnimatePresence, easeIn, easeInOut } from 'framer-motion';


const partyColors = {
    'ALT': '#2e863c',
    'DF':'#eac93e',
    'DD':'#7996d2',
    'KF':'#8fb220',
    'EL':'#e2821e',
    'M':'#af8bd3',  
    'LA':'#3db3bf',
    'RV':'#753080',
    'SF':'#de7fa9',
    'S':'#a7291d',
    'V':'#1e475d',
}

export default function Resultat() {
    const { matchResults } = useContext(VoteContext); 
    const [expanded, setExpanded] = useState(0); 

    const sortedResults = matchResults.sort((a, b) => b.matchPercentage - a.matchPercentage);

    // Toggle accordion item
    const toggleItem = (index) => {
        // Only allow changing if another accordion is opened
        if (expanded !== index) {
            setExpanded(index);
        }
    };
    
    // Animation variants
    const variants = {
        open: { opacity: 1, height: 'auto' },
        collapsed: { opacity: 0, height: 0 }
    };

	return (
		<main className="flex flex-col items-center min-h-screen px-14 py-32">
			<h1 className="text-7xl font-bold mb-8 text-gray-700">Resultat</h1>

            <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-2xl overflow-hidden rounded-lg">
                {sortedResults.map((result, index) => (
                    <div key={index} className="overflow-hidden">
                        <motion.header
                            initial={false}
                            animate={{ 
                                backgroundColor: expanded === index ? "#0d1220" : "#0d1220",
                            }}
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between px-4 py-4 cursor-pointer relative text-gray-50"
                        >
                            <div className="flex items-center">
                                <div className="rounded-full h-10 w-10 overflow-hidden relative mr-6 mb-1">
                                    <Image 
                                        src={`/images/kandidater/${result.img}`} 
                                        alt={result.name} 
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                    />
                                </div>
                                <h2 className="font-semibold ">{result.name} <span className="font-light">({result.party})</span></h2>
                            </div>
                            <span className="font-bold mx-2">{result.matchPercentage}%</span>
                            <div className="w-full h-1 absolute bottom-0 left-0 z-0 bg-gray-950/50 ">
                                <div 
                                    className="h-full rounded-r-lg" 
                                    style={{
                                        backgroundColor: partyColors[result.party] || 'rgb(31 41 55)',  // Default to '#333' if the party color is not found
                                        width: `${result.matchPercentage}%`
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
                                    transition={{ duration: 0.3, ease: easeInOut }}
                                    className=" bg-gray-950/15 text-gray-200"
                                >
                                    <motion.div
                                        layout  // Adding layout can help manage size changes more smoothly
                                        className="p-8 pb-12 "
                                    >
                                        <p className="mb-4 text-sm">Hvorfor man skal stemme på {result.name} til det kommende EP-valg?</p>
                                        <p className="font-medium">{`"${result.comment}"`}</p>
                                    </motion.div>
                                </motion.section>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
		</main>
	);
}