import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux-toolkit/userSlice";
import detailSlice from "./redux-toolkit/detailSlice";
import localSlice from "./redux-toolkit/localSlice";
import loginModalSlice from "./redux-toolkit/loginModalSlice";
import spinnerSlice from "./redux-toolkit/spinnerSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {
    userSlice,
    detailSlice,
    localSlice,
    loginModalSlice,
    spinnerSlice,
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
