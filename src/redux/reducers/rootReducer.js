import { combineReducers } from "redux";
import appReducer from "./appReducer";
import linkReducer from "./linkReducer";
import inputReducer from "./inputReducer";

const rootReducer = combineReducers({
  app: appReducer,
  link: linkReducer,
  value: inputReducer
});

export default rootReducer;
