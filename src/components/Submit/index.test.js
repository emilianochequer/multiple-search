import React from "react";
import { render, screen } from "@testing-library/react";

import Submit from "./index";

describe("Submit", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        };
      },
    });
  });

  afterEach(() => jest.resetAllMocks());

  test("renders Submit component", () => {
    render(
      <Submit />
    );

    expect(screen.getAllByText('Search')).toBeTruthy();
  });
});
