import styled from "styled-components";
import { XLARGE, LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: dashed 1px red; */
  width: 370px;
  /* height: 385px; */
  height: auto;
  margin: 0 12px 24px;

  @media (max-width: ${XLARGE}) {
    width: 27.086vw;
  }

  @media (max-width: ${LARGE}) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
  }

  @media (max-width: ${MEDIUM}) {
    width: 47.5%;
    margin: 0 0 12px 0;
  }

  @media (max-width: ${SMALL}) {
    /* width: 100%; */
    flex-direction: column;
    min-height: 125px;
  }
`;

export const SectionTop = styled.div`
  img {
    width: 100%;
  }

  @media (max-width: ${LARGE}) {
    width: 50%;
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    width: 100%;
  }
`;

export const SectionBottom = styled.div`
  .tags {
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .tags li {
    float: left;
  }

  .tag {
    font-size: 10px;
    background: #eee;
    border-radius: 3px 0 0 3px;
    color: #999;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    padding: 0 16px 0 16px;
    position: relative;
    margin: 0 10px 10px 0;
    text-decoration: none;
    -webkit-transition: color 0.2s;
  }

  .tag::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: "";
    height: 6px;
    left: 5px;
    position: absolute;
    width: 6px;
    top: 7px;
  }

  .tag::after {
    background: #fff;
    border-bottom: 8px solid transparent;
    border-left: 10px solid #eee;
    border-top: 13px solid transparent;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
  }

  .tag:hover {
    background-color: crimson;
    color: white;
  }

  .tag:hover::after {
    border-left-color: crimson;
  }
  @media (max-width: ${LARGE}) {
    width: 50%;
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    width: auto;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  text-align: left;
  line-height: 32px;
  color: #1f2667;
  /* font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", */
  /* Times, */ /* serif; */

  @media (max-width: ${LARGE}) {
  }

  @media (max-width: ${MEDIUM}) {
  }

  @media (max-width: ${SMALL}) {
    line-height: 22px;
    font-size: 16px;
  }
`;
