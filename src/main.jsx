import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "./redux/store.js";

import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <ToastContainer autoClose={1000} theme="colored" />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
