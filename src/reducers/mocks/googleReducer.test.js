import reducer from "../googleReducer";
import {
  FETCH_GOOGLE_SEARCH_STARTED,
  FETCH_GOOGLE_SEARCH_SUCCESS,
  FETCH_GOOGLE_SEARCH_FAILURE,
  CLEAN_BING_SEARCH,
} from "../../constants";

describe("google reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      searchData: [],
      loading: false,
      error: null,
    });
  });

  it("should handle FETCH_GOOGLE_SEARCH_STARTED", () => {
    expect(
      reducer([], {
        type: FETCH_GOOGLE_SEARCH_STARTED,
      })
    ).toEqual({
      loading: true,
    });

    expect(
      reducer([], {
        type: FETCH_GOOGLE_SEARCH_SUCCESS,
      })
    ).toEqual({
      loading: false,
      searchData: undefined,
      error: null,
    });

  });
});
