"use client"

import { VoteContext } from "../context/voteContext";
import { useContext, useState } from "react";
import { motion, easeInOut } from 'framer-motion';
import { useRouter } from 'next/navigation'
import ResultParty from "../components/resultParty";
import ResultPol from "../components/resultPol";
import Image from "next/image";

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
    const { matchResults, partyMatchResults, slides } = useContext(VoteContext)
    const [showPopup, setShowPopup] = useState(false);  // State to control popup visibility
    const [popupContent, setPopupContent] = useState(null);

    const sortedResults = matchResults ?  matchResults.sort((a, b) => b.matchPercentage - a.matchPercentage) : []
    const sortedPartyResults = partyMatchResults ? partyMatchResults.sort((a, b) => b.matchPercentage - a.matchPercentage) : []

    const handleOpenPopup = (id) => {
        const slide = slides.find(slide => slide.id === id + 1);
        if (slide) {
            setPopupContent({
                id: slide.id,
                text: slide.text
            }); 
            setShowPopup(true);
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
        setPopupContent(null); // Clear popup content on close
    };

	return (
		<main className="min-h-screen h-full px-8 md:px-14 pt-28 md:pt-32">

            <div className="w-full flex items-center justify-between mb-4 md:mb-6 pb-3 md:pb-6 border-b border-gray-800">
			    <h1 className="text-3xl md:text-5xl font-bold text-gray-700 -indent-0.5 md:-mb-3">Resultat</h1>
                <button 
                    className="group flex items-center justify-center ml-4 text-xs md:text-sm font-medium text-gray-400 hover:text-gray-300 hover:shadow-xl border border-gray-800 hover:border-gray-700 transition-all py-1 md:py-3 px-4 md:px-6 rounded-full duration-300"
                    onClick={() => router.push('/')}
                >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-500 mr-1 md:mr-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
                    Tag testen igen
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 h-full">

                <div className="column w-full h-full">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, ease: easeInOut}}
                        className="text-lg font-semibold mb-5 md:mb-8 text-gray-200"
                    >
                        Kandidater <span className="font-light text-gray-500 ">({sortedResults ? sortedResults.length : ''})</span>
                    </motion.h2>
                    <ResultPol sortedResults={sortedResults} partyColors={partyColors} handleOpenPopup={handleOpenPopup} />
                </div>

                <div className="column w-full h-full">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2, ease: easeInOut}}
                        className="text-lg font-semibold mb-5 md:mb-8 text-gray-200"
                    >
                        Partier <span className="font-light text-gray-500" >({sortedPartyResults.length})</span>
                    </motion.h2>
                    <ResultParty sortedPartyResults={sortedPartyResults} partyColors={partyColors} />
                </div>
            </div>
            {showPopup && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .2, ease: easeInOut }}
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
                                className="flex items-center justify-center w-16 h-16 absolute top-0 right-0"
                            >
                                <svg class="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
                            </button>

                            <h2 className="text-base md:text-lg font-normal text-slate-500 mb-3">Udsagn #{popupContent.id}</h2>
                            <p className="text-gray-50 text-lg md:text-xl font-semibold leading-snug">{popupContent.text}</p>

                        </motion.div>

                    </motion.div>
                )}

                <div className="mt-16 md:mt-24 h-80 flex flex-col items-center justify-center text-center text-xs text-gray-300 border-t border-gray-800">
                    <div className="flex items-center justify-center h-12 gap-2 mb-4">
                        <div className="flex items-center justify-center bg-gray-100 h-full">
                            <Image  
                                src="/images/EP-logo.png"
                                alt="EU logo"
                                width={100}
                                height={100}
                                className="h-full  w-full object-contain p-2"                            

                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 h-full">

                            <Image  
                                src="/images/logo_eunaevnet.png"
                                alt="EU Naevnet"
                                width={100}
                                height={100}
                                className="h-full w-full object-contain p-3"                            

                            />

                        </div>

                        <div className="flex items-center justify-center h-full">
                            <Image  
                                src="/images/EU-emblem.jpg"
                                alt="EU Emblem"
                                width={100}
                                height={100}
                                className="h-full w-full object-contain "                            

                            />
                        </div>

                        <div className="flex items-center justify-center bg-gray-100 h-full">
                            <Image  
                                src="/images/Dansk-Folkeoplysnings-Samråd.png"
                                alt="Dansk Folkeoplysnings Samråd"
                                width={100}
                                height={100}
                                className="h-full  w-full object-contain  p-2"                            
                            />
                        </div>

                    </div>
                    <p className="text-xs text-gray-400">Valgtesten er medfinansieret af Europa-Parlamentet, Europa-Nævnet og Dansk Folkeoplysnings Samråd.</p>
                </div>
		</main>
	);
}