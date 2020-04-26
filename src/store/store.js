import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "./localStorage";

const persistedState = loadState();

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

  store.subscribe(() => {
    saveState({
      app: store.getState().app,
      link: store.getState().link,
      handleValue: store.getState().handleValue,
      shortenedItems: store.getState().shortenedItems,
    });
  });

  return store;
}
