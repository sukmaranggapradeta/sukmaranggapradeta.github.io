import styled, { css } from "styled-components";
import theme from "global/theme";
// import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border-style: solid; */
  font-weight: 500;
  line-height: 45px;
  padding: 0 40px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  box-shadow: 0 10px 10px rgba(22, 43, 64, 0.12);

  ${props =>
    props.primary &&
    css`
      background-color: ${theme.bgColor.bgPrimary};
      color: ${theme.color.white};
      /* border: solid #d3d3d3; */

      :hover {
        background-color: #172c41;
      }
    `};

  ${props =>
    props.outline &&
    css`
      background-color: ${theme.bgColor.bgOutline};
      color: ${theme.color.purple};
      /* border: solid 1px ${theme.bgColor.bgOutline}; */

      :hover {
        background-color: #172c41;
      }
    `};
`;
