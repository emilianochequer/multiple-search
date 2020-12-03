import React from "react";
import { render, screen } from "@testing-library/react";

import DropdownSearch from "./index";

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
      <DropdownSearch
        onChange={() => {}}
        searchTypesKeys={["GOOGLE", "BING", "BOTH"]}
        loading={false}
        searchType={"GOOGLE"}
      />
    );

    screen.debug();
  });
});
