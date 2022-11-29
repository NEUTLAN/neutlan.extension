import "./App.css";
import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import constant routers with url
import ROUTERS from "./components/constants/routeConstans";

// import components
import Login from "./components/login/Login.js";

function App() {
  return (
    <div>
      <Login />;
    </div>
  );
}

export default App;

// "chrome_url_overrides": {
//   "newtab": "index.html"
// }
