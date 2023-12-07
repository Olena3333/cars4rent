import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import store from "./redux/store";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}

    <BrowserRouter>
      <App />
      <ToastContainer autoClose={1000} theme="colored" />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);
