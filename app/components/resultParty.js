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
                    className="w-full flex items-center  justify-between text-gray-50 h-10 bg-slate-950/20 mb-2 relative"
                    style={{ backgroundColor: `#0d1220`  }}
                >
                    <div className="h-full w-full flex items-center z-10">
                        <div 
                            className="h-full w-10 text-sm flex items-center justify-center mr-5 font-black uppercase text-gray-50 shrink-0"
                            style={{ backgroundColor: `rgba(${partyColors[result.party]}, 1)` }}
                        
                        >{result.party}</div>
                        <div className="h-full flex items-center justify-center font-light text-gray-400 text-sm">
                            <span className='font-medium mr-2 text-gray-50'>{result.partyName}</span>  ({result.politiciansCount})
                        </div>
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
                <p className="font-normal text-xs text-gray-400 pl-5 leading-snug">Antallet af deltagende kandidater fra hvert parti er angivet i parentes. <br />Vi tager højde for eventuelle skævheder, der kan opstå på grund af forskellige antal deltagere fra partierne, ved at anvende en gennemsnitsberegning der sikrer en normalisering af resultaterne, så de retfærdigt afspejler overensstemmelsen.</p>
            </motion.div>
        </div>
    )
}    


