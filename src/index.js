import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BrandContextProvider from "./components/BrandContext";

//router

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrandContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </BrandContextProvider>
);
