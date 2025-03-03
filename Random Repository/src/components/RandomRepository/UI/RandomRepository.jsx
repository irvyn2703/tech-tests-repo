import React from "react";

export default function RandomRepository({ select }) {
  return (
    <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
      {!select & (select !== "")
        ? "Please Select a language"
        : "Loading, please wait.."}
    </div>
  );
}
