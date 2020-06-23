import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const TitleLinkStyle = styled.h4`
  /* font-size: 12px; */
  font-family: "Balsamiq Sans";
  display: inline-block;
  text-decoration: none;
  color: #1f2667;
  /* font-weight: 600; */
  margin: 0px;
  margin-bottom: 12px;
  /* letter-spacing: 0.2em; */

  @media (max-width: ${LARGE}) {
    /* font-size: 12px; */
  }

  @media (max-width: ${MEDIUM}) {
    /* font-size: 12px; */
  }

  @media (max-width: ${SMALL}) {
    /* font-size: 12px; */
  }
`;

export default TitleLinkStyle;
