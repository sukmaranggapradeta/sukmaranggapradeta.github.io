import styled from "styled-components";
import theme from "global/theme";

export const Wrapper = styled.div`
  /* border: solid blue 3px; */
  /* background-color: #0080ea; */
  background-color: ${theme.color.purple};
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  /* border: dashed red 1px; */
  width: 30%;
`;

export const MenuHeader = styled.div`
  /* border: dashed red 1px; */
  width: 50%;
  justify-content: space-around;
  display: flex;
`;
