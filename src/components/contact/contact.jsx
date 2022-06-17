import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "../../icons";

import "./contact.scss";

export const ContactView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-info">
            <h1>Contact</h1>
            <p>
              Jordan Bettmann
              <br />
              {/* <!--Sends Email--> */}
              <a href="mailto:jordan.bettmann@gmail.com">
                jordan.bettmann@gmail.com
              </a>
            </p>
            <div className="contact-icons">
              {/* <!--Email--> */}
              <a
                href="mailto:jordan.bettmann@gmail.com"
                className="social-icons"
              >
                <Icon title="email" />
              </a>
              {/* <!--Twitter--> */}
              <a
                href="https://twitter.com/gordev5"
                target="_blank"
                className="social-icons"
              >
                <Icon title="twitter" />
              </a>
              {/* <!--GitHub--> */}
              <a
                href="https://github.com/jbettmann"
                target="_blank"
                className="social-icons"
              >
                <Icon title="github" />
              </a>
              {/* <!--LinkedIn--> */}
              <a
                href="https://www.linkedin.com/in/jordan-bettmann-268a39228/"
                target="_blank"
                className="social-icons"
              >
                <Icon title="linkedin" />
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
