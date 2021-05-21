import React from "react";
import { Wrapper } from "./styles";
// import CardImg from "components/card-img";
// import CardText from "components/card-text";
import { Helmet } from "react-helmet";
import CardImgText from "components/card-img-text";

function index() {
  return (
    <Wrapper className="wrapper-body-content flex-center">
      <Helmet>
        <title>Sukma Rangga Pradeta</title>
        <meta
          name="description"
          content="Hi Software Developer, yuk Belajar bahasa pemograman React bersama, selain react saya juga akan berbagi tentang vue js, jquery, javascript html dan css"
        />
      </Helmet>
      <div className="flex-column flex-center">
        <CardImgText
          title="</ Hi, I'm Software Developer "
          button
          description={`
          Hello! I’m Sukma Rangga Pradita Wijaya. I grew up in Denpasar, Bali, Indonesia.
          I left my hometown to study in Jakarta. I'm currently a Front End Web Developer with 2 years experience. 
          I'm particularly adept with various front end technical stacks such as React.js, styled-component, Vue.js, HTML, CSS, and Javascript, along with creativity, innovation and solution-orientation in mind.
I also like learning about photography, hiking and enjoying the beauty of nature`}
        ></CardImgText>

        {/* <CardImg
          className="mb-32"
          img="https://raw.githubusercontent.com/sukmaranggapradeta/public/f2209ba9734d0b2eac546c6bd726d9eab4f87451/undraw_under_construction_46pa.svg"
        />
        <CardText
          title="Under Maintanance"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, nostrum porro ex fugiat deserunt mollitia cupiditate dolores, perferendis doloremque officia alias reprehenderit nobis amet! Est non autem quas consequuntur nihil esse accusantium ipsa saepe officia natus sequi enim, quos, provident delectus quam. Nesciunt veniam tenetur quia sapiente! Voluptatum, eum quae."
        /> */}
      </div>
    </Wrapper>
  );
}

export default index;
