import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

import Switch from "@mui/material/Switch";
import { IoNavigateOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { TfiPowerOff } from "react-icons/tfi";

import { API } from "../../api-service";

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

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const chrome = window.chrome;
  const handleCheckbox = (event) => {
    let token = localStorage.getItem("token");
    if (isChecked) {
      API.post('/user/deactivate', token)
      .then((response) => {
        if (response.ok) {
          setIsChecked(!isChecked);
          localStorage.setItem("activated", !isChecked);
          chrome.storage.local.set({activated: !isChecked}, function() {
            console.log("Values saved");
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
    } else {
      API.post('/user/activate', token)
      .then((response) => {
        if (response.ok) {
          setIsChecked(!isChecked);
          localStorage.setItem("activated", !isChecked);
          chrome.storage.local.set({activated: !isChecked}, function() {
            console.log("Values saved");
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
  };

  const goWebsite = () => {
    window.open("https://neutlan.com/");
  }

  const signOut = () => {
    localStorage.removeItem("extension-token");
    localStorage.removeItem("extensionActivated");
    localStorage.removeItem("token");
    navigate('');
  }

  useEffect(() => {
    let token = localStorage.getItem("token");

    API.post('/user/check_activation', token)
    .then( async (response) => {
      if (response.ok) {
        const data = await response.json();
        console.log("data ", data.activated);
        setIsChecked(data.activated);
      } else {
        const data_1 = await response.json();
        alert(data_1.error);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, []);

  useEffect( () => {

  }, [isChecked]);

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
          <StyledIconLabel onClick={goWebsite}>Go To Website</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <SlSettings style={{ fontSize: "20px" }} />
          <StyledIconLabel>Settings</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <TfiPowerOff style={{ fontSize: "20px" }} />
          <StyledIconLabel onClick={signOut}>Sign Out</StyledIconLabel>
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
