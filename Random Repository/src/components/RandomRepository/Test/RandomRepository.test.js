import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RandomRepository from "../UI/RandomRepository";
import options from "../../../json/options.json";
import GitRepositoryService from "../../../services/GitRepositoryService";
import successResponse from "../../../json/APIResponseMock.json";
import errorResponse from "../../../json/APIErrorResponseMock.json";

jest.mock("../../../services/GitRepositoryService");

describe("RandomRepository component", () => {
  test("Should show 'Please Select a language' when no language is selected", () => {
    render(<RandomRepository />);

    const text = screen.getByText("Please Select a language");
    expect(text).toBeInTheDocument();
  });

  test("Should show 'Loading, please wait..' when language is selected", async () => {
    GitRepositoryService.getRepository.mockResolvedValue(successResponse);
    render(<RandomRepository select={options[2].value} />);

    await waitFor(() => {
      const loadingText = screen.getByText("Loading, please wait..");
      expect(loadingText).toBeInTheDocument();
    });
  });

  test("Should not show 'Loading, please wait..' when repository loads", async () => {
    render(<RandomRepository select={options[2].value} />);

    expect(screen.getByText("Loading, please wait..")).toBeInTheDocument();

    await waitFor(() =>
      expect(screen.queryByText("Please Select a language")).toBeNull()
    );
  });

  test("Should display repository information when data is available", async () => {
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
      expect(repoDetails.length).toBeGreaterThanOrEqual(4);

      const refreshButton = screen.getByRole("button", { name: "Refresh" });
      expect(refreshButton).toBeInTheDocument();
    });
  });

  test("Should show 'Error fetching repositories' when there is an error", async () => {
    GitRepositoryService.getRepository.mockResolvedValue(errorResponse);

    render(<RandomRepository select={options[2].value} />);

    await waitFor(() => {
      expect(
        screen.getByText("Error fetching repositories")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Click to retry" })
      ).toBeInTheDocument();
    });
  });

  test("Should show 'Error fetching repositories' when the response contains no items", async () => {
    GitRepositoryService.getRepository.mockResolvedValue({ items: [] });

    render(<RandomRepository select={options[2].value} />);

    await waitFor(() => {
      expect(
        screen.getByText("Error fetching repositories")
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "Click to retry" })
      ).toBeInTheDocument();
    });
  });
});
