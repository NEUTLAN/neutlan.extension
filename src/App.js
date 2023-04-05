import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { API } from "./api-service";

// import components
import Login from "./components/login/Login.js";
import Home from "./components/home/Home.js";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const userToken = localStorage.getItem("extension-token");
    
    if (userToken) {
      console.log('userToken ', userToken);
      API.post('auth/sign_in_with_token', null, {'token': userToken})
      .then( async (response) => {
        if (response.ok) {
          response.json().then( data => {
            localStorage.removeItem("extension-token");
            localStorage.setItem("token", data.token);
            setToken(data.token);
            localStorage.setItem("extensionActivated", data.settings.extension_activated);
            console.log("token: ", data.token)
          })
        } else {
          const data_1 = await response.json();
          alert(data_1.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  }, [token]);
  
  return (
    <Fragment>
      <Router>
        {/* A <Routes> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route path={ROUTERS.WELCOME} element={<Welcome />} /> */}
          {localStorage.getItem("token")?.length > 0 ? (
            <Route path={"*"} element={<Home />} />
          ) : (
            <Route path="*" element={<Login />} />
          )}

          <Route render={() => <h1>404 Page not found</h1>} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
export const token = localStorage.getItem("token");
export const activated = localStorage.getItem("extensionActivated");
