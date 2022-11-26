import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css/animate.min.css";
import App from "./App";

// redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducerFunc from "./Redux/reducers";

import "./translations/i18n.js";

const store = createStore(reducerFunc);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
