import React from "react";
import { Wrapper } from "./styles";
import { H2 } from "components/typography";
import FancyCard from "components/card-fancy-curve";

import { ReactComponent as FacebookIcon } from "img/social_media_logo_facebook_icon-icons.com_59059.svg";
import { ReactComponent as WhatsAppIcon } from "img/social_media_logo_whatsapp_icon-icons.com_59066.svg";
import { ReactComponent as IntagramIcon } from "img/social_media_logo_instagram_icon-icons.com_59062.svg";
import { ReactComponent as LinkInIcon } from "img/social_media_logo_linkedin_icon-icons.com_59079.svg";
import { ReactComponent as YoutubeIcon } from "img/social_media_logo_you_tube_icon-icons.com_59065.svg";
// import { ReactComponent as TwitterIcon } from "img/social_media_logo_twitter_icon-icons.com_59061.svg";

function index() {
  return (
    <Wrapper className="flex-center wrapper-body-content flex-column">
      <FancyCard className="my-16">
        <img src="https://static.klob.id/image_bank/aboutus/sukma.jpg" alt="" />
      </FancyCard>
      {/* <img
        src="https://github.com/sukmaranggapradeta/kodecinta_img/blob/main/sukma-green.png?raw=true"
        alt=""
      /> */}
      <H2 className="font-bold black my-8 text-center">
        SUKMA RANGGA PRADITA WIJAYA
      </H2>
      <H2 className="font-bold black my-8 text-center">
        WEB DEVELOPER, PHOTOGRAPHER AND TRAVELLER
      </H2>

      <div className="my-16">
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
    </Wrapper>
  );
}

export default index;
