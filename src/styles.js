import styled from "styled-components";
import { MEDIUM, SMALL } from "global/media-query";

export const WrapperApp = styled.div`
  /* body {
    margin: 0;
  } */
  a {
    text-decoration: none;
  }

  .wrapper-body-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 16px 100px 16px;
    min-height: calc(70vh - 140px);
  }

  .d-flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
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
    color: #6d7979;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .font-bold {
    font-weight: bold;
  }

  .text-decoration-none {
    text-decoration: none;
  }

  .my-16 {
    margin: 16px 0;
  }

  .mt-8{
    margin-top:8px;
  }

  .mt-16{
    margin-top:16px;
  }

  .my-8 {
    margin: 8px 0;
  }

  .ml-16 {
    margin-left: 16px;
  }

  .mr-16 {
    margin-right: 16px;
  }

  .mb-16 {
    margin-bottom: 16px;
  }

  .mb-32 {
    margin-bottom: 32px;
  }

  .w-100{
    width:100%;
  }
  .card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* width: 40%; */
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .container {
    padding: 2px 16px;
    @media (max-width: ${SMALL}) {
      padding: 2px 12px;
    }
  }

  .black {
    color: #1f2667;
  }

  .grey {
    /* color: #8f92b3; */
    color: #1f2667;
  }

  .text-center {
    text-align: center;
  }

  .text-justify{
    text-align:justify;
  }

  @media (max-width: ${MEDIUM}) {
    .wrapper-body-content {
      padding: 32px 16px;
    }
  }

  @media (max-width: ${SMALL}) {
  }
`;
