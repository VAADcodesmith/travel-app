import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Map from "../src/components/Map.jsx";

describe("TESTING TESTING TESTING", () => {
  describe("renders map component", () => {
    // Wrap rendering and assertion logic inside a test function
    it("renders map component correctly", () => {
      render(
        <Router>
          <Map />
        </Router>
      );

      const mapElement = screen.getByText(/Let's track our travels!/i);
      expect(mapElement).toBeInTheDocument();
    });
  });
});
