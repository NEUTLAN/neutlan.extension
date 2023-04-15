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

export const StyledInformationContainer = styled.div`
  width: ${style.width};
  height: ${style.height_info};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;
`;

export const StyledTitleDiv = styled.div`
  align-items: center;
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
  background: linear-gradient(120deg,#333363,#7878a8);
  font-family: ${style.font_family};
  color: white;
  font-size: 14px;
  border: 0 ;
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  :hover{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    /* Lowering the shadow */
  }
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
