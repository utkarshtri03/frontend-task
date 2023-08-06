import React from "react";
import QueriesHistory from "./QueriesHistory";
import SavedQueries from "./SavedQueries";

const LeftDash = () => {
  return (
    <div className="h-screen w-72 bg-slate-400">
      <QueriesHistory />
      <SavedQueries />
    </div>
  );
};

export default LeftDash;
