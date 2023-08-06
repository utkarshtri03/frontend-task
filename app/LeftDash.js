import React from "react";
import QueriesHistory from "./QueriesHistory";
import SavedQueries from "./SavedQueries";

const LeftDash = () => {
  return (
    <div className="h-screen w-1/4 flex flex-col space-y-6">
      <QueriesHistory />
      <SavedQueries />
    </div>
  );
};

export default LeftDash;
