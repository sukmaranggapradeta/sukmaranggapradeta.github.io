import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const P1Style = styled.p`
  font-size: 12px;
  font-family: "Balsamiq Sans", cursive;
  font-weight: normal;
  letter-spacing: 2px;

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

export default P1Style;
