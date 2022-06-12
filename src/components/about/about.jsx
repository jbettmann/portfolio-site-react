import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./about.css";

export const AboutView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div class="about">
            <div id="about__text">
              <h1>well hello!</h1>
              <p>
                {/* <!-- elevator pick below --> */}
                I'm Jordan, a developer from Denver, Colorado with a background
                in graphic design, business owner and 7 years experience in
                brewing and brewery management. High attention to details,
                organization, problem solving and troubleshooting are just some
                of the skill I've gained in my previous roles.
                <br />
                <br />
                My transition to development has been instinctive. With my love
                for problem solving and learning, I strive to construct the best
                possible product. I'm seeking to join a collaborative team that
                builds intuitive and dynamic web applications for an impactful
                cause.
              </p>

              <p>
                {/* <!-- Things about me outside of work --> */}
                <span>Side notes:</span>
                <br />
                Big fan of baking and cooking, outdoor activities and the
                endless search for a great fantasy series (Stephen King's
                <span>The Dark Town Series </span>is the current winner).
              </p>
              {/* <!-- only displayed on small screens 770px and smaller --> */}
              <div id="about-resume__sm-button">
                {/* <!-- link to download resume --> */}
                <a href="files/resume.pdf" class="button" target="_blank">
                  Download My Resume
                </a>
              </div>
              {/* <!-- Start of Skills/Language container --> */}
              <div class="skills-container">
                <h2 id="skill__header">languages/skills</h2>
                <div class="skills">
                  <div class="skill__item">
                    <p>html</p>
                    <Image src="img/skill_icons/html.svg" alt="html" />
                  </div>
                  <div class="skill__item">
                    <p>css</p>
                    <Image src="img/skill_icons/css.svg" alt="css" />
                  </div>
                  <div class="skill__item">
                    <p>javascript</p>
                    <img
                      src="img/skill_icons/javascript.svg"
                      alt="javascript"
                    />
                  </div>
                  <div class="skill__item">
                    <p>node.js</p>
                    <img src="img/skill_icons/node_js.svg" alt="node_js" />
                  </div>
                  <div class="skill__item">
                    <p>react</p>
                    <img src="img/skill_icons/react.svg" alt="react" />
                  </div>
                  <div class="skill__item">
                    <p>angular</p>
                    <img src="img/skill_icons/angular.svg" alt="angular" />
                  </div>
                  <div class="skill__item">
                    <p>bootstrap</p>
                    <img src="img/skill_icons/bootstrap.svg" alt="bootstrap" />
                  </div>
                  <div class="skill__item">
                    <p>material</p>
                    <img
                      src="img/skill_icons/material.svg"
                      alt="material design"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- container holds profile photo and resume button --> */}
            <div class="photo-button-container">
              {/* <!-- profile photo (about photo) --> */}
              <div>
                <img
                  src="img/about_pic.jpg"
                  alt="side porfolio of Jordan outside in an urban city"
                  class="about__portrait"
                />
              </div>
              {/* <!-- link to download resume --> */}
              <div id="about-resume__button">
                <a href="files/resume.pdf" class="button" target="_blank">
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
