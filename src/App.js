import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { API } from "./api-service";

// import components
import Login from "./components/login/Login.js";
import Home from "./components/home/Home.js";

function App() {
  const [token, setToken] = useState("");
  const chrome = window.chrome;

  useEffect(() => {
    const userToken = localStorage.getItem("extension-token");
    if (userToken) {
      API.post('/user/auth/sign_in_with_token', null, { 'token': userToken })
        .then(async (response) => {
          if (response.ok) {
            response.json().then(data => {
              localStorage.removeItem("extension-token");
              localStorage.setItem("token", data.token);
              chrome.storage.local.set({ token: data.token, activated: data.settings.extension_activated }, function () {
              });
              setToken(data.token);
              localStorage.setItem("activated", data.settings.extension_activated);
            })
          } else {
            const data_1 = await response.json();
            console.warning("Not authenticated, please sign in")
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
          {localStorage.getItem("token")?.length > 10 ? (
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
