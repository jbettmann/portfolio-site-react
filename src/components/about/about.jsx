import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../img/about_photo_1.jpg";
import { Icon } from "../../icons";
import resume from "../../files/Bettmann_Jordan_Resume.pdf";

import "./about.scss";

export const AboutView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="about">
            <div id="about__text">
              <h1>well hello!</h1>
              <p>
                {/* <!-- elevator pick below --> */}
                I'm Jordan, a developer enjoying life in beautiful Denver,
                Colorado.
              </p>
              <p>
                As a brewer turned web developer, I enjoy building, an architect
                if you will. With my experience and expertise in product
                development, troubleshooting, problem-solving and
                entrepreneurialism, I thrive at orchestrating, creating and
                constructing ideas.
              </p>
              <p>
                My transition to development has been instinctive. Fueled by a
                love for problem-solving and learning, I strive to construct
                user first products with an obsession with detail and efficiency
                guiding my process.
              </p>
              <p>
                I'm seeking to join a motivated team full-time that builds
                intuitive and dynamic web applications for an impactful cause.
              </p>
              <p>
                {/* <!-- Things about me outside of work --> */}
                <span>Behind the code:</span>
                <br />
                When not bypassing the mainframe, I’m probably baking and
                cooking up a storm, flying around Denver's bike trails on my
                single-speed, searching for the best campsite in existence, or
                devouring a great fantasy series (Stephen King's
                <span>The Dark Tower </span>is my current favorite).
              </p>
              {/* <!-- only displayed on small screens 770px and smaller --> */}
              <div id="about-resume__sm-button">
                <div>
                  {/* <!-- link to download resume --> */}
                  <a
                    href={resume}
                    target="_blank"
                    className="navigation-list__item"
                    rel="noreferrer"
                  >
                    <Icon title="download" /> resume
                  </a>
                </div>
              </div>

              {/* <!-- Start of Skills/Language container --> */}
              <div className="skills-container">
                <h2 id="skill__header">languages/skills</h2>
                <div className="skills">
                  <div className="skill__item">
                    <p>html</p>
                    <Icon title="html" />
                  </div>
                  <div className="skill__item">
                    <p>css</p>
                    <Icon title="css" />
                  </div>
                  <div className="skill__item">
                    <p>javascript</p>
                    <Icon title="javascript" />
                  </div>
                  <div className="skill__item">
                    <p>node.js</p>
                    <Icon title="node_js" />
                  </div>
                  <div className="skill__item">
                    <p>react</p>
                    <Icon title="react" />
                  </div>
                  <div className="skill__item">
                    <p>angular</p>
                    <Icon title="angular" />
                  </div>
                  <div className="skill__item">
                    <p>bootstrap</p>
                    <Icon title="bootstrap" />
                  </div>
                  <div className="skill__item">
                    <p>material</p>
                    <Icon title="material design" />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- container holds profile photo and resume button --> */}
            <div className="photo-button-container">
              {/* <!-- profile photo (about photo) --> */}
              <div>
                <img
                  src={about}
                  alt="Jordan out backpacking"
                  className="about__portrait"
                />
              </div>
              {/* <!-- link to download resume --> */}
              <div id="about-resume__button">
                <a
                  href={resume}
                  target="_blank"
                  className="navigation-list__item"
                  rel="noreferrer"
                >
                  <Icon title="download" /> resume
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
