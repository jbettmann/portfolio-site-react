import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "../../icons";

import "./contact.scss";

export const ContactView = ({ hideFooter }) => {
  useEffect(() => {
    //sets footer to false in main-view state. hides Footer only in ContactView
    hideFooter();
  });

  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-info">
            <h1>contact</h1>
            <p>
              Jordan Bettmann
              <br />
              {/* <!--Sends Email--> */}
              <a
                href="mailto:hello@jordanbettmann.com"
                className="tw-text-secondary"
              >
                hello@jordanbettmann.com
              </a>
            </p>
            <div className="contact-icons">
              {/* <!--Email--> */}
              <a
                href="mailto:hello@jordanbettmann.com"
                className="social-icons button sm-button"
                id="email"
              >
                <Icon title="email" />
              </a>
              {/* <!--Twitter--> */}
              <a
                href="https://twitter.com/gordev5"
                target="_blank"
                className="social-icons button sm-button"
                id="twitter"
                rel="noreferrer"
              >
                <Icon title="twitter" />
              </a>
              {/* <!--GitHub--> */}
              <a
                href="https://github.com/jbettmann"
                target="_blank"
                className="social-icons button sm-button"
                id="github"
                rel="noreferrer"
              >
                <Icon title="github-social" />
              </a>
              {/* <!--LinkedIn--> */}
              <a
                href="https://www.linkedin.com/in/jordan-bettmann-268a39228/"
                target="_blank"
                className="social-icons button sm-button"
                id="linked-in"
                rel="noreferrer"
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
