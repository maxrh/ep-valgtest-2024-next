"use client"

import { createContext, useState, useEffect } from 'react'

export const VoteContext = createContext()

const VoteContextProvider = ({ children }) => {
    const [voteData, setVoteData] = useState([]);
    const [politicianData, setPoliticianData] = useState([]);  // State to store fetched data
    const [matchResults, setMatchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/politikerstemmer');  
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
    
        return results;
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
        <VoteContext.Provider value={{ voteData, addVote, clearVotes, matchResults }}>
                {children}
        </VoteContext.Provider>
    )
}

export default VoteContextProvider