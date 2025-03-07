import React from "react";
import useRandomRepository from "../../../hooks/useRandomRepository";

export default function RandomRepository({ select }) {
  const { isLoading, repository } = useRandomRepository({ select });

  console.log(repository);
  if (select && !isLoading && repository)
    return (
      <>
        <div
          className={`${
            !repository.error ? "bg-gray-300" : "bg-red-300"
          } min-h-40 rounded-2xl flex justify-center items-center text-2xl`}
        >
          {!repository.errors ? (
            <div>
              <h2>{repository.repositoryName}</h2>
              <p>{repository.description}</p>
              <div>
                <span>{repository.language}</span>
                <span>{repository.stars}</span>
                <span>{repository.forks}</span>
                <span>{repository.issues}</span>
              </div>
            </div>
          ) : (
            "Error fetching repositories"
          )}
        </div>
        <button
          className={`${
            !repository.error ? "bg-gray-900" : "bg-red-300"
          } rounded-2xl text-white py-3 text-2xl cursor-pointer`}
        >
          {!repository.errors ? "Refresh" : "Click to retry"}
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
