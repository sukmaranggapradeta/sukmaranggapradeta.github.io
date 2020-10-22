import styled from "styled-components";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

const TitleLinkStyle = styled.div`
  /* font-family: "Balsamiq Sans"; */
  display: inline-block;
  text-decoration: none;
  color: #1f2667;
  margin: 0px;
  margin-bottom: 12px;
  /* margin-block-start: 1.33em; */
  /* margin-block-end: 1.33em; */
  /* margin-inline-start: 0px; */
  /* margin-inline-end: 0px; */
  font-weight: bold;

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
  }
`;

export default TitleLinkStyle;
