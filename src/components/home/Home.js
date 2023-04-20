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
  console.log(localStorage.getItem('token'))
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const chrome = window.chrome;

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    chrome.storage.local.set({activated:isChecked}, function() {
      console.log("Values saved");
    });
    localStorage.setItem("activated",isChecked);
  };
   /*
  const handleCheckbox = (event) => {
    localStorage.setItem("activated",isChecked);
    chrome.storage.local.set({activated:isChecked}, function() {
      console.log("Values saved");
    });

 
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
            //alert(data.error);
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
            //alert(data.error);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
  
  };
  */
  const goWebsite = () => {
    window.open("https://neutlan.com/");
  }

  const signOut = () => {
    localStorage.removeItem("extension-token");
    localStorage.removeItem("extensionActivated");
    localStorage.removeItem("token");

    window.location.reload()

    chrome.storage.local.remove('activated', function() {
      console.log('Checked value deleted');
    });
    chrome.storage.local.remove('token', function() {
      console.log('Token value deleted');
    });


  }

  useEffect(() => {
    setIsChecked(localStorage.getItem("activated"));
  }, []);
/*
  useEffect( () => {
    localStorage.setItem("activated", isChecked);
  }, [isChecked]);
*/
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
        <StyledDivIcons>
          <IoNavigateOutline style={{ fontSize: "20px" }} />
          <StyledIconLabel onClick={goWebsite}>Go To Website</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <TfiPowerOff style={{ fontSize: "20px" }} />
          <StyledIconLabel onClick={signOut}>Sign Out</StyledIconLabel>
        </StyledDivIcons>
        <div>
        <StyledHr />
        <StyledFooterText>
          Since Nov 5,2022
        </StyledFooterText>
        </div>
      </StyledInformationContainer>
    </Fragment>
  );
};

export default Home;
