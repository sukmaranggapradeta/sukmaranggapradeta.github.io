import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const H2Style = styled.h2`
  /* font-family: "Balsamiq Sans", cursive; */
  font-weight: normal;
  letter-spacing: 0.2em;
  margin: inherit;
  text-align: left;
  /* color: #6a48cd; */
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  /* font-weight: 900; */

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
    font-size: 16px;
  }

  @media (max-width: ${SMALL}) {
    /* font-size: 14px; */
  }
`;

export default H2Style;
