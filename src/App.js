import "./App.css";
import React, { useState, useEffect, Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import components
import Login from "./components/login/Login.js";
import Welcome from "./components/home/Welcome";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const userToken = localStorage.getItem("extesionSignIn");
    if (userToken) {
      fetch("https://neutlan.com/api/auth/sign_in_with_token", {
        method: "POST",
        body: JSON.stringify({
          token: userToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json().then((data) => {
              localStorage.removeItem("extesionSignIn");
              localStorage.setItem("token", data.token);
              setToken(data.token);
              localStorage.setItem(
                "extensionActivated",
                data.settings.extension_activated
              );
              console.log(
                "token",
                data.token,
                "activated",
                data.settings.extension_activated
              );
            });
          } else {
            return response.json().then((data) => {
              alert(data.error);
            });
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
            <Route path={"*"} element={<Login />} />
          ) : (
            <Route path="*" element={<Welcome />} />
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
