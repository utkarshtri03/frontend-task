"use client";
import React from "react";
import Button from "./button";
import { useQueryContext } from "./Context";

const Inputquery = ({ handleRunQuery }) => {
  const {
    inputValue,
    setInputValue,
    setQueriesAvailable,
    setQueriesHistory,
    selectedQuery,
    setSelectedQuery,
  } = useQueryContext();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedQuery(event.target.value);
  };

  const handleRun = () => {
    const queryToRun = selectedQuery || inputValue.trim();
    if (queryToRun !== "") {
      setQueriesHistory((oldVal) => {
        return [...oldVal, queryToRun];
      });
      handleRunQuery(queryToRun);
    }
  };

  const handleSave = () => {
    const queryToSave = selectedQuery || inputValue.trim();
    if (queryToSave !== "") {
      setQueriesAvailable((oldValue) => {
        return [...oldValue, queryToSave];
      });
    }
  };

  const handleClear = () => {
    setInputValue("");
    setSelectedQuery("");
  };
  return (
    <div className="w-2/3 bg-red-300 ml-5 my-4">
      <div className="relative">
        <textarea
          className="h-80 w-11/12 bg-slate-400 caret-red caret-blink p-2 border border-gray-300 rounded focus:outline-none"
          value={selectedQuery || inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex space-x-6">
        <Button handleClick={handleRun} name="Run Query" />
        <Button handleClick={handleSave} name="Save Query" />
        <Button handleClick={handleClear} name="Clear Query" />
      </div>
    </div>
  );
};

export default Inputquery;
