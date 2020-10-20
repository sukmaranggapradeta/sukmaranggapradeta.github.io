import React from "react";
import { Wrapper } from "./styles";
import { Helmet } from "react-helmet";
import CardImg from "components/card-img";
import CardText from "components/card-text";

function index() {
  return (
    <Wrapper className="wrapper-body-content">
      <Helmet>
        <title>About Me</title>
        <meta name="description" content="Sukma Rangga Pradita Wijaya CV" />
      </Helmet>

      <CardImg
        className="mb-32"
        img="https://raw.githubusercontent.com/sukmaranggapradeta/public/f2209ba9734d0b2eac546c6bd726d9eab4f87451/undraw_under_construction_46pa.svg"
      />
      <CardText
        title="Under Maintanance"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, nostrum porro ex fugiat deserunt mollitia cupiditate dolores, perferendis doloremque officia alias reprehenderit nobis amet! Est non autem quas consequuntur nihil esse accusantium ipsa saepe officia natus sequi enim, quos, provident delectus quam. Nesciunt veniam tenetur quia sapiente! Voluptatum, eum quae."
      />
    </Wrapper>
  );
}

export default index;
