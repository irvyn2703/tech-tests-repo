import React from "react";
import useRandomRepository from "../../../hooks/useRandomRepository";

export default function RandomRepository({ select }) {
  const { isLoading } = useRandomRepository({ select });

  if (select && !isLoading)
    return (
      <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
        Data
      </div>
    );

  return (
    <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
      {!select & (select !== "")
        ? "Please Select a language"
        : "Loading, please wait.."}
    </div>
  );
}
