import React, { useState } from "react";
import { Wrapper } from "./styles";

import CardProject from "components/card-project";
import Modal from "components/modal";

import { Helmet } from "react-helmet";
import { projects } from "./actions";

function ProjectsPage() {
  const [showModal, setShowModal] = useState({ isShow: false, data: "" });

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
        return (
          <CardProject
            key={index}
            item={item}
            setShowModal={setShowModal}
          ></CardProject>
        );
      })}
      {showModal.isShow && (
        <Modal setShowModal={setShowModal} showModal={showModal} />
      )}
    </Wrapper>
  );
}

export default ProjectsPage;
