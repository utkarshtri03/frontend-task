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
    <div className="h-1/2 bg-blue-400 rounded-2xl">
      <div className="relative top-5 left-7">
        <p className="mb-2">Saved Queries</p>
        <input
          className="rounded-lg w-4/5 h-8"
          placeholder="Search...."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <ul>
          {filteredQueries.map((val) => {
            return (
              <li>
                <button
                  className="bg-white rounded-lg w-4/5 h-8 mt-2 flex items-center pl-2"
                  onClick={() => handleQueryClick(val)}
                >
                  {val}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SavedQueries;
