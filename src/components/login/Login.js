import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import {
  StyledImg,
  StyledInformationContainer,
  StyledTitleDiv,
  StyledTitle,
  StyledDivSecond,
  StyledFooterText,
  StyledHr,
  StyledButton,
} from "./styled";

import neutlan_extension_header from "../../assets/img/neutlan_extension_header.png";

const Login = () => {
  const navigate = useNavigate();
  
  const signIn = () => {
    let token = generateToken(128);
    localStorage.setItem("extension-token", token);
    window.open(
      "https://neutlan.com/sign-in?" + token,
      "_blank",
      "noopener,noreferrer"
    );
  };

  function generateToken(n) {
    var chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var token = "";
    for (var i = 0; i < n; i++) {
      token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
  }

  return (
    <Fragment>
      <StyledImg src={neutlan_extension_header}></StyledImg>
      <StyledInformationContainer>
        <StyledTitleDiv>
          <StyledTitle> Welcome to Neutlan</StyledTitle>
        </StyledTitleDiv>
        <StyledDivSecond>
          <StyledButton onClick={signIn}> Sign In</StyledButton>
        </StyledDivSecond>
        <StyledHr />
        <StyledFooterText>
        Since Nov 5,2022
        </StyledFooterText>
      </StyledInformationContainer>
    </Fragment>
  );
};

export default Login;
