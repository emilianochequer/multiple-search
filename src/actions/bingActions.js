import axios from "axios";
import {
  FETCH_BING_SEARCH_STARTED,
  FETCH_BING_SEARCH_SUCCESS,
  FETCH_BING_SEARCH_FAILURE,
  CLEAN_GOOGLE_SEARCH
} from "../constants";

// const BING_KEY = process.env.REACT_APP_BING_SEARCH_API_KEY;
// const BASE_URL = process.env.REACT_APP_BING_SEARCH_BASE_URL;

const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_SEARCH_API_KEY;
const BASE_URL = process.env.REACT_APP_GOOGLE_SEARCH_BASE_URL;
const PROJECT_ENGINE = process.env.REACT_APP_GOOGLE_SEARCH_PROJECT_ENGINE;

export const fetchBingSearch = (search) => {
  return (dispatch) => {
    dispatch(fetchBingSearchStarted());
    dispatch(cleanGoogleSearch())
    // const params = new URLSearchParams();
    // params.append('q', search);
    //  axios
    //   .get(`${BASE_URL}?${params}`, {
    //     headers: {
    //       'Ocp-Apim-Subscription-Key': BING_KEY,
    //     },
    //   })
    //   .then((res) => res.data)

    const params = new URLSearchParams();
    params.append("key", GOOGLE_KEY);
    params.append("cx", PROJECT_ENGINE);
    params.append("q", 'gato');
    axios
      .get(`${BASE_URL}?${params}`)
      .then((res) => res.data)
      .then((data) => {
        const result = data.items.map(({ title, link, snippet }) => ({
          title: `${title} - BING`,
          link,
          snippet,
        }));
        dispatch(fetchBingSearchSuccess(result));
      })
      .catch((error) => dispatch(fetchBingSearchFailure(error)));


    // axios.get(`https://api.duckduckgo.com/?q=${search}&format=json`)
    // .then((res) => res.data)
    //   .then((data) => {
    //     // const result = data?.webPages?.value?.map(({ name, url, snippet }) => ({
    //     //   title: name,
    //     //   link: url,
    //     //   snippet,
    //     // }));

    //     const result = data.Results;
    //     dispatch(fetchBingSearchSuccess(result));
    //   })
    //   .catch((error) => dispatch(fetchBingSearchFailure(error)));
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