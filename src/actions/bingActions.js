import axios from "axios";
import {
  FETCH_BING_SEARCH_STARTED,
  FETCH_BING_SEARCH_SUCCESS,
  FETCH_BING_SEARCH_FAILURE,
  CLEAN_GOOGLE_SEARCH,
} from "../constants";

const BING_KEY = process.env.REACT_APP_BING_SEARCH_API_KEY;
const BASE_URL = process.env.REACT_APP_BING_SEARCH_BASE_URL;

export const fetchBingSearch = (search) => {
  return async (dispatch) => {
    dispatch(fetchBingSearchStarted());
    dispatch(cleanGoogleSearch());
    const myHeaders = new Headers();
    myHeaders.append("Ocp-Apim-Subscription-Key", BING_KEY);
    const params = {
      q: search,
      safeSearch: "Strict",
      license: "Public",
    };
    const urlParams = new URLSearchParams(Object.entries(params)); // entries works in Chrome
    const url = `${BASE_URL}?${urlParams.toString()}`;
    const res = await fetch(url, {
      method: "GET",
      headers: myHeaders,
    });
    const data = await res.json();
    const result = data?.webPages?.value?.map(({ name, url, snippet }) => ({
      title: `${name} - BING`,
      link: url,
      snippet,
    }));
    dispatch(fetchBingSearchSuccess(result));
  };
};

export const fetchBingSearchStarted = () => {
  return {
    type: FETCH_BING_SEARCH_STARTED,
  };
};

export const fetchBingSearchSuccess = (data) => {
  return {
    type: FETCH_BING_SEARCH_SUCCESS,
    payload: data,
  };
};

export const fetchBingSearchFailure = (error) => {
  return {
    type: FETCH_BING_SEARCH_FAILURE,
    payload: { error },
  };
};

export const cleanGoogleSearch = () => {
  return {
    type: CLEAN_GOOGLE_SEARCH,
  };
};
