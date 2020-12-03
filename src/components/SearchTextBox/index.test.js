import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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
    const onChange = jest.fn();

    render(
      <SearchTextBox
        loading={false}
        search={"GOOGLE"}
        setSearch={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'BING' },
    });
 
    expect(onChange).toHaveBeenCalledTimes(1);
  });

});
