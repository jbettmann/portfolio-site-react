import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./homepage.css";

export const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <main class="homepage">
            <div class="homepage__content">
              <div>
                <h1>hello world!</h1>
                <p>
                  My name is Jordan Bettmann.
                  <br />
                  I'm a web developer from Denver, CO with a background <br />
                  in graphic design, brewing and brewing management.
                </p>
              </div>
              <div>
                <h2>lets get started...</h2>
                <div className="homepage-button__container">
                  {/* <!-- directs use to about page --> */}
                  <div className="homepage-button">
                    <a href="about.html" className="button">
                      About Me
                    </a>
                  </div>
                  {/* <!-- directs user to work page --> */}
                  <div className="homepage-button">
                    <a href="work.html" className="button middle">
                      Check out my work
                    </a>
                  </div>
                  {/* <!-- sends email --> */}
                  <div className="homepage-button">
                    <a
                      href="mailto:jordan.bettmann@gmail.com"
                      className="button dark"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Col>
      </Row>
    </Container>
  );
};
