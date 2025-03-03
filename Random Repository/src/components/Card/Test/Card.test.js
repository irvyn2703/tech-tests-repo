import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import languages from "../../../json/options.json";
import Card from "../UI/Card";

describe("Card component", () => {
  test("First render component", () => {
    render(<Card />);

    const title = screen.getByRole("heading", {
      name: "GitHub Repository Finder",
    });
    expect(title).toBeInTheDocument();

    const select = screen.getByRole("combobox", { name: "Select a language" });
    expect(select).toBeInTheDocument();

    let renderedOptions = screen.getAllByRole("option").map((opt) => ({
      title: opt.textContent,
      value: opt.value,
    }));
    renderedOptions = renderedOptions.filter(
      (option) => option.value !== "no select"
    );

    expect(renderedOptions).toEqual(languages);

    const defaultText = screen.getByText("Please Select a language");
    expect(defaultText).toBeInTheDocument();
  });
});
