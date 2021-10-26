import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

/*
COLOR PALLETTE
- #563091 (VIOLETS)
- #7C3EDE
- #7DDE33 (GREEN)
- #911322 (REDS)
-#DE283E
*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
