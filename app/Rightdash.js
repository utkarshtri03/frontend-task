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
    if (query.trim() === "utkarsh") {
      setShowTable1(true);
      setShowTable2(false);
      setShowTable3(false);
    } else if (query.trim() === "tripathi") {
      setShowTable1(false);
      setShowTable2(true);
      setShowTable3(false);
    } else if (query.trim() === "vishnu") {
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
    <div>
      <div>
        <Inputquery handleRunQuery={handleRunQuery} />
      </div>
      <div>
        {showInitialMessage && <Message />}
        {showTable1 && <Table1 />}
        {showTable2 && <Table2 />}
        {showTable3 && <Table3 />}
      </div>
    </div>
  );
};
export default Rightdash;
