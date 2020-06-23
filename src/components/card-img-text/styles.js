import styled from "styled-components";
// import { theme } from "shared";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: solid 1px green; */

  display: flex;

  img {
    margin-right: 32px;
    width: 400px;
  }

  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
    flex-direction: column;

    img {
      margin-right: 0;
      width: 90%;
    }
  }
  @media (max-width: ${SMALL}) {
  }
`;

export const WrapperImg = styled.div`
  @media (max-width: ${MEDIUM}) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: ${SMALL}) {
  }
`;
