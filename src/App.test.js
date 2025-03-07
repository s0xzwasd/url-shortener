import React from "react";
import { render } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "./store/store";

import App from "./App";

test("renders learn react link", () => {
  render(
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
});
