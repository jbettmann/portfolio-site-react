import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "../../icons";

import "./contact.css";

export const ContactView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div class="contact-info">
            <h1>Contact</h1>
            <p>
              Jordan Bettmann
              <br />
              {/* <!--Sends Email--> */}
              <a href="mailto:jordan.bettmann@gmail.com">
                jordan.bettmann@gmail.com
              </a>
            </p>
            <div class="contact-icons">
              {/* <!--Email--> */}
              <a href="mailto:jordan.bettmann@gmail.com" class="social-icons">
                <Icon title="email" />
              </a>
              {/* <!--GitHub--> */}
              <a
                href="https://github.com/jbettmann"
                target="_blank"
                class="social-icons"
              >
                <Icon title="github" />
              </a>
              {/* <!--LinkedIn--> */}
              <a
                href="https://www.linkedin.com/in/jordan-bettmann-268a39228/"
                target="_blank"
                class="social-icons"
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
