"use client";
import React from "react";
import Inputquery from "./inputquery";
import Table1 from "./table1";
import Table2 from "./table2";
import Table3 from "./table3";
import { useState } from "react";
import Message from "./message";

const Rightdash = () => {
  const [showTable1, setShowTable1] = useState(false);
  const [showTable2, setShowTable2] = useState(false);
  const [showTable3, setShowTable3] = useState(false);
  const [showInitialMessage, setShowInitialMessage] = useState(true);

  const handleRunQuery = (query) => {
    setShowInitialMessage(false);
    if (query.trim() === "select * from data") {
      setShowTable1(true);
      setShowTable2(false);
      setShowTable3(false);
    } else if (query.trim() === "select name,gender from data") {
      setShowTable1(false);
      setShowTable2(true);
      setShowTable3(false);
    } else if (query.trim() === "select id,phone from table") {
      setShowTable1(false);
      setShowTable2(false);
      setShowTable3(true);
    } else {
      setShowTable1(false);
      setShowTable2(false);
      setShowTable3(false);
    }
  };
  return (
    <div className="w-2/3 overflow-hidden h-screen flex flex-col space-y-5">
      <div className="h-1/2">
        <Inputquery handleRunQuery={handleRunQuery} />
      </div>
      <div className="h-1/2 w-full bg-red-50 flex flex-grow flex-col justify-center items-center">
        {showInitialMessage && <Message />}
        {showTable1 && <Table1 />}
        {showTable2 && <Table2 />}
        {showTable3 && <Table3 />}
      </div>
    </div>
  );
};
export default Rightdash;
