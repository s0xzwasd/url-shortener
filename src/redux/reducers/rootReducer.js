import { combineReducers } from "redux";
import linkReducer from "./linkReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  link: linkReducer,
  value: inputReducer
});

export default rootReducer;
