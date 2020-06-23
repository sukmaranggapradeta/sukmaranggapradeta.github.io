import styled, { css } from "styled-components";
// import { theme } from "shared";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: solid 1px green; */
  display: flex;

  img {
    margin-right:32px;
    width: 400px;
  }

  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
      img {
        margin-right: 0;
        margin-left: 32px;
      }
    `}

  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
    flex-direction: column;
    margin-bottom: 32px;

    img {
      margin-right: 0;
      margin-left:0;
      width: 90%;
      height: 90%;
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
