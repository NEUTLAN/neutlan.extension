import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { IoNavigateOutline } from "react-icons/io5";
import { SlSettings } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";
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
  ColorPicker,
  StyledHr,
  ColorPickerLabel,
  ColorPickerInput

} from "./styled.js";

import neutlan_extension_header from "../../assets/img/neutlan_extension_header.png";

const Home = () => {
  console.log(localStorage.getItem('token'))

  const [isChecked, setIsChecked] = useState(true);
  const [color, setColor] = useState("#00ff00");
  const chrome = window.chrome;


  const handleCheckbox = (event) => {
    let token = localStorage.getItem("token");
    const check = !isChecked;
    setIsChecked(check);
    if (isChecked) {
      API.post('/extension/deactivate', token)
        .then((response) => {
          if (response.ok) {

            localStorage.setItem("activated", check);
            chrome.storage.local.set({ activated: check }, function () {
              console.log("Values saved", check);
            });
          } else {
            return response.json().then((data) => {
              //alert(data.error);
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      API.post('/extension/activate', token)
        .then((response) => {
          if (response.ok) {
            localStorage.setItem("activated", check);
            chrome.storage.local.set({ activated: check }, function () {
              console.log("Values saved", check);
            });

          } else {
            return response.json().then((data) => {
              //alert(data.error);
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

  };
  const selectColor = (event) => {

    if (chrome.storage) {
        chrome.storage.local.set({ color: event.target.value }, function () {
          console.log("Values saved", color);
        });
    } else {
        console.error("chrome.storage is not available");
    }    
    setColor(event.target.value);
    localStorage.setItem("color", event.target.value);
  }
  const goWebsite = () => {
    window.open("https://neutlan.com/");
  }

  const signOut = () => {
    localStorage.removeItem("extension-token");
    localStorage.removeItem("activated");
    localStorage.removeItem("token");

    window.location.reload()
    setIsChecked(false);
    chrome.storage.local.remove('activated', function () {
      console.log('Checked value deleted');
    });
    chrome.storage.local.remove('token', function () {
      console.log('Token value deleted');
    });


  }
  useEffect(() => {
    setColor(localStorage.getItem("color"))
    if (localStorage.getItem("activated") == "true") {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }

  }, []);

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
        <ColorPicker>
          <ColorPickerLabel for="colorpicker">Underline color picker</ColorPickerLabel>
          <ColorPickerInput type="color" id="colorpicker" value={color} onChange={selectColor}></ColorPickerInput>
        </ColorPicker>

        <StyledDivIcons>
          <IoNavigateOutline style={{ fontSize: "20px" }} />
          <StyledIconLabel onClick={goWebsite}>Go To Website</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <IoLogOutOutline style={{ fontSize: "20px" }} />
          <StyledIconLabel onClick={signOut}>Sign Out</StyledIconLabel>
        </StyledDivIcons>
        <div>
          <StyledHr />
          <StyledFooterText>
            Since Nov 5, 2022
          </StyledFooterText>
        </div>
      </StyledInformationContainer>
    </Fragment>
  );
};

export default Home;
