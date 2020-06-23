import React from "react";
import { FancyCurve } from "./styles";

function index(props) {
  return <FancyCurve {...props}>{props.children}</FancyCurve>;
}

export default index;
