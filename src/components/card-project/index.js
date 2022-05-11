import React from "react";
import { Wrapper, SectionTop, SectionBottom, Title } from "./styles";
// import { NavLink } from "react-router-dom";
import { P1 } from "components/typography";

function index({ item, setShowModal }) {
  return (
    <Wrapper className="card">
      {item.url ? (
        <a target="_blank" rel="noopener noreferrer" href={item.url}>
          <SectionTop>
            <img
              src={
                item.pic
                  ? require(`pages/projects/thumbnail/${item.pic}`)
                  : require("img/no_image.svg")
              }
              alt={item.title}
            />
          </SectionTop>
          <SectionBottom className="container">
            <Title>{item.title}</Title>
            <P1 className="grey">{item.desc}</P1>
            <div className="d-flex flex-wrap">
              {item.tech.map((tag, i) => (
                <div className="tag" key={i}>
                  {tag}
                </div>
              ))}
            </div>
          </SectionBottom>
        </a>
      ) : (
        <div
          onClick={() => setShowModal({ isShow: true, data: item.title })}
          style={{ cursor: "pointer" }}
        >
          <SectionTop>
            <img
              src={
                item.pic
                  ? require(`pages/projects/thumbnail/${item.pic}`)
                  : require("img/no_image.svg")
              }
              alt={item.title}
            />
          </SectionTop>
          <SectionBottom className="container">
            <Title>{item.title}</Title>
            <P1 className="grey">{item.desc}</P1>
            <div className="d-flex flex-wrap">
              {item.tech.map((tag, i) => (
                <div className="tag" key={i}>
                  {tag}
                </div>
              ))}
            </div>
          </SectionBottom>
        </div>
      )}
    </Wrapper>
  );
}

export default index;
