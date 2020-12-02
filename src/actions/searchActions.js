import { fetchGoogleSearch } from "./googleActions";
import { fetchBingSearch } from "./bingActions";

export const fetchSearch = (searchType, search) => {
  return (dispatch) => {
    switch (searchType) {
      case "GOOGLE":
        dispatch(fetchGoogleSearch(search));
        break;
      case "BING":
        dispatch(fetchBingSearch(search));
        break;
      case "BOTH":
        Promise.all([
          dispatch(fetchGoogleSearch(search)),
          dispatch(fetchBingSearch(search)),
        ]);
        break;
      default:
        return "Well, you hit the default... :(";
    }
  };
};
