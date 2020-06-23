import React from "react";
import { Wrapper, WrapperImg } from "./styles";
import { H2 } from "components/typography/index";
import Button from "components/button";
import MyPic from "img/aboutMe.gif";

function index(props) {
  return (
    <Wrapper {...props}>
      <WrapperImg>
        <img src={MyPic} alt="sukma rangga pradita" />
      </WrapperImg>
      <div className="justify-center flex-column">
        <H2>About Me</H2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          laudantium unde dolor, veniam hic cupiditate voluptatem culpa iste
          saepe aliquid. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Optio tenetur error omnis cupiditate quisquam veniam perferendis
          distinctio ducimus, quibusdam nemo adipisci deleniti voluptatibus
          aliquid! Praesentium harum ducimus dolores quis dolorem.
        </p>
        <div className="flex-row">
          <Button primary className="mr-16">
            View Work
          </Button>
          <Button primary>Hire Me</Button>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
