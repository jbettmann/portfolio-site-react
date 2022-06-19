import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

import "./modal.scss";

export const ModalView = (props) => {
  console.log(props.image);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body id="body">
        <p>Come On</p>
        <img id="modal-image" src={props.image} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
