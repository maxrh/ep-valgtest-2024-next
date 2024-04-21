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

    // Set results to local storage, so they persist on page reload
    useEffect(() => {
        if ( matchResults.length === 0 || partyMatchResults.length === 0 ) return;
        localStorage.setItem('matchResults', JSON.stringify(matchResults));
        localStorage.setItem('partyMatchResults', JSON.stringify(partyMatchResults));
    }, [matchResults, partyMatchResults]);

    useEffect(() => {
        const storedMatchResults = localStorage.getItem('matchResults');
        const storedPartyMatchResults = localStorage.getItem('partyMatchResults');
        if (storedMatchResults && storedPartyMatchResults) {
            setMatchResults(JSON.parse(storedMatchResults));
            setPartyMatchResults(JSON.parse(storedPartyMatchResults));
        }
    }, []);

    const calculatePoliticianMatches = () => {
        const results = politicianData.map(politician => {
            const { votes } = politician;  // Directly access the votes array from each politician object
            let matchCount = 0;
            let validQuestions = 0;
    
            votes.forEach((vote, index) => {
                if (vote !== 0.5 && voteData[index]) {  // Ensure to check that the user vote exists
                    validQuestions++;
                    if (vote === voteData[index].vote) {  // Compare against the vote part of userVotes entries
                        matchCount++;
                    }
                }
            });
    
            const matchPercentage = Math.round((matchCount / validQuestions) * 100);  // Calculate and round the match percentage
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
    
        setMatchResults(results);
        calculatePartyMatches(results);  // Pass the results to the party match calculation function
    };

    const calculatePartyMatches = (results) => {
        const partyResults = {};

        results.forEach(result => {
            const { party, matchPercentage } = result;
            if (!partyResults[party]) {
                partyResults[party] = { totalMatchPercentage: 0, politicians: 0 };
            }
            partyResults[party].totalMatchPercentage += matchPercentage;
            partyResults[party].politicians++;
        });

        const calculatedPartyMatchResults = Object.entries(partyResults).map(([party, data]) => {
            const averageMatchPercentage = data.politicians > 0 ? Math.round(data.totalMatchPercentage / data.politicians) : 0;
            return {
                party,
                partyName: partiInfo[party],
                matchPercentage: averageMatchPercentage,
                politiciansCount: data.politicians
            };
        });
        setPartyMatchResults(calculatedPartyMatchResults);
    };
    

    const addVote = (questionId, vote) => {
        const newVote = { questionId, vote };
        const updatedVotes = [...voteData, newVote];
        setVoteData(updatedVotes);

        // Check if this was the last vote, then calculate matches
       if (updatedVotes.length === 21) {
            calculatePoliticianMatches();
        }
    };

    const clearVotes = () => {
        setVoteData([]);
        setMatchResults([]);
        setPartyMatchResults([]);
        localStorage.removeItem('matchResults');
        localStorage.removeItem('partyMatchResults');
    };

    return (
        <VoteContext.Provider value={{ voteData, addVote, clearVotes, matchResults, partyMatchResults }}>
                {children}
        </VoteContext.Provider>
    )
}

export default VoteContextProvider