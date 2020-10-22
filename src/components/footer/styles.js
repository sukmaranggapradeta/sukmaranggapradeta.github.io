import styled from "styled-components";
import { XLARGE, LARGE, MEDIUM, SMALL } from "global/media-query";
import theme from "global/theme";

export const Wrapper = styled.div`
  height: 25vh;
  bottom: 0;
  width: 100%;
  display: flex;
  border-top: 1px solid #dfe1e6;

  .footer-left {
    width: 30%;
  }

  .footer-right {
    width: 70%;
  }

  .section-part-footer {
    @media (max-width: ${MEDIUM}) {
      flex-wrap: wrap;
    }
  }

  .curve-background {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background: linear-gradient(
      45deg,
      ${theme.color.two} 0%,
      ${theme.color.one} 80%
    );
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -15vh;
    transition: all 1s ease-in-out;
    animation: morph 8s ease-in-out infinite;
  }

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  @media (max-width: ${XLARGE}) {
    .curve-background {
      width: 17.361vw;
      height: 17.361vw;
    }
  }
  @media (max-width: ${LARGE}) {
    height: 20vh;

    .curve-background {
      margin-top: -10vh;
    }
  }
  @media (max-width: ${MEDIUM}) {
    height: auto;
  }
  @media (max-width: ${SMALL}) {
    flex-direction: column;

    .footer-left {
      width: 100%;
    }

    .footer-right {
      width: 100%;
    }

    .curve-background {
      margin-top: -4vh;
    }
  }
`;

export const FooterSection = styled.div`
  width: 20%;
  padding: 0 0.5%;

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
  .footer-icon path {
    /* stroke: #1f2667; */
    /* stroke-width: 10px; */
  }

  @media (max-width: ${XLARGE}) {
    .footer-icon {
      width: 3.472vw;
      margin: 0 12px 4px 0pc;
    }
  }
  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
  }
  @media (max-width: ${SMALL}) {
    width: 49%;
    margin-right: 0px;

    .footer-icon {
      width: 25px;
      margin: 0 12px 4px 0pc;
    }

    div {
      padding: 0px 16px;
    }
  }
`;

export const FooterLinktSection = styled.div`
  @media (max-width: ${XLARGE}) {
  }
  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
  }
  @media (max-width: ${SMALL}) {
    text-align: center;
  }
`;

export const CopyRightSection = styled.div`
  @media (max-width: ${XLARGE}) {
  }
  @media (max-width: ${LARGE}) {
  }
  @media (max-width: ${MEDIUM}) {
  }
  @media (max-width: ${SMALL}) {
    text-align: center;
  }
`;

export const MenuTitle = styled.div`
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 1.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;

  @media (max-width: ${MEDIUM}) {
  }
  @media (max-width: ${SMALL}) {
  }
`;
