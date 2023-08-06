"use client";
import React from "react";
import { useQueryContext } from "./Context";
import { useState } from "react";

const SavedQueries = () => {
  const { queriesAvailable, setSelectedQuery } = useQueryContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  // Filter the queriesAvailable based on the searchTerm
  const filteredQueries = queriesAvailable.filter((query) =>
    query.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="h-1/2 bg-red-300 rounded-2xl">
      <p>Saved Queries</p>
      <input
        placeholder="Search...."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <ul>
        {filteredQueries.map((val) => {
          return <li onClick={() => handleQueryClick(val)}>{val}</li>;
        })}
      </ul>
    </div>
  );
};

export default SavedQueries;
