import axios from "axios";
import {
  FETCH_GOOGLE_SEARCH_STARTED,
  FETCH_GOOGLE_SEARCH_SUCCESS,
  FETCH_GOOGLE_SEARCH_FAILURE,
  CLEAN_BING_SEARCH
} from "../constants";

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_SEARCH_API_KEY;
const BASE_URL = process.env.REACT_APP_GOOGLE_SEARCH_BASE_URL;
const PROJECT_ENGINE = process.env.REACT_APP_GOOGLE_SEARCH_PROJECT_ENGINE;

export const fetchGoogleSearch = (search) => {
  return (dispatch) => {
    dispatch(fetchGoogleSearchStarted());
    dispatch(cleanBingSearch());
    
    const params = new URLSearchParams();
    params.append("key", GOOGLE_KEY);
    params.append("cx", PROJECT_ENGINE);
    params.append("q", search);
    return axios
      .get(`${BASE_URL}?${params}`)
      .then((res) => res.data)
      .then((data) => {
        const result = data.items.map(({ title, link, snippet }) => ({
          title: `${title} - GOOGLE`,
          link,
          snippet,
        }));
        dispatch(fetchGoogleSearchSuccess(result));
      })
      .catch((error) => dispatch(fetchGoogleSearchFailure(error)));
  };
};

export const fetchGoogleSearchStarted = () => {
  return {
    type: FETCH_GOOGLE_SEARCH_STARTED,
  };
};

export const fetchGoogleSearchSuccess = (data) => {
  return {
    type: FETCH_GOOGLE_SEARCH_SUCCESS,
    payload: data,
  };
};

export const fetchGoogleSearchFailure = (error) => {
  return {
    type: FETCH_GOOGLE_SEARCH_FAILURE,
    payload: { error },
  };
};

export const cleanBingSearch = () => {
  return {
    type: CLEAN_BING_SEARCH,
  };
};