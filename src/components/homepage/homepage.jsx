import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.scss";

export const Homepage = () => {
  return (
    <Container>
      <main className="homepage">
        <div className="homepage__content">
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
                <Link to="about" className="button">
                  About Me
                </Link>
              </div>
              {/* <!-- directs user to work page --> */}
              <div className="homepage-button">
                <Link to="work" className="button" id="middle">
                  Check out my work
                </Link>
              </div>
              {/* <!-- sends email --> */}
              <div className="homepage-button">
                <a
                  href="mailto:jordan.bettmann@gmail.com"
                  className="button"
                  id="dark"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};
