import styled from "styled-components";
// import { theme } from "shared";
// import {
//   XS_DEVICES_WIDTH,
//   S_DEVICES_WIDTH,
//   M_DEVICES_WIDTH,
//   L_DEVICES_WIDTH,
//   MAC_DEVICES_WIDTH
// } from "config/utils/constant";

export const Wrapper = styled.div`
  .modal-window {
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    /* visibility: hidden; */
    /* opacity: 0; */
    /* pointer-events: none; */
    transition: all 0.3s;

    visibility: visible;
    opacity: 1;
    pointer-events: auto;

    &:target {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
    }
    & > div {
      width: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 2em;
      background: white;
    }
    /* header {
      font-weight: bold;
    } */
    h1 {
      font-size: 150%;
      margin: 0 0 15px;
    }
  }

  .modal-close {
    color: #aaa;
    line-height: 50px;
    font-size: 80%;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    width: 70px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }

  .modal-window {
    & > div {
      border-radius: 1rem;
    }
  }

  small {
    color: lightgray;
  }
`;
