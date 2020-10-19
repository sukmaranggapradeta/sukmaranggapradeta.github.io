import React from "react";
import { Wrapper } from "./styles";
// import CardImgText from "components/card-img-text";
import { Helmet } from "react-helmet";

function index() {
  return (
    <Wrapper className="wrapper-body-content">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Ini Content About Me" />
      </Helmet>
      <h1>My CV</h1>
      {/* <CardImgText
        title="About Me"
        button
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aut mollitia corrupti provident officiis quis asperiores quam tenetur? Consequatur odit, nemo, debitis cupiditate esse harum maiores perspiciatis facere nulla laboriosam ullam sed rerum quam accusamus aliquid, est et repudiandae ex! Ea assumenda neque voluptatibus! Maiores reiciendis enim blanditiis sapiente ea."
      ></CardImgText> */}
    </Wrapper>
  );
}

export default index;
