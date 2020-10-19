import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";
import theme from "global/theme";

export const Wrapper = styled.div`
  .footer-icon {
    width: 45px;
    margin: 0 12px 4px 0pc;
    cursor: pointer;
  }

  .footer-icon g {
    fill: ${theme.color.purple};
    :hover {
      fill: #545860;
    }
  }

  img {
    width: 240px;
    height: 240px;
  }

  @media (max-width: ${LARGE}) {
    /* min-height: 75vh; */
  }
  @media (max-width: ${MEDIUM}) {
  }
  @media (max-width: ${SMALL}) {
    img {
      width: 200px;
      height: 200px;
    }
  }
`;
