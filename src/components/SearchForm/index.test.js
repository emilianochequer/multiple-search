import React from "react";
import { render, screen } from "@testing-library/react";

import SearchForm from "./index";

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
      <SearchForm
        handleSubmit={() => {}}
        handleEnter={() => {}}
        loading={false}
        search={""}
        setSearch={() => {}}
        handleDropdown={() => {}}
        searchType={"GOOGLE"}
        searchTypesKeys={["GOOGLE", "BING", "BOTH"]}
      />
    );

    screen.debug();
  });
});
