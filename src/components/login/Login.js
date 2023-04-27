import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import {
  StyledImg,
  StyledInformationContainer,
  StyledTitleDiv,
  StyledTitle,
  StyledP,
  StyledDivSecond,
  StyledFooterText,
  StyledHr,
  StyledButton,
} from "./styled";

import neutlan_extension_header from "../../assets/img/neutlan_extension_header.png";

const Login = () => {
  
  const signIn = () => {
    let token = generateToken(128);
    console.log("Token: ", token)
    localStorage.removeItem("extension-token");
    localStorage.setItem("extension-token", token);
    window.open("https://neutlan.com/sign-in?" + token);
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
/*
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
  */
  return (
    <Fragment>
      <StyledImg src={neutlan_extension_header}></StyledImg>
      <StyledInformationContainer>
        <StyledTitleDiv>
          <StyledTitle> Welcome to Neutlan</StyledTitle>
          <StyledP> We provide the evaluation of content in terms of gender-biased phrases. It checks the biased phrases and sentences in the content and demonstrates these found mistakes to the user. </StyledP>
        </StyledTitleDiv>
        <StyledDivSecond>
          <StyledButton onClick={signIn}> Sign In</StyledButton>
        </StyledDivSecond>
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

export default Login;
