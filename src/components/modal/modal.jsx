import React from "react";
import { Modal } from "react-bootstrap";

import "./modal.scss";

export const ModalView = (props) => {
  return (
    <Modal
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      onHide={props.onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.image.alt}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="body">
        <img id="modal-image" src={props.image.src} alt={props.image.alt} />
      </Modal.Body>
      <Modal.Footer>
        <button className="button" id="bs-btn__override" onClick={props.onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
