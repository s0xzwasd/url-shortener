import { combineReducers } from "redux";

import appReducer from "./appReducer";
import linkReducer from "./linkReducer";
import inputReducer from "./inputReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  link: linkReducer,
  handleValue: inputReducer,
  shortenedItems: itemsReducer
});

export default rootReducer;
