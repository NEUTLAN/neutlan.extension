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
  height: 450px;
`;

export const StyledDivFirst = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 10px;
  max-width: 400px;
  max-height: 60px;
  display: flex;
`;

export const StyledTextLabel = styled.label`
  width: 300px;
  margin-right: 20px;
  font-size: 1em;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  font-weight: bold;
  display: flex;
  float: left;
`;

export const StyledSelect = styled.select`
  width: 150px;
  height: 35px;
  background: white;
  color: gray;
  font-size: 1em;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  font-weight: bold;
  border: 2px solid gray;
  border-radius: 10px;
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
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 10px;
  max-width: 400px;
  max-height: 300px;
  display: flex;
`;

export const StyledIconLabel = styled.label`
  height: 50px;
  margin-left: 15px;
  margin-right: 20px;
  font-size: 1em;
  font-family: "Century Gothic", Verdana, sans-serif;
  color: black;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  :hover {
    text-decoration: underline;
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

export const StyledHr = styled.hr`
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0.5px solid gray;
`;
