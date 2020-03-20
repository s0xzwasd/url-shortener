import { combineReducers } from "redux";
import relinkReducer from "./relinkReducer";
import cleanuriReducer from "./cleanuriReducer";

const rootReducer = combineReducers({
  relink: relinkReducer,
  cleanuri: cleanuriReducer
});

export default rootReducer;
