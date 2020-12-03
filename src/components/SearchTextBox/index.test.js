import React from "react";
import { render, screen } from "@testing-library/react";

import SearchTextBox from "./index";

describe("App", () => {
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

  test("renders App component", () => {
    render(
      <SearchTextBox
        loading={false}
        search={""}
        setSearch={() => {}}
      />
    );

    screen.debug();
  });
});
