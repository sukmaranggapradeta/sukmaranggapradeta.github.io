import React from "react";
import H2Style from "./styles/h2";
import H3Style from "./styles/h3";
import P1Style from "./styles/p1";
import TitleLinkStyle from "./styles/title-link";

export function H2(props) {
  return <H2Style {...props}>{props.children}</H2Style>;
}
export function H3(props) {
  return <H3Style {...props}>{props.children}</H3Style>;
}

export function P1(props) {
  return <P1Style {...props}>{props.children}</P1Style>;
}

export function TitleLink(props) {
  return <TitleLinkStyle {...props}>{props.children}</TitleLinkStyle>;
}
