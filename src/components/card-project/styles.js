import styled from "styled-components";
import { XLARGE, LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: dashed 1px red; */
  width: 370px;
  /* height: 385px; */
  height: auto;
  margin: 0 12px 24px;

  @media (max-width: ${XLARGE}) {
    width: 27.086vw;
  }

  @media (max-width: ${LARGE}) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
  }

  @media (max-width: ${MEDIUM}) {
    width: 47.5%;
    margin: 0 0 12px 0;
  }

  @media (max-width: ${SMALL}) {
    /* width: 100%; */
    flex-direction: column;
  }
`;

export const SectionTop = styled.div`
  img {
    width: 100%;
  }

  @media (max-width: ${LARGE}) {
    width: 50%;
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    width: 100%;
  }
`;

export const SectionBottom = styled.div`
  @media (max-width: ${LARGE}) {
    width: 50%;
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    width: auto;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: left;
  line-height: 32px;
  color: #1f2667;
  /* font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", */
  /* Times, */ /* serif; */

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    line-height: 22px;
    font-size: 16px;
  }
`;
