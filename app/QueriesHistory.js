"use client";
import React from "react";
import { useQueryContext } from "./Context";
import { useState } from "react";

const QueriesHistory = () => {
  const { queriesHistory, setSelectedQuery } = useQueryContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleQueryClick = (query) => {
    setSelectedQuery(query);
  };

  const filteredQueries = queriesHistory.filter((query) =>
    query.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="h-1/2 bg-zinc-300 rounded-2xl">
      <div className="relative top-5 left-7">
        <p className="mb-2 text-blue-700">Queries History</p>
        <input
          className="rounded-lg w-4/5 h-8"
          placeholder="Search...."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <ul>
          {filteredQueries.map((val, i) => {
            return (
              <li key={i}>
                <button
                  className="bg-white rounded-lg w-4/5 h-full mt-2 flex items-center pl-2"
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

export default QueriesHistory;
