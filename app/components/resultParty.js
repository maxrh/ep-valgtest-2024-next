import { motion, AnimatePresence, easeInOut, delay } from 'framer-motion';


export default function ResultParty({ sortedPartyResults, partyColors }) {

    const delay = (sortedPartyResults.length - 1) * 0.1 + 1.5 ; // Adds 0.5 seconds after the last item's animation starts

    return (
        <div className="w-full flex flex-col items-stretch mb-5">
            {sortedPartyResults.map((result, index) => (

                <motion.div 
                    key={index} 
                    initial={{ opacity:0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: .5, ease: easeInOut, delay: index * 0.1 }}
                    className="w-full flex items-center text-sm justify-between text-gray-50 h-10 bg-slate-950/20 mb-2 relative"
                    style={{ backgroundColor: `#0d1220`  }}
                >
                    <div className="h-full flex items-center z-10">
                        <div 
                            className="h-full w-10 flex items-center justify-center mr-5 font-black uppercase text-gray-50"
                            style={{ backgroundColor: `rgba(${partyColors[result.party]}, 1)` }}
                        
                        >{result.party}</div>
                        <div className="h-full flex items-center font-medium">{result.partyName} <span className="ml-4 font-light text-xs text-gray-300">{result.politiciansCount} deltagere </span></div>
                    </div>
                    <div className={`flex items-center justify-center font-medium h-full z-10 px-4`}>
                        {result.matchPercentage}%
                    </div>
                    <div 
                        className="h-full absolute top-0 left-0 z-0"
                        style={{
                            width: `${result.matchPercentage}%`,
                            backgroundImage: `linear-gradient(90deg, rgba(${partyColors[result.party]}, 0) , rgba(${partyColors[result.party]}, .25) )`
                        }}
                    ></div>
                </motion.div>
            ))}

            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .5, ease: easeInOut, delay: delay  }}
                className="text-sm text-gray-400 font-light border-t border-gray-800 pt-6 mt-6"
            >
                * Vi tager højde for potentielle skævheder, som kan opstå, hvis et parti har mange flere deltagende politikere end andre partier. Dette sikres ved gennemsnitsberegningen, som normaliserer overensstemmelsen baseret på antal deltagere fra hvert parti.
            </motion.p>

        </div>
    )
}