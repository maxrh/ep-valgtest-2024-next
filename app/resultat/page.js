"use client"

import { VoteContext } from "../context/voteContext";
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence, easeIn, easeInOut, easeOut } from 'framer-motion';
import { useRouter } from 'next/navigation'
import ResultParty from "../components/resultParty";
import ResultPol from "../components/resultPol";

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

    const sortedResults = matchResults ?  matchResults.sort((a, b) => b.matchPercentage - a.matchPercentage) : []
    const sortedPartyResults = partyMatchResults ? partyMatchResults.sort((a, b) => b.matchPercentage - a.matchPercentage) : []

	return (
		<main className="min-h-screen px-14 py-32">
            <div className="w-full flex items-center justify-between mt-4 mb-6 pb-6  border-b border-gray-800">
			    <h1 className="text-5xl font-bold text-gray-700 -indent-0.5 -mb-3">Resultat</h1>
                <button 
                    className="group flex items-center justify-center ml-4 text-sm font-medium text-gray-400 hover:text-gray-300 hover:shadow-xl border border-gray-800 hover:border-gray-700 transition-all py-3 px-6 rounded-full duration-300"
                    onClick={() => router.push('/')}
                >
                    <svg className="w-6 h-6 text-gray-600 group-hover:text-gray-500 mr-3 transition-all duration-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/></svg>
                    Tag testen igen
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="column w-full h-full">
                    <h2 className="text-lg font-semibold mb-8 pb-3 text-gray-200 ">Kandidater <span className="font-light text-gray-500">({sortedResults ? sortedResults.length : ''})</span></h2>
                    <ResultPol sortedResults={sortedResults} partyColors={partyColors} />
                </div>
                <div className="column w-full">
                    <h2 className="text-lg font-semibold mb-8 pb-3 text-gray-200">Partier <span className="font-light text-gray-500" >({sortedPartyResults.length})</span></h2>
                    <ResultParty sortedPartyResults={sortedPartyResults} partyColors={partyColors} />
                </div>
            </div>
		</main>
	);
}