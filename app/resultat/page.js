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

    console.log(expanded)
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
			
            <h1 className="text-3xl font-bold mb-4">Resultat</h1>
            <p className="mb-8">Du er mest enig med {sortedResults[0]?.name} fra {sortedResults[0]?.party}</p>
            <div id="accordion-collapse" data-accordion="collapse" className="w-full max-w-2xl overflow-hidden">
                {sortedResults.map((result, index) => (
                    <div key={index} className="mb-1 rounded-lg bg-white overflow-hidden">
                    <motion.header
                        initial={false}
                        animate={{ backgroundColor: expanded === index ? "#fff" : "#fff" }}
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-3 cursor-pointer relative"
                    >
                        <div className="flex items-center">
                            <div className="rounded-full h-10 w-10 overflow-hidden relative mr-6">
                                <Image 
                                    src={`/images/kandidater/${result.img}`} 
                                    alt={result.name} 
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <h2 className="font-bold">{result.name} <span className="font-normal">({result.party})</span></h2>
                        </div>
                        <span className="font-bold">{result.matchPercentage}%</span>
                        <div className="w-full h-1 absolute bottom-0 left-0 z-0 ">
                            <div 
                                className="h-full" 
                                style={{
                                    backgroundColor: partyColors[result.party] || '#aaa',  // Default to '#333' if the party color is not found
                                    width: `${result.matchPercentage}%`
                                }}
                            ></div>
                        </div>
                    </motion.header>
                    <AnimatePresence mode="wait "initial={false}>
                        {expanded === index && (
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={variants}
                                transition={{ duration: 0.3, ease: easeInOut }}
                                className=" bg-slate-100"
                            >
                                <motion.div
                                    layout  // Adding layout can help manage size changes more smoothly
                                    className="p-8"
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