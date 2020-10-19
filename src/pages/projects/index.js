import React from "react";
import { Wrapper } from "./styles";
import CardProject from "components/card-project";
import { Helmet } from "react-helmet";
import { projects } from "./actions";

function index() {
  return (
    <Wrapper className="wrapper-body-content flex-wrap flex-space-between">
      <Helmet>
        <title>Sukma Rangga Project</title>
        <meta
          name="description"
          content="Hi Software Developer, yuk Belajar bahasa pemograman React bersama, selain react saya juga akan berbagi tentang vue js, jquery, javascript html dan css"
        />
      </Helmet>
      {projects.map((item, index) => {
        return <CardProject key={index} item={item}></CardProject>;
      })}
    </Wrapper>
  );
}

export default index;
