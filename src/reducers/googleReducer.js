import {
  FETCH_GOOGLE_SEARCH_STARTED,
  FETCH_GOOGLE_SEARCH_SUCCESS,
  FETCH_GOOGLE_SEARCH_FAILURE,
  CLEAN_GOOGLE_SEARCH
} from "../constants";

const initialState = {
  searchData: [],
  loading: false,
  error: null
};

const googleReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_SEARCH_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_GOOGLE_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchData: action.payload,
        error: null
      }; 
    case FETCH_GOOGLE_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        searchData: null,
        error: action.payload.error
      };
    case CLEAN_GOOGLE_SEARCH:
      return {
        ...state,
        searchData: null,
      };
    default:
      return state;
  }
};

export default googleReducer;