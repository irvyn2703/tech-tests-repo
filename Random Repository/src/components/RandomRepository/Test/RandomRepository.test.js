import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RandomRepository from "../UI/RandomRepository";
import options from "../../../json/options.json";

describe("RandomRepository component", () => {
  test("Should show 'Please Select a language' when no language is selected", () => {
    render(<RandomRepository />);

    const text = screen.getByText("Please Select a language");
    expect(text).toBeInTheDocument();
  });

  test("Should show 'Loading, please wait..' when language is selected", () => {
    render(<RandomRepository select={options[2].value} />);

    const loadingText = screen.getByText("Loading, please wait..");
    expect(loadingText).toBeInTheDocument();
  });

  test("Should not show 'Loading, please wait..' when load the repository", async () => {
    render(<RandomRepository select={options[2].value} />);

    const loadingText = screen.queryByText("Loading, please wait..");
    expect(loadingText).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText("Please Select a language")).toBeNull()
    );
  });

  test("Should show 'Error fetching repositories' when there is an error", async () => {
    render(<RandomRepository select="" />);

    await waitFor(() => {
      expect(
        screen.getByText("Error fetching repositories").toBeInTheDocument()
      );
      expect(
        screen.getByRole("button", { name: "Click to retry" })
      ).toBeInTheDocument();
    });
  });

  test("Should display repository information ehwn data is available", async () => {
    render(<RandomRepository select={options[2].value} />);

    await waitFor(() => {
      const repoTitle = screen.getByRole("heading", { level: 2 });
      expect(repoTitle).toBeInTheDocument();

      const repoDescription = screen.getByText(
        (_, element) => element.tagName.toLowerCase() === "p"
      );
      expect(repoDescription).toBeInTheDocument();

      const repoDetails = screen.getAllByText(
        (_, element) => element.tagName.toLowerCase() === "span"
      );
      expect(repoDetails.length).toBeGreaterThanOrEqual(3);

      const refreshButton = screen.getByRole("button", { name: "Refresh" });
      expect(refreshButton).toBeInTheDocument();
    });
  });
});
