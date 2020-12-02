import { combineReducers } from "redux";
import googleReducer from "./googleReducer";
import bingReducer from "./bingReducer"

export default combineReducers({
  googleReducer,
  bingReducer
});