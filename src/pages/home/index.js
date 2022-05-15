import React, { useState } from "react";
// import CardImg from "components/card-img";
// import CardText from "components/card-text";
import { Helmet } from "react-helmet";

import Button from "components/button";
import CardImgText from "components/card-img-text";
import { H2 } from "components/typography/index";
import Modal from "components/modal";
import CardProject from "components/card-project";

import { projects } from "../projects/actions";

import { Wrapper,ContainerViewMore } from "./styles";

function Index(props) {
  const [showModal, setShowModal] = useState({ isShow: false, data: "" });

  const viewMoreHandler = () => {
    props.history.push("/project");
  };

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
          // button
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
        <div className="d-flex justify-content-center my-8">
          <H2 className="font-bold black">{"</ My Work"}</H2>
        </div>
        <div className="d-flex flex-wrap">
          {projects.map((item, index) => {
            return (
              index < 6 && (
                <CardProject
                  key={index}
                  item={item}
                  setShowModal={setShowModal}
                ></CardProject>
              )
            );
          })}
        </div>
        <ContainerViewMore className="d-flex justify-content-center mt-8 mb-16">
        
          <Button primary onClick={() => viewMoreHandler()}>
            View More
          </Button>
        </ContainerViewMore>
        {showModal.isShow && (
          <Modal setShowModal={setShowModal} showModal={showModal} />
        )}
      </div>
    </Wrapper>
  );
}

export default Index;
