import React from "react";
import { Wrapper, FooterSection, CopyRightSection, MenuTitle } from "./styles";
import logoFooter from "img/footer.png";
import { P1, TitleLink } from "components/typography";
import { NavLink } from "react-router-dom";

import { ReactComponent as FacebookIcon } from "img/social_media_logo_facebook_icon-icons.com_59059.svg";
import { ReactComponent as WhatsAppIcon } from "img/social_media_logo_whatsapp_icon-icons.com_59066.svg";
import { ReactComponent as IntagramIcon } from "img/social_media_logo_instagram_icon-icons.com_59062.svg";
import { ReactComponent as LinkInIcon } from "img/social_media_logo_linkedin_icon-icons.com_59079.svg";
import { ReactComponent as YoutubeIcon } from "img/social_media_logo_you_tube_icon-icons.com_59065.svg";
// import { ReactComponent as TwitterIcon } from "img/social_media_logo_twitter_icon-icons.com_59061.svg";

import { scrollToTop } from "global/main";

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
              <MenuTitle className="color-grey text-uppercase">page</MenuTitle>
            </div>
            <div className="flex-column">
              <NavLink to="/home" onClick={() => scrollToTop()}>
                <TitleLink>Home</TitleLink>
              </NavLink>
              <NavLink to="/project" onClick={() => scrollToTop()}>
                <TitleLink>Project</TitleLink>
              </NavLink>
              <NavLink to="/about" onClick={() => scrollToTop()}>
                <TitleLink>About</TitleLink>
              </NavLink>
              <NavLink to="/contact" onClick={() => scrollToTop()}>
                <TitleLink>Contact</TitleLink>
              </NavLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <MenuTitle className="color-grey text-uppercase">
                network
              </MenuTitle>
            </div>
            <div className="flex-column">
              <TitleLink>My Game</TitleLink>
              <TitleLink>React Turorial</TitleLink>
              <TitleLink>My Project</TitleLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <MenuTitle className="color-grey text-uppercase">link</MenuTitle>
            </div>
            <div className="flex-column">
              <TitleLink>Stiemap</TitleLink>
              <TitleLink>Credit</TitleLink>
            </div>
          </FooterSection>
          <FooterSection>
            <div>
              <MenuTitle className="color-grey text-uppercase">
                Get In Touch
              </MenuTitle>
            </div>
            <div className="section-part-footer">
              <FacebookIcon className="footer-icon"></FacebookIcon>
              <WhatsAppIcon className="footer-icon"></WhatsAppIcon>
              <IntagramIcon className="footer-icon"></IntagramIcon>
              <LinkInIcon className="footer-icon"></LinkInIcon>
              <YoutubeIcon className="footer-icon"></YoutubeIcon>
              {/* <TwitterIcon className="footer-icon"></TwitterIcon> */}
            </div>
          </FooterSection>
        </div>

        <CopyRightSection>
          <P1 className="grey">Copyright © 2020 Sukma Rangga</P1>
        </CopyRightSection>
      </div>
    </Wrapper>
  );
}

export default index;
