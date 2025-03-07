import React from "react";
import useRandomRepository from "../../../hooks/useRandomRepository";

export default function RandomRepository({ select }) {
  const { isLoading, repository } = useRandomRepository({ select });

  console.log(repository);
  if (select && !isLoading && repository)
    return !repository.errors ? (
      <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
        Data
      </div>
    ) : (
      <>
        <div className="bg-red-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
          Error fetching repositories
        </div>
        <button className="bg-red-500 rounded-2xl text-white py-3 text-2xl cursor-pointer">
          Click to retry
        </button>
      </>
    );

  return (
    <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
      {!select & (select !== "")
        ? "Please Select a language"
        : "Loading, please wait.."}
    </div>
  );
}
