import React from "react";
import App from "../../app/App";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";

describe("App", () => {
    it("render App component", () => {
        render(<App/>);
        expect(screen.getByText("RSS")).toBeInTheDocument();
        expect(screen.getByText("Find")).toBeInTheDocument();
        expect(screen.getByTestId("input")).toBeInTheDocument();
    });
});