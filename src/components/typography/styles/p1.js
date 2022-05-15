import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const P1Style = styled.p`
  /* font-family: "Balsamiq Sans", cursive; */
  font-weight: normal;
  letter-spacing: 2px;
  margin: 8px 0 16px;

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    font-size: 14px;
  }
`;

export default P1Style;
