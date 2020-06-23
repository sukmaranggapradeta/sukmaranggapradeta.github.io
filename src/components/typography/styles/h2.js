import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const H2Style = styled.h2`
  /* font-size: 14px; */
  font-family: "Balsamiq Sans", cursive;
  font-weight: normal;
  /* letter-spacing: 2px; */
  letter-spacing: 0.2em;
  margin: inherit;

  @media (max-width: ${LARGE}) {
    /* font-size: 12px; */
  }

  @media (max-width: ${MEDIUM}) {
    /* font-size: 12px; */
  }

  @media (max-width: ${SMALL}) {
    /* font-size: 12px; */
  }
`;

export default H2Style;
