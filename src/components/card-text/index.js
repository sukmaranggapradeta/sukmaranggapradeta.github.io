import React from "react";
import { Wrapper } from "./styles";
import { H2, P1 } from "components/typography/index";

function index(props) {
  return (
    <Wrapper {...props}>
      <div className="justify-center flex-column">
        {props.title && <H2>{props.title}</H2>}

        {props.description && <P1 className="grey">{props.description}</P1>}
      </div>
    </Wrapper>
  );
}

export default index;
