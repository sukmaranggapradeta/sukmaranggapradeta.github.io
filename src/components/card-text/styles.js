import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  padding: 0 64px;

  @media (max-width: ${LARGE}) {
    padding: 0 32px;
  }
  @media (max-width: ${MEDIUM}) {
    padding: 0 16px;
  }
  @media (max-width: ${SMALL}) {
  }
`;
