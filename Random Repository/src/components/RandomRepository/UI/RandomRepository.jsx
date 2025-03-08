import React from "react";
import useRandomRepository from "../../../hooks/useRandomRepository";
import StarIcon from "../../../icons/StarIcon";
import ForkIcon from "../../../icons/ForkIcon";
import IsuuIcon from "../../../icons/IssuIcon";
import RandomRepositoryBusiness from "../business/RandomRepositoryBusiness";
import GitRepository from "../../../domain/GitRepository";

export default function RandomRepository({ select }) {
  const { isLoading, repository } = useRandomRepository({ select });
  const { handleClickRepository } = RandomRepositoryBusiness();

  console.log(repository);
  if (select && !isLoading && repository)
    return (
      <>
        <div
          className={`${
            repository instanceof GitRepository ? "bg-gray-200" : "bg-red-300"
          } min-h-40 rounded-2xl flex justify-center items-center text-2xl`}
        >
          {repository instanceof GitRepository ? (
            <div
              className="w-full p-4 grid gap-3"
              onClick={() => {
                handleClickRepository({ url: repository.url });
              }}
            >
              <h2>{repository.repositoryName}</h2>
              <p className="opacity-35">{repository.description}</p>
              <ul className="w-full flex gap-3 justify-between opacity-50 flex-wrap">
                <li>
                  <span>{repository.language}</span>
                </li>
                <li className="flex gap-2">
                  <StarIcon />
                  <span>{repository.stars}</span>
                </li>
                <li className="flex gap-2">
                  <ForkIcon />
                  <span>{repository.forks}</span>
                </li>
                <li className="flex gap-2">
                  <IsuuIcon />
                  <span>{repository.issues}</span>
                </li>
              </ul>
            </div>
          ) : (
            "Error fetching repositories"
          )}
        </div>
        <button
          className={`${
            repository instanceof GitRepository ? "bg-gray-900" : "bg-red-300"
          } rounded-2xl text-white py-3 text-2xl cursor-pointer`}
        >
          {repository instanceof GitRepository ? "Refresh" : "Click to retry"}
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
