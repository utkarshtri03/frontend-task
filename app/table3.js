import React from "react";
import { data1 } from "./data";

const Table3 = () => {
  return (
    <div className="max-h-400px overflow-y-auto w-full">
      <table className="w-full table-auto border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600 text-left">ID</th>
            <th className="border border-slate-600 text-left">FIRST NAME</th>
            <th className="border border-slate-600 text-left">Gender</th>
            <th className="border border-slate-600 text-left">PHONE NO.</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((val) => (
            <tr key={val.id}>
              <td className="border border-slate-700">{val.id}</td>
              <td className="border border-slate-700">{val.first_name}</td>
              <td className="border border-slate-700">{val.gender}</td>
              <td className="border border-slate-700">{val.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table3;
