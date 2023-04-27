import styled from "styled-components";
import style from "../styled";

export const StyledImg = styled.img.attrs((input) => ({
  src: input.src,
}))`
  width: ${style.width};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 2%;
`;

export const StyledTitleDiv = styled.div`
  align-items: center;
`;
export const StyledDivFirst = styled.div`
  margin-top: 20px;
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
  width: 80%;
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
  height: 20px;
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


  justify-content: flex-start;
  display: flex;
  color:black;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  padding: 2%;
  align-items: center;
  width: 92%;
  height: 14%;
  border-radius: 4px;
  margin-left: 2%;
  :hover {
    background: linear-gradient(to right, #333363, #505099cc, #303066);
    color: white;
    box-shadow: -5px 6px 6px rgba(0,0,0,0.3);
  }
`;

export const StyledIconLabel = styled.label`
  font-size: ${style.font_size};
  font-family: ${style.font_family};
  align-items: center;
  font-weight: 500;
  padding-left: 5%;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
`;

export const StyledInformationContainer = styled.div`
  width: ${style.width};
  height: ${style.height_info};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const StyledFooterText = styled.label`
width: ${style.width};
width: 100%;
justify-content: space-around;
font-size: ${style.font_size};
font-family: ${style.font_family};
color: ${style.font_color};
display: flex;
align-items: center;
text-align: center;
margin-top: 10px;
`;



export const StyledWelcomeFirst = styled.div`
`;

export const StyledDivWelcomeSecond = styled.div`
`;

export const ColorPicker = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 10px;
margin-right: 10px;
`;
export const ColorPickerLabel = styled.label`
  align-items: center;
  font-size: 12px;
  font-size: 12px;
    font-family: 'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Helvetica Neue',sans-serif,Arial;
`;
export const ColorPickerInput = styled.input`
  align-items: center;
  border-radius: 4px;
    border-width: 0px;
    border-style: solid;
    border-color: buttonborder;
    border-image: initial;
    box-shadow: 0 2px 5px rgba(0,0,0,0.3);
`;