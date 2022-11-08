import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.scss";

export const Homepage = () => {
  return (
    <Container>
      <main className="homepage">
        <div className="homepage__content">
          <div className="homepage__intro">
            <h1>welcome.</h1>
            <p>
              My name is Jordan Bettmann, I'm a front-end developer from Denver,
              CO with a background in brewing, business management and graphic
              design.
            </p>
          </div>
          <div>
            <h2>lets get started...</h2>
            <div className="homepage-button__container">
              {/* <!-- directs use to about page --> */}
              <div className="button" id="light">
                <Link to="about">About Me</Link>
              </div>
              {/* <!-- directs user to work page --> */}
              <div className="button" id="middle">
                <Link to="projects">Projects</Link>
              </div>
              {/* <!-- sends email --> */}
              <div className="button">
                <a href="mailto:hello@jordanbettmann.com">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};
