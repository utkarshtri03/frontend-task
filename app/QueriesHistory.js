'use client'
import React from 'react'
import Searchbar from './Searchbar'
import { useQueryContext } from './Context';
import { useState } from 'react';

const QueriesHistory = () => {
  const {queriesHistory,setSelectedQuery} = useQueryContext();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  // Filter the queriesAvailable based on the searchTerm
  const filteredQueries = queriesHistory.filter((query) =>
    query.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='h-1/2 bg-slate-700'>
        <p>Queries History</p>
        <input placeholder='Search....' value={searchTerm} onChange={handleSearchInputChange}/>
        <ul>
          {filteredQueries.map((val) => {
            return <li onClick={() => handleQueryClick(val)}>{val}</li>;
          })}
        </ul>
        
    </div>
  )
}

export default QueriesHistory