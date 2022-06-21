import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

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
          {/* {props.image} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="body">
        <img id="modal-image" src={props.image} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
