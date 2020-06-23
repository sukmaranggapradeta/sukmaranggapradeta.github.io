import React from "react";
import { Wrapper } from "./styles";

function index(props) {
  return <Wrapper {...props}>{props.children}</Wrapper>;
}

export default index;
