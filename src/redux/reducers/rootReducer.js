import { combineReducers } from "redux";
import linkReducer from "./linkReducer";

const rootReducer = combineReducers({
  link: linkReducer
});

export default rootReducer;
