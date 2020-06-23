import React from "react";
// import H1Style from "./styles/h1";
import H2Style from "./styles/h2";
import H3Style from "./styles/h3";
// import H4Style from "./styles/h4";
// import H5Style from "./styles/h5";
import P1Style from "./styles/p1";
// import P2Style from "./styles/p2";
// import P3Style from "./styles/p3";
// import TagStyle from "./styles/tag";
import TitleLinkStyle from "./styles/title-link";
// h1
// h2
// h3
// h4
// h5
// h6
// subtitle1
// subtitle2
// body1
// body2
// button
// caption
// overline

// export function H1Klob(props) {
//   return <H1Style {...props}>{props.children}</H1Style>;
// }
// export function H1Klob2(props) {
//   return <H1Style2 {...props}>{props.children}</H1Style2>;
// }
export function H2(props) {
  return <H2Style {...props}>{props.children}</H2Style>;
}
export function H3(props) {
  return <H3Style {...props}>{props.children}</H3Style>;
}

// export function H4Klob(props) {
//   return <H4Style {...props}>{props.children}</H4Style>;
// }
// export function H5Klob(props) {
//   return <H5Style {...props}>{props.children}</H5Style>;
// }
export function P1(props) {
  return <P1Style {...props}>{props.children}</P1Style>;
}
// export function P2Klob(props) {
//   return <P2Style {...props}>{props.children}</P2Style>;
// }
// export function P3Klob(props) {
//   return <P3Style {...props}>{props.children}</P3Style>;
// }
export function TitleLink(props) {
  return <TitleLinkStyle {...props}>{props.children}</TitleLinkStyle>;
}
