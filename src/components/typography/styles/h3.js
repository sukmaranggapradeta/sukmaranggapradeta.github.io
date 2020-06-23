import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const H3Style = styled.h3`
  font-size: 14px;
  font-family: "Balsamiq Sans", cursive;
  font-weight: normal;
  /* letter-spacing: 2px; */
  letter-spacing: 0.2em;

  @media (max-width: ${LARGE}) {
    font-size: 12px;
  }

  @media (max-width: ${MEDIUM}) {
    font-size: 12px;
  }

  @media (max-width: ${SMALL}) {
    font-size: 12px;
  }
`;

export default H3Style;
