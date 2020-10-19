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
      <H2 className="font-bold black my-8 text-center">
        SUKMA RANGGA PRADITA WIJAYA
      </H2>
      <H2 className="font-bold black my-8 text-center">
        WEB DEVELOPER, PHOTOGRAPHER AND TRAVELLER
      </H2>

      <div className="my-16">
        <FacebookIcon className="footer-icon"></FacebookIcon>
        <WhatsAppIcon className="footer-icon"></WhatsAppIcon>
        <IntagramIcon className="footer-icon"></IntagramIcon>
        <LinkInIcon className="footer-icon"></LinkInIcon>
        <YoutubeIcon className="footer-icon"></YoutubeIcon>
        {/* <TwitterIcon className="footer-icon"></TwitterIcon> */}
      </div>
    </Wrapper>
  );
}

export default index;
