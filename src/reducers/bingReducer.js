import {
  FETCH_BING_SEARCH_STARTED,
  FETCH_BING_SEARCH_SUCCESS,
  FETCH_BING_SEARCH_FAILURE,
  CLEAN_BING_SEARCH
} from "../constants";

const initialState = {
  searchData: [],
  loading: false,
  error: null
};

const bingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BING_SEARCH_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_BING_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchData: action.payload,
        error: null
      }; 
    case FETCH_BING_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        searchData: null,
        error: action.payload.error
      };
    case CLEAN_BING_SEARCH:
      return {
        ...state,
        searchData: [],
      };
    default:
      return state;
  }
};

export default bingReducer;