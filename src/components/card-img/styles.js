import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  max-width: 400px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
    max-width: 80%;
  }

  @media (max-width: ${SMALL}) {
  }
`;
