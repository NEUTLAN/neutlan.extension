import styled from "styled-components";
import style from "../styled";

export const StyledImg = styled.img.attrs((input) => ({
  src: input.src,
}))`
  width: ${style.width};
  height: ${style.height_header};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 2%;
`;

export const StyledTitleDiv = styled.div`
  align-items: center;
`;
export const StyledDivFirst = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  max-width: ${style.width};
  max-height: 35px;
  display: flex;
`;
export const StyledTitle = styled.h2`
  font-family: ${style.font_family};
  font-size: ${style.font_size_welcome};
  color: ${style.font_color};
  text-align: center;
`;

export const StyledHr = styled.hr`
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0.3px solid gray;
`;

export const StyledDivSecond = styled.div`
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 10px;
  width: ${style.width};
  height: 20px;
  display: flex;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
  width: 6em;
  height: 2em;
  background-color: #ff6699;
  font-family: ${style.font_family};
  color: white;
  font-size: 14px;
  border: 1px solid palevioletred;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;
export const StyledTextLabel = styled.label`
  width: 250px;
  margin-right: 20px;
  font-size: ${style.font_size};
  font-family: ${style.font_family};
  color: #000;
  color: black;
  display: flex;
  float: left;
`;

export const StyledSelect = styled.select`
  width: 150px;
  height: 25px;
  margin-right: 10px;
  background: white;
  color: gray;
  font-size: ${style.font_size};
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;

  border: 0.5px solid gray;
  border-radius: 5px;
  text-align: center;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const StyledDivIcons = styled.div`
  max-width: ${style.width};
  max-height: 50px;
  justify-content: flex-start;
  display: flex;
`;

export const StyledIconLabel = styled.label`
  font-size: ${style.font_size};
  font-family: ${style.font_family};
  color: black;
  align-items: center;
  font-weight: bold;
  padding-left: 5%;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const StyledInformationContainer = styled.div`
  width: ${style.width};
  height: ${style.height_info};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`;

export const StyledFooterText = styled.label`
width: ${style.width};
font-size: ${style.font_size};
font-family: ${style.font_family};
color: ${style.font_color};
display: flex;
align-items: center;
text-align: center;
margin-top: 10px;
margin-left: 10px;
`;



export const StyledWelcomeFirst = styled.div`
`;

export const StyledDivWelcomeSecond = styled.div`
`;

