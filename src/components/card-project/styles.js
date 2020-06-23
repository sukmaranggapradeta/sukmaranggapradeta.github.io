import styled from "styled-components";
// import { theme } from "shared";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  border: solid 1px red;
  width: 32%;
  height: 385px;

  img {
    width: 100%;
  }

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
  }
`;
