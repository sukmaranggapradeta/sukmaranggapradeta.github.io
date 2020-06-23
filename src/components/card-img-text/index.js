import React from "react";
import { Wrapper, WrapperImg } from "./styles";
import { H2 } from "components/typography/index";
import Button from "components/button";
import MyPic from "img/aboutMe.gif";

function index(props) {
  return (
    <Wrapper {...props}>
      <WrapperImg>
        <img src={props.img ? props.img : MyPic} alt="sukma rangga pradita" />
      </WrapperImg>
      <div className="justify-center flex-column">
        {props.title && <H2>{props.title}</H2>}

        {props.description && <p>{props.description}</p>}

        {props.button && (
          <div className="flex-row">
            <Button primary className="mr-16">
              View Work
            </Button>
            <Button primary>Hire Me</Button>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default index;
