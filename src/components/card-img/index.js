import React from "react";
import { Wrapper } from "./styles";

function index(props) {
  return (
    <Wrapper {...props}>
      <img
        src={
          props.img
            ? props.img
            : "https://raw.githubusercontent.com/sukmaranggapradeta/public/f2209ba9734d0b2eac546c6bd726d9eab4f87451/undraw_photo_4yb9.svg"
        }
        alt="sukma rangga"
      />
    </Wrapper>
  );
}

export default index;
