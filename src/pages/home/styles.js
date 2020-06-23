import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: solid black 3px; */
  /* background-color: #f5f6f7; */
  /* min-height: 70vh; */

  @media (max-width: ${LARGE}) {
    min-height: 75vh;
  }
  @media (max-width: ${MEDIUM}) {
    min-height: auto;
  }
  @media (max-width: ${SMALL}) {
  }
`;
