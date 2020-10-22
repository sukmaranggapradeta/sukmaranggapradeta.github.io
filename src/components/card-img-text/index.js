import React from "react";
import { Wrapper, WrapperImg } from "./styles";
import { H2, P1 } from "components/typography/index";
import Button from "components/button";
import MyPic from "img/aboutMe.webm";
import { withRouter } from "react-router-dom";

function index(props) {
  const goToHome = () => {
    console.log("goToHome");
    props.history.push("/project");
  };

  return (
    <Wrapper {...props}>
      <WrapperImg>
        <video width="320" height="240" autoplay="autoplay">
          <source src={MyPic} type="video/webm" />
          {/* <source src="movie.ogg" type="video/ogg"> */}
          Your browser does not support the video tag.
        </video>
        {/* <img src={props.img ? props.img : MyPic} alt="sukma rangga pradita" /> */}
      </WrapperImg>
      <div className="justify-center flex-column">
        {props.title && <H2 className="font-bold black">{props.title}</H2>}

        {props.description && <P1 className="grey">{props.description}</P1>}

        {props.button && (
          <div className="flex-row">
            {/* <NavLink to="project"> */}
            <Button primary onClick={() => goToHome()}>
              View More
            </Button>
            {/* </NavLink> */}
            {/* <Button primary>Hire Me</Button> */}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default withRouter(index);
