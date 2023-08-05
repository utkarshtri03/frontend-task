import React from "react";
import { data1 } from "./data";

const Table1 = () => {
  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
      <table className="border-collapse border border-slate-500">
        <thead>
          <tr>
            <th className="border border-slate-600">ID</th>
            <th className="border border-slate-600">FIRST NAME</th>
            <th className="border border-slate-600">LAST NAME</th>
            <th className="border border-slate-600">EMAIL</th>
            <th className="border border-slate-600">PHONE NO.</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((val) => (
            <tr key={val.id}>
              <td className="border border-slate-700">{val.id}</td>
              <td className="border border-slate-700">{val.first_name}</td>
              <td className="border border-slate-700">{val.last_name}</td>
              <td className="border border-slate-700">{val.email}</td>
              <td className="border border-slate-700">{val.Phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
