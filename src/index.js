import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./style.css";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <App />
    </Router>
  </>
);
