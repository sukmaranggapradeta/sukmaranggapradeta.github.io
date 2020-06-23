import styled from "styled-components";
// import theme from "global/theme";
import { XLARGE, LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  height: 25vh;
  /* position: absolute; */
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
    background: linear-gradient(45deg, #e27fcb 0%, #5d6bf8 100%);
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
  /* border: dashed red 1px; */
  width: 20%;
  /* margin-right: 32px; */
  padding: 0 0.5%;

  .footer-icon {
    width: 45px;
    margin: 0 12px 4px 0pc;
    cursor: pointer;
  }

  .footer-icon g {
    fill: #7569de;
    :hover {
      fill: #172c41;
    }
  }
  .footer-icon path {
    /* stroke: #1f2667; */
    /* stroke-width: 10px; */
  }

  @media (max-width: ${XLARGE}) {
    /* width: 20%; */
    /* margin-right: 16px; */
    /* padding: 0 0.5%; */

    .footer-icon {
      width: 3.472vw;
      margin: 0 12px 4px 0pc;
    }
  }
  @media (max-width: ${LARGE}) {
    /* width: 15%; */
    /* margin-right: 16px; */
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
