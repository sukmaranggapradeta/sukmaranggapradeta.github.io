import styled from "styled-components";
import theme from "global/theme";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  /* border: solid blue 3px; */
  /* background-color: #0080ea; */
  background-color: ${theme.color.purple};
  height: 5vh;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  /* border: dashed red 1px; */
  width: 30%;

  @media (max-width: ${MEDIUM}) {
    padding-left: 16px;
  }
  @media (max-width: ${SMALL}) {
  }
`;

export const MenuHeader = styled.div`
  /* border: dashed red 1px; */
  width: 50%;
  /* justify-content: space-around; */
  /* display: flex; */

  /* h3 {
    cursor: pointer;
  } */

  /* NAVIGATION */
  nav {
    /* width: 80%; */
    /* margin: 0 auto; */
    /* background: #fff; */
    /* padding: 50px 0; */
    /* box-shadow: 0px 5px 0px #dedede; */
  }
  nav ul {
    list-style: none;
    text-align: center;
    margin: 0;
  }
  nav ul li {
    display: inline-block;
  }
  nav ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #f1f1f1;
    /* font-weight: 800; */
    text-transform: uppercase;
    margin: 0 10px;
  }
  nav ul li a,
  nav ul li a:after,
  nav ul li a:before {
    transition: all 0.5s;
  }
  nav ul li a:hover {
    color: #555;
  }

  /* SHIFT */
  nav.shift ul li a {
    position: relative;
    z-index: 1;
  }
  nav.shift ul li a:hover {
    color: #91640f;
  }
  nav.shift ul li a:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 1px;
    content: ".";
    color: transparent;
    background: #f1c40f;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }
  nav.shift ul li a:hover:after {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }

  /* ACTICE */
  nav li > .active {
    /* display: block; */
    /* position: absolute; */
    margin: auto;
    height: 100%;
    /* content: "."; */
    /* color: transparent; */
    background: #f1c40f;
    /* visibility: visible; */
    color: #91640f;
  }

  @media (max-width: ${LARGE}) {
    width: auto;
  }

  @media (max-width: ${MEDIUM}) {
    display: none;
  }
  @media (max-width: ${SMALL}) {
  }
`;
