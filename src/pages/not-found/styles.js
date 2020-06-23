import styled from "styled-components";
import { MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  h2 {
    margin: 32px 0;
  }

  img {
    width: 300px;
  }

  @media (max-width: ${MEDIUM}) {
    img {
      width: 50%;
    }
  }
  @media (max-width: ${SMALL}) {
    h2 {
      margin: 16px 0;
    }
  }
`;
