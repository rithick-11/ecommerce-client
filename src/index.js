import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import UserAuthenticationContextProvider from "./context/UserAuthenticationContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/ecommerce-client">
      <UserAuthenticationContextProvider>
        <App />
      </UserAuthenticationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
