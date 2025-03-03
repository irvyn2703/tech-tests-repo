import React from "react";
import CardBusiness from "../business/CardBusiness";

export default function Card() {
  const { options } = CardBusiness();

  return (
    <main>
      <h1>GitHub Repository Finder</h1>
      <select aria-label="Select a language" defaultValue="no select">
        <option value="no select" disabled>
          Select a language
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      <div>Please Select a language</div>
    </main>
  );
}
