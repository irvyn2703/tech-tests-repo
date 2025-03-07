import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import languages from "../../../json/options.json";
import Card from "../UI/Card";
import successResponse from "../../../json/APIResponseMock.json";
import errorResponse from "../../../json/APIErrorResponseMock.json";

const mockSuccessResponse = successResponse;
const mockErrorResponse = errorResponse;

jest.mock("../../../services/GitRepositoryService", () => ({
  getRepository: jest.fn(() => Promise.resolve(mockErrorResponse)),
}));

describe("Card component", () => {
  test("First render component", () => {
    render(<Card />);

    const logo = screen.getByRole("img", { name: "logo" });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "https://github.com/irvyn2703.png");

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

  /*
  test("Should update the UI when select a language", () => {
    render(<Card />);

    const select = screen.getByRole("combobox", { name: "Select a language" });
    const defaultText = screen.getByText("Please Select a language");

    fireEvent.change(select, { target: { value: "no select" } });

    expect(defaultText).toBeInTheDocument();

    fireEvent.change(select, { target: { value: languages[0].value } });

    expect(select).toHaveValue(languages[0].value);

    expect(screen.queryByText("Please Select a language")).toBeNull();
  });
  */
});
