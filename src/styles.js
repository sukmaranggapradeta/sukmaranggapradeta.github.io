import styled from "styled-components";
// import { theme } from "shared";
// import { LARGE, MEDIUM, SMALL } from "global/media-query";

export const WrapperApp = styled.div`
  .wrapper-body-content {
    max-width: 1200px;
    margin: 0 auto;
    /* border: dashed red 0.5px; */
    padding: 40px 16px 100px 16px;
    min-height: calc(70vh - 140px);
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .justify-center {
    justify-content: center;
  }

  .flex-row {
    display: flex;
    flex-direction: row;
  }

  .flex-space-around {
    display: flex;
    justify-content: space-around;
  }
  .flex-space-between {
    display: flex;
    justify-content: space-between;
  }
  .flex-space-evenly {
    display: flex;
    justify-content: space-evenly;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }
  .color-white {
    color: #fff;
  }

  .color-purple {
    color: #2b259f;
  }

  .color-grey {
    color: #8f92b3;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-bold {
    font-weight: bold;
  }

  .mr-16 {
    margin-right: 16px;
  }
`;
