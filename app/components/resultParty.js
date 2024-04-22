import { motion, AnimatePresence, easeInOut, delay } from 'framer-motion';


export default function ResultParty({ sortedPartyResults, partyColors }) {

    const delay = (sortedPartyResults.length - 1) * 0.1 + 0.75 

    return (
        <div className="w-full flex flex-col items-stretch mb-5">
            {sortedPartyResults.map((result, index) => (

                <motion.div 
                    key={index} 
                    initial={{ opacity:0 }}
                    animate={{ opacity: 1}}
                    transition={{ duration: .4, ease: easeInOut, delay: index * 0.05 }}
                    className="w-full flex items-center text-sm justify-between text-gray-50 h-10 bg-slate-950/20 mb-2 relative"
                    style={{ backgroundColor: `#0d1220`  }}
                >
                    <div className="h-full flex items-center z-10">
                        <div 
                            className="h-full w-10 flex items-center justify-center mr-5 font-black uppercase text-gray-50"
                            style={{ backgroundColor: `rgba(${partyColors[result.party]}, 1)` }}
                        
                        >{result.party}</div>
                        <div className="h-full flex flex-col md:flex-row items-start md:items-center font-medium">{result.partyName} <span className="font-light text-xs text-gray-50 ml-0 md:ml-4 opacity-70"><span className='font-mediu'>{result.politiciansCount}</span> deltagene kandidater </span></div>
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

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .4, ease: easeInOut, delay: delay  }}
                className="border-t border-gray-800 pt-5 mt-5 relative"
            >
                <svg className="w-4 h-4 text-gray-700 -ml-0.5 absolute left-0 top-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clipRule="evenodd"/></svg>
                <p className="font-normal text-xs text-gray-400 pl-5 leading-snug">Vi tager højde for potentielle skævheder, som kan opstå, hvis et parti har mange flere deltagende politikere end andre partier. Dette sikres ved en gennemsnitsberegning, som normaliserer overensstemmelsen baseret på antal deltagere fra hvert parti.</p>
            </motion.div>

        </div>
    )
}

