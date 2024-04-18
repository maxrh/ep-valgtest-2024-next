"use client"

import { createContext, useState, useEffect } from 'react'

export const VoteContext = createContext()

const VoteContextProvider = ({ children }) => {
    const [voteData, setVoteData] = useState([]);

    console.log(voteData);

    const addVote = (questionId, vote) => {
        const newVote = { questionId, vote };
        setVoteData([...voteData, newVote]);
    };

    const clearVotes = () => {
        setVoteData([]); // Reset the vote data array
    };

    return (
        <VoteContext.Provider value={{ voteData, addVote, clearVotes }}>
                {children}
        </VoteContext.Provider>
    )
}

export default VoteContextProvider