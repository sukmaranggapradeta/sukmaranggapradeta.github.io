import React from "react";
import { Wrapper } from "./styles";
// import CardFancyCurve from "components/card-fancy-curve";
import CardImgText from "components/card-img-text";

function index() {
  return (
    <Wrapper className="wrapper-body-content">
      {/* <CardFancyCurve>HOME</CardFancyCurve> */}
      <CardImgText></CardImgText>
      {/* <CardImgText></CardImgText>
      <CardImgText></CardImgText> */}
    </Wrapper>
  );
}

export default index;
