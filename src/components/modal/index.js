import React from "react";
import { Wrapper } from "./styles";

function index({ showModal, setShowModal }) {
  return (
    <Wrapper>
      <div id="open-modal" className="modal-window">
        <div>
          <div
            className="modal-close"
            onClick={() => setShowModal({ isShow: false, data: "" })}
          >
            Close
          </div>
          <h1>Error 404 not found</h1>
          <div>{`"Sorry" I turned off my hosting server for this`}</div>
          <div>{`"${showModal.data}" website`}</div>
          <div>
            <small>{`:)`}</small>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default index;
