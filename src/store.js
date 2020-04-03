import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/rootReducer";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    return localStorage.setItem("state", serializedState);
  } catch {
    return undefined;
  }
};

const persistedState = loadState();

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

  store.subscribe(() => {
    saveState({
      app: store.getState().app,
      link: store.getState().link,
      value: store.getState().value,
      items: store.getState().items
    });
  });

  return store;
}
