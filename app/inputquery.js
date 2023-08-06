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
    <div className="bg-red-300 h-full flex flex-col space-y-4">
      <div className="relative h-full flex justify-center top-8">
        <textarea
          className="h-2/3 w-11/12 bg-white caret-red caret-blink p-2 border border-gray-300 rounded focus:outline-none"
          value={selectedQuery || inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex space-x-6 relative bottom-6 left-10 ">
        <Button handleClick={handleRun} name="Run Query" />
        <Button handleClick={handleSave} name="Save Query" />
        <Button handleClick={handleClear} name="Clear Query" />
      </div>
    </div>
  );
};

export default Inputquery;
