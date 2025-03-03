import React from "react";
import CardBusiness from "../business/CardBusiness";

export default function Card() {
  const { options } = CardBusiness();

  return (
    <main className="w-9/10 m-auto pt-3 grid gap-5">
      <header
        className="
            flex items-center gap-3 flex-col
            sm:flex-row
        "
      >
        <img
          src="https://github.com/irvyn2703.png"
          alt="logo"
          className="
            size-20 rounded-full overflow-hidden
        "
        />
        <h1 className="grow text-2xl text-center ">GitHub Repository Finder</h1>
      </header>
      <select
        aria-label="Select a language"
        defaultValue="no select"
        name="Select a language"
        className="w-full p-3 border-2 rounded-2xl bg-gray-200"
      >
        <option value="no select" disabled>
          Select a language
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      <div className="bg-gray-300 min-h-40 rounded-2xl flex justify-center items-center text-2xl">
        Please Select a language
      </div>
    </main>
  );
}
