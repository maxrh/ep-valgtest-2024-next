"use client"

import { createContext, useState, useEffect } from 'react'

export const VoteContext = createContext()

const partiInfo = {
	'ALT':'Alternativet',
	'DF':'Dansk Folkeparti',
	'DD':'Danmarksdemokraterne',
	'KF':'Det Konservative Folkeparti',
	'EL':'Enhedslisten',
	'M':'Moderaterne',
	'LA':'Liberal Alliance',
	'RV':'Radikale Venstre',
	'SF':'SF',
	'S':'Socialdemokratiet',
	'V':'Venstre'
};

const VoteContextProvider = ({ children }) => {
    const [voteData, setVoteData] = useState([]);
    const [politicianData, setPoliticianData] = useState([]);  
    const [matchResults, setMatchResults] = useState([]);
    const [partyMatchResults, setPartyMatchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/politicians');  
            if (response.ok) {
                const jsonResponse = await response.json();
                setPoliticianData(jsonResponse.data);  // Adjusted to access data property
            } else {
                console.error("Failed to fetch data:", response.statusText);
            }
        };
    
        fetchData();
    }, []);


    const calculateMatches = () => {
        const partyResults = {};
    
        const individualResults = politicianData.map(politician => {
            const { votes } = politician;
            let matchCount = 0;
            let validQuestions = 0;
    
            votes.forEach((vote, index) => {
                if (vote !== null && voteData[index] !== undefined) {  // Ensure the vote is valid and user has voted
                    validQuestions++;
                    if (vote === voteData[index].vote) {
                        matchCount++;
                    }
                }
            });
    
            const matchPercentage = validQuestions > 0 ? Math.round((matchCount / validQuestions) * 100) : 0;
    
            // Collect data for party results
            if (!partyResults[politician.parti]) {
                partyResults[politician.parti] = { totalMatchPercentage: 0, politicians: 0 };
            }
            partyResults[politician.parti].totalMatchPercentage += matchPercentage;
            partyResults[politician.parti].politicians++;
    
            return {
                id: politician.id,
                name: politician.navn,
                img: politician.img,
                party: politician.parti,
                spidskandidat: politician.spidskandidat,
                comment: politician.comment,
                matchPercentage
            };
        });
    
        // Calculate party match percentages
        const partyMatchResults = Object.entries(partyResults).map(([parti, data]) => {
            const averageMatchPercentage = data.politicians > 0 ? Math.round(data.totalMatchPercentage / data.politicians) : 0;
            return {
                parti,
                partiNavn: partiInfo[parti] || parti, // Use party info or default to party code
                matchPercentage: averageMatchPercentage,
                politiciansCount: data.politicians
            };
        });
    
        setMatchResults(individualResults);
        setPartyMatchResults(partyMatchResults);
    
        return individualResults;
    };
    

    const addVote = (questionId, vote) => {
        const newVote = { questionId, vote };
        const updatedVotes = [...voteData, newVote];
        setVoteData(updatedVotes);

        // Check if this was the last vote, then calculate matches
        if (updatedVotes.length === 21 ) { // Define TOTAL_QUESTIONS appropriately
            const results = calculateMatches(updatedVotes.map(v => v.vote)); // Assumes voteData is an array of { questionId, vote }
            setMatchResults(results);
        }
    };

    const clearVotes = () => {
        setVoteData([]);
        setMatchResults([]);
    };

    return (
        <VoteContext.Provider value={{ voteData, addVote, clearVotes, matchResults, partyMatchResults }}>
                {children}
        </VoteContext.Provider>
    )
}

export default VoteContextProvider