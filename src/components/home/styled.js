import styled from "styled-components";

// 333366 fotoyla aynı renk
export const StyledImg = styled.img.attrs((input) => ({
  src: input.src,
}))`
  width: 400px;
  height: 80px;
`;

export const StyledInformationContainer = styled.div`
  width: 400px;
  height: 250px;
`;

export const StyledTitleDiv = styled.div`
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  font-weight: bold;
  text-align: center;
`;

export const StyledDivFirst = styled.div`
    align-items: center;
`;

export const StyledText= styled.h3`
  text-align: center;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  font-weight: bold;
`;

export const StyledHr = styled.hr`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 0.5px solid gray;
`;

export const StyledDivSecond = styled.div`
  justify-content: center;
  margin-bottom: 30px;
  margin-left: 10px;
  width: 400px;
  height: 60px;
  display: flex;
`;

export const StyledButton = styled.button`
  margin-top: 30px;
  width: 10em;
  height: 2.5em;
  background-color: #ff6699;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: white;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 0.5em;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  outline: none;
  transition: 0.2s all;
  :hover {
    border: 1px solid #0099cc;
    background-color: #00aacc;
    color: #ffffff;
  }
  :active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
`;

export const StyledFooterText = styled.label`
  width: 400px;
  font-size: 1em;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
`;
