import styled from "styled-components";
import theme from "global/theme";
import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const Wrapper = styled.div`
  background-color: ${theme.color.purple};
  /* height: 5vh; */
  height: 48px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  width: 30%;

  @media (max-width: ${MEDIUM}) {
    padding-left: 0;
  }
  @media (max-width: ${SMALL}) {
    width: 50%;
  }
`;

export const MenuHeader = styled.div`
  width: 50%;
  /* NAVIGATION */
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
    margin: auto;
    height: 100%;
    background: #f1c40f;
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

export const MenuSideBar = styled.div`
  display: none;

  input {
    position: fixed;
    opacity: 0;
  }

  label {
    position: absolute;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
  label::before {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(10, 38, 57, 0.75);
    content: "";
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  label .burger {
    position: absolute;
    top: 0.7em;
    right: 1em;
    z-index: 3;
    width: 2em;
    height: 1.5em;
    margin: 0;
    padding: 0;
    transition: opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  label .burger::before,
  label .burger .bar,
  label .burger::after {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 12%;
    background: white;
    content: "";
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  label .burger .bar {
    top: 45%;
  }
  label .burger::before {
    top: 0;
    transform-origin: top left;
  }
  label .burger::after {
    bottom: 0;
    transform-origin: top left;
  }

  input:focus + label .burger,
  label:hover .burger {
    opacity: 0.75;
  }

  nav {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    transform: translate3d(0, 0, 0);
    /* material acceleration */
    transform: translateX(200%);
    will-change: transform;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  nav::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 25em;
    background: #d62956;
    content: "";
    transform: skewX(7deg) translateX(200%);
    transform-origin: top left;
    will-change: transform;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  @media (min-width: 40em) {
    nav::before {
      width: 40em;
    }
  }
  nav a {
    margin: 0.5em 0;
    padding: 0.2em 2em;
    font-size: 1.5em;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transform: translateX(200%);
    transition: color 0.15s, transform 0.5s;
    transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  }
  nav a:nth-child(1) {
    transition-delay: 0s, 100ms;
  }
  nav a:nth-child(2) {
    transition-delay: 0s, 150ms;
  }
  nav a:nth-child(3) {
    transition-delay: 0s, 200ms;
  }
  nav a:nth-child(4) {
    transition-delay: 0s, 250ms;
  }
  nav a:nth-child(5) {
    transition-delay: 0s, 300ms;
  }
  nav a:nth-child(6) {
    transition-delay: 0s, 350ms;
  }
  nav a:hover,
  nav a:focus {
    color: black;
  }

  /* main {
  overflow: hidden;
}
main .content {
  transform: translate3d(0, 0, 0);
  will-change: transform, filter;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
} */

  [id="navcheck"]:checked + label::before {
    opacity: 1;
    pointer-events: auto;
  }
  [id="navcheck"]:checked + label .burger::before,
  [id="navcheck"]:checked + label .burger::after {
    width: 107.42%;
  }
  [id="navcheck"]:checked + label .burger::before {
    transform: rotate(45deg) translateY(-50%);
  }
  [id="navcheck"]:checked + label .burger::after {
    transform: rotate(-45deg) translateY(50%);
  }
  [id="navcheck"]:checked + label .burger .bar {
    transform: scale(0.1);
  }
  [id="navcheck"]:checked ~ nav {
    transform: translateX(0);
  }
  [id="navcheck"]:checked ~ nav::before {
    transform: skewX(-5deg) translateX(0);
  }
  [id="navcheck"]:checked ~ nav a {
    transform: translateX(0);
  }
  /* [id="navcheck"]:checked ~ main .content {
    transform: translateX(3em);
    transform-origin: left center;
    filter: blur(2px);
  } */

  /* helper */
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  /* .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    
    transition: 0.5s;
    padding-top: 60px;
    position: absolute;
  } */
  @media (max-width: ${MEDIUM}) {
    display: block;
  }
`;
