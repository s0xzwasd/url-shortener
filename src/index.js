import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./App";

ReactDOM.render(
  <Provider store={configureStore()}>
    <ToastContainer transition={Slide} />
    <App />
  </Provider>,
  document.getElementById("root")
);
