import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import todoReducer from "./store/todo/reducer";
import { Provider } from "react-redux";
const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
