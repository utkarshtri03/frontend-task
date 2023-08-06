import React from "react";
import { data2 } from "./data";

const Table2 = () => {
  return (
    <div className="max-h-400px overflow-y-auto w-full">
      <table className="w-full table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 text-left">FIRST NAME</th>
            <th className="border border-slate-600 text-left">LAST NAME</th>
            <th className="border border-slate-600 text-left">Gender</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((val) => (
            <tr key={val.id}>
              <td className="border border-slate-700">{val.first_name}</td>
              <td className="border border-slate-700">{val.last_name}</td>
              <td className="border border-slate-700">{val.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
