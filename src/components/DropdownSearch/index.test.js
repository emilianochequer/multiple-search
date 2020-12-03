import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DropdownSearch from "./index";

jest.mock("antd", () => {
  const antd = jest.requireActual("antd");

  const Select = ({ children, onChange }) => {
    return (
      <select onChange={(e) => onChange(e.target.value)}>{children}</select>
    );
  };

  Select.Option = ({ children, ...otherProps }) => {
    return <option {...otherProps}>{children}</option>;
  };

  return {
    ...antd,
    Select,
  };
});

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

  test("renders DropdownSearch component", async () => {
    const onChange = jest.fn();

    const { getByRole, getAllByRole } = render(
      <DropdownSearch
        onChange={onChange}
        searchTypesKeys={["GOOGLE", "BING", "BOTH"]}
        loading={false}
        searchType={"GOOGLE"}
      />
    );

    const controlElement = getByRole("combobox");

    fireEvent.click(controlElement);

    const menuOptions = getAllByRole("option");

    expect(menuOptions).toHaveLength(3);
  });
});
