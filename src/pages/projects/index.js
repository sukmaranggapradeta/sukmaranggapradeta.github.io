import React from "react";
import { Wrapper } from "./styles";
import CardProject from "components/card-project";

function index() {
  return (
    <Wrapper className="wrapper-body-content flex-center flex-wrap">
      {[...Array(9)].map(el => {
        return <CardProject></CardProject>;
      })}
    </Wrapper>
  );
}

export default index;
