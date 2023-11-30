import React from "react";
import { Modal, Button, Carousel } from "react-bootstrap";
import brett from "../../img/brett/brett.png";
import storeyDevices from "../../img/storey/devices.png";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "./modal.scss";

export const ModalView = ({ show, image, onHide }) => {
  console.log({ image });
  return (
    <>
      {image && (
        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          onHide={onHide}
          size={image.alt === "BrewAssit" ? "lg" : "xl"}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="tw-text-black"
            >
              {image.alt}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="body" className="py-4">
            {image.alt === "Brett App" ? (
              <Carousel
                slide={false}
                indicators={false}
                prevIcon={<ChevronLeft className="text-black" size={30} />}
                nextIcon={<ChevronRight className="text-black" size={30} />}
              >
                <Carousel.Item>
                  <Carousel.Caption>
                    <p className="text-black text-xs md:text-sm">{`Brett landing page`}</p>
                  </Carousel.Caption>
                  <img id="modal-image" src={image.src} alt={image.alt} />
                </Carousel.Item>
                <Carousel.Item className="py-4">
                  <Carousel.Caption>
                    <p className="text-black text-xs md:text-sm">{`Brett App`}</p>
                  </Carousel.Caption>
                  <img id="modal-image" src={brett} alt={`Brett in act`} />
                </Carousel.Item>
              </Carousel>
            ) : image.alt === "Motz-Storey Real Estate" ? (
              <Carousel
                slide={false}
                indicators={false}
                prevIcon={<ChevronLeft className="text-black" size={30} />}
                nextIcon={<ChevronRight className="text-black" size={30} />}
              >
                <Carousel.Item>
                  <Carousel.Caption>
                    <p className="text-black text-xs md:text-sm">{`Motz-Storey Homepage`}</p>
                  </Carousel.Caption>
                  <img id="modal-image" src={image.src} alt={image.alt} />
                </Carousel.Item>
                <Carousel.Item className="py-4">
                  <Carousel.Caption>
                    <p className="text-black text-xs md:text-sm">{`Motz-Storey responsive on all devices`}</p>
                  </Carousel.Caption>
                  <img
                    id="modal-image"
                    src={storeyDevices}
                    alt={`Motz-Storey responsive on all devices`}
                  />
                </Carousel.Item>
              </Carousel>
            ) : (
              <>
                <img id="modal-image" src={image.src} alt={image.alt} />

                <p>{image.alt}</p>
              </>
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
