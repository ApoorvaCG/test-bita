import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { publicRoutes } from "./index";
import { AppRoute } from "../types";
import "@testing-library/jest-dom";

// helper to render the routes
const renderRoutes = (route: AppRoute) => {
  return render(
    <MemoryRouter initialEntries={[route.path]}>{route.element}</MemoryRouter>
  );
};

describe("Routing tests", () => {
  test("should render HomePage on '/' route", async () => {
    const homeRoute = publicRoutes.find((route) => route.path === "/");

    if (homeRoute) {
      renderRoutes(homeRoute);

      // Assert that the fallback is shown during loading
      expect(screen.getByText("Loading...")).toBeInTheDocument();

      await waitFor(() => screen.getByText("Welcome to BITA!")); // Assuming "Welcome to BITA!" is in your component
      expect(screen.getByText("Welcome to BITA!")).toBeInTheDocument();
    }
  });

});
