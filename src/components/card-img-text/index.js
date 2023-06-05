import React from "react";
import { Wrapper, WrapperImg, Content } from "./styles";
import { H2, P1 } from "components/typography/index";
import Button from "components/button";
// import MyPic from "img/aboutMe.webm";
import { withRouter } from "react-router-dom";

import { ReactComponent as FacebookIcon } from "img/social_media_logo_facebook_icon-icons.com_59059.svg";
import { ReactComponent as WhatsAppIcon } from "img/social_media_logo_whatsapp_icon-icons.com_59066.svg";
import { ReactComponent as IntagramIcon } from "img/social_media_logo_instagram_icon-icons.com_59062.svg";
import { ReactComponent as LinkInIcon } from "img/social_media_logo_linkedin_icon-icons.com_59079.svg";
import { ReactComponent as YoutubeIcon } from "img/social_media_logo_you_tube_icon-icons.com_59065.svg";

function index(props) {
  const goToHome = () => {
    console.log("goToHome");
    props.history.push("/project");
  };

  return (
    <Wrapper {...props}>
      <WrapperImg>
        {/* <video width="320" height="240" autoplay="autoplay"> */}
        {/* <source src={MyPic} type="video/webm" /> */}
        {/* <source src="movie.ogg" type="video/ogg"> */}
        {/* Your browser does not support the video tag. */}
        {/* </video> */}
        <img
          src={
            props.img
              ? props.img
              : // : "https://github.com/sukmaranggapradeta/kodecinta_img/blob/main/sukma-0.png?raw=true"
                "https://github.com/sukmaranggapradeta/kodecinta_img/blob/main/sukma-green.png?raw=true"
          }
          alt="sukma rangga pradita"
        />
      </WrapperImg>
      <Content>
        {props.title && <H2 className="font-bold black">{props.title}</H2>}

        {props?.description && (
          <P1 className="grey text-justify">{props?.description}</P1>
        )}
        {props?.description2 && (
          <P1 className="grey text-justify">{props?.description2}</P1>
        )}

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
        <div className="mt-8">
          <a
            href="https://www.facebook.com/sukmaranggapradeta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className="footer-icon"></FacebookIcon>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6281337682040&text=`Hi Sukma, #fromwebsite`&source=&data="
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="footer-icon"></WhatsAppIcon>
          </a>
          <a
            href="https://www.instagram.com/pradetasukmarangga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IntagramIcon className="footer-icon"></IntagramIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/sukma-rangga-pradita-wijaya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkInIcon className="footer-icon"></LinkInIcon>
          </a>
          <a
            href="https://www.youtube.com/channel/UCpHXgO-pmICndl2tAPaHxqg?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeIcon className="footer-icon"></YoutubeIcon>
          </a>
          {/* <TwitterIcon className="footer-icon"></TwitterIcon> */}
        </div>
      </Content>
    </Wrapper>
  );
}

export default withRouter(index);
