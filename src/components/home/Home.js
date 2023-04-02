import React, { useState, useEffect, Fragment } from "react";

import Switch from "@mui/material/Switch";
import { IoNavigateOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { TfiPowerOff } from "react-icons/tfi";

import {
  StyledImg,
  StyledInformationContainer,
  StyledDivFirst,
  StyledTextLabel,
  StyledSelect,
  StyledDivIcons,
  StyledIconLabel,
  StyledFooterText,
  StyledHr,
} from "./styled.js";

import neutlan_extension_header from "../../assets/img/neutlan_extension_header.png";

import Cookies from "js-cookie";

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    let token = localStorage.getItem("token");
    if (isChecked) {
      fetch("https://neutlan.com/api/user/deactivate", {
        method: "POST",
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsChecked(!isChecked);
            localStorage.setItem("activated", !isChecked);
          } else {
            return response.json().then((data) => {
              alert(data.error);
            });
          }
        })

        .catch((error) => {
          console.error("Error:", error);
        });
      setIsChecked(!isChecked);
    } else {
      fetch("https://neutlan.com/api/user/activate", {
        method: "POST",
        headers: {
          Authorization: "Token " + token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            setIsChecked(!isChecked);
            localStorage.setItem("activated", !isChecked);
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
  };

  useEffect(() => {
    let token = localStorage.getItem("token");

    fetch("https://neutlan.com/api/user/check_activation", {
      method: "POST",
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log("data ", data.activated);
            setIsChecked(data.activated);
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
  }, []);

  // const browser = "chrome";
  // let gettingItem = browser.storage.local.get();
  // console.log("berke");
  // console.log(gettingItem);

  // var createGuest = require("cross-domain-storage/guest");
  // var bazStorage = createGuest("http://localhost:3000/");
  // bazStorage.get("signedToken", function (error, value) {
  //   if (error) {
  //     alert(error);
  //     localStorage.setItem("ali", "olmadı");
  //   } else {
  //     localStorage.setItem("berke", value);
  //   }
  // });

  // localStorage.setItem("123", "olmadı");

  // console.log(Cookies.get("signedToken"));
  // console.log("dsdsa");

  return (
    <Fragment>
      <StyledImg src={neutlan_extension_header}></StyledImg>
      <StyledInformationContainer>
        <StyledDivFirst>
          <StyledTextLabel>
            Enable to check for writing suggestions on Google Chrome
          </StyledTextLabel>

          <Switch
            checked={isChecked}
            color="success"
            size="medium"
            onChange={handleCheckbox}
          />
        </StyledDivFirst>
        <StyledDivFirst>
          <StyledTextLabel>Written Language</StyledTextLabel>
          <StyledSelect>
            <option defaultChecked="1">English</option>
            <option value="2">Turkish</option>
          </StyledSelect>
        </StyledDivFirst>
        <StyledHr />
        <StyledDivIcons>
          <IoNavigateOutline style={{ fontSize: "20px" }} />
          <StyledIconLabel>Go To Website</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <SlSettings style={{ fontSize: "20px" }} />
          <StyledIconLabel>Settings</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <TfiPowerOff style={{ fontSize: "20px" }} />
          <StyledIconLabel>Sign Out</StyledIconLabel>
        </StyledDivIcons>
        <StyledHr />
        <StyledFooterText>
          Since Nov 5,2022
        </StyledFooterText>
      </StyledInformationContainer>
    </Fragment>
  );
};

export default Home;
