import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const TitleLinkStyle = styled.h4`
  /* font-family: "Balsamiq Sans"; */
  display: inline-block;
  text-decoration: none;
  color: #1f2667;
  margin: 0px;
  margin-bottom: 12px;

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
  }
`;

export default TitleLinkStyle;
