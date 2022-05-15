import styled, { css } from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";
import theme from "global/theme";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 32px;
    width: 400px;
    border-radius: 8px;
  }

  ${(props) =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
      img {
        margin-right: 0;
        margin-left: 32px;
      }
    `}

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

  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
    flex-direction: column;
    margin-bottom: 24px;
    align-items: center;

    img {
      margin-right: 0;
      margin-left: 0;
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
    margin-bottom: 16px;
  }
  @media (max-width: ${SMALL}) {
  }
`;
export const Content = styled.div`
  display:flex;
  align-items:center;
  flex-direction:column;
`
