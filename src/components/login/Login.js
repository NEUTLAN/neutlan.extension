import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import ROUTERS from "../constants/routeConstans";
import Switch from "@mui/material/Switch";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

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
} from "./styled";
import "animate.css";
import neutlan_extension_header from "../../assets/img/neutlan_extension_header.png";

const Login = () => {
  return (
    <Fragment>
      <StyledImg src={neutlan_extension_header}></StyledImg>
      <StyledInformationContainer>
        <StyledDivFirst>
          <StyledTextLabel>
            Enable to check for writing suggestions on Google Chrome
          </StyledTextLabel>
          <Switch defaultChecked color="success" size="medium" />
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
          <AiFillHome style={{ fontSize: "50px" }} />
          <StyledIconLabel>Neutlan Home</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <AiFillFileAdd style={{ fontSize: "50px" }} />
          <StyledIconLabel>New Document</StyledIconLabel>
        </StyledDivIcons>
        <StyledDivIcons>
          <IoSettingsSharp style={{ fontSize: "50px" }} />
          <StyledIconLabel>Settings</StyledIconLabel>
        </StyledDivIcons>
        <StyledHr />
        <StyledFooterText>
          Neutlan has been correcting your sexist text since November 5,2022
        </StyledFooterText>
      </StyledInformationContainer>
    </Fragment>
  );
};

export default Login;
