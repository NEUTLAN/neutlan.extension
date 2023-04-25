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

  const [isChecked, setIsChecked] = useState(true);
  const chrome = window.chrome;


  const handleCheckbox = (event) => {
    let token = localStorage.getItem("token");
    const check = !isChecked;
    setIsChecked(check);   
    if (isChecked) {
      API.post('/user/deactivate', token)
      .then((response) => {
        if (response.ok) {    
          
          localStorage.setItem("activated",check);
          chrome.storage.local.set({activated: check}, function() {
            console.log("Values saved",check);
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
          localStorage.setItem("activated", check);
          chrome.storage.local.set({activated: check}, function() {
            console.log("Values saved",check);
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

  const goWebsite = () => {
    window.open("https://neutlan.com/");
  }

  const signOut = () => {
    localStorage.removeItem("extension-token");
    localStorage.removeItem("activated");
    localStorage.removeItem("token");

    window.location.reload()
    setIsChecked(false);
    chrome.storage.local.remove('activated', function() {
      console.log('Checked value deleted');
    });
    chrome.storage.local.remove('token', function() {
      console.log('Token value deleted');
    });


  }
  useEffect(() => { 
    
    if(localStorage.getItem("activated") == "true"){
      setIsChecked(true)
    }else{
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
