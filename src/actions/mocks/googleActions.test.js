import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { fetchGoogleSearch } from "../googleActions";
import {
  FETCH_GOOGLE_SEARCH_STARTED,
  FETCH_GOOGLE_SEARCH_SUCCESS,
  FETCH_GOOGLE_SEARCH_FAILURE,
  CLEAN_BING_SEARCH,
} from "../../constants";
import axios from "axios";
import expect from "expect"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);



describe("async actions", () => {
  it("creates FETCH_GOOGLE_SEARCH_SUCCESS when fetching fetchGoogleSearch has been done", () => {
    const expectedActions = [
      { type: FETCH_GOOGLE_SEARCH_STARTED },
      { type: CLEAN_BING_SEARCH },
    ];
    const store = mockStore({ searchData: [], loading: false, error: null });

    store.dispatch(fetchGoogleSearch("dogs"))

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
