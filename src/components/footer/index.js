import React from "react";
import {
  Wrapper,
  FooterSection,
  // FooterLinktSection,
  CopyRightSection,
} from "./styles";
import logoFooter from "img/footer.png";
import { P1, TitleLink } from "components/typography";

import { ReactComponent as FacebookIcon } from "img/social_media_logo_facebook_icon-icons.com_59059.svg";
import { ReactComponent as WhatsAppIcon } from "img/social_media_logo_whatsapp_icon-icons.com_59066.svg";
import { ReactComponent as IntagramIcon } from "img/social_media_logo_instagram_icon-icons.com_59062.svg";
import { ReactComponent as LinkInIcon } from "img/social_media_logo_linkedin_icon-icons.com_59079.svg";
import { ReactComponent as YoutubeIcon } from "img/social_media_logo_you_tube_icon-icons.com_59065.svg";
import { ReactComponent as TwitterIcon } from "img/social_media_logo_twitter_icon-icons.com_59061.svg";

function index() {
  return (
    <Wrapper>
      <div className="footer-left flex-center">
        <div className="curve-background">
          <img src={logoFooter} alt="" width="80%" />
        </div>
      </div>
      <div className="footer-right">
        <div className="flex-row flex-wrap">
          <FooterSection>
            <div>
              <h5 className="color-grey text-uppercase">page</h5>
            </div>
            <div className="flex-column">
              <TitleLink>Home</TitleLink>
              <TitleLink>Contact</TitleLink>
              <TitleLink>Project</TitleLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <h5 className="color-grey text-uppercase">network</h5>
            </div>
            <div className="flex-column">
              <TitleLink>My Game</TitleLink>
              <TitleLink>React Turorial</TitleLink>
              <TitleLink>My Project</TitleLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <h5 className="color-grey text-uppercase">link</h5>
            </div>
            <div className="flex-column">
              <TitleLink>Stiemap</TitleLink>
              <TitleLink>Credit</TitleLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <h5 className="color-grey text-uppercase">Sharing</h5>
            </div>
            <div className="section-part-footer">
              <FacebookIcon className="footer-icon"></FacebookIcon>
              <WhatsAppIcon className="footer-icon"></WhatsAppIcon>
              <IntagramIcon className="footer-icon"></IntagramIcon>
              <LinkInIcon className="footer-icon"></LinkInIcon>
              <YoutubeIcon className="footer-icon"></YoutubeIcon>
              <TwitterIcon className="footer-icon"></TwitterIcon>
            </div>
          </FooterSection>
        </div>

        <CopyRightSection>
          <P1 className="color-grey">Copyright © 2020 Sukma Rangga</P1>
        </CopyRightSection>
      </div>
    </Wrapper>
  );
}

export default index;
