import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.scss";

export const Homepage = () => {
  const welcomingRef = useRef(null);
  const getStartedRef = useRef(null);

  //homepage button refs
  const leftButtonRef = useRef(null);
  const centerButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  useEffect(() => {
    const app = document.querySelector(".App");
    const welcoming = welcomingRef.current;
    const getStarted = getStartedRef.current;

    // homepage button animation
    const leftButton = leftButtonRef.current;
    const centerButton = centerButtonRef.current;
    const rightButton = rightButtonRef.current;

    // welcome Timeout
    welcoming.classList.remove("hidden__intro");
    // lets get started timeout
    getStarted.classList.remove("hidden");

    leftButton.classList.remove("left");

    centerButton.classList.remove("center");

    rightButton.classList.remove("right");

    setTimeout(() => {
      app.style.overflow = "auto";
      leftButton.style.transition =
        "transform 200ms ease-in 0s, filter 200ms ease-in 0s";
      centerButton.style.transition =
        "transform 200ms ease-in 0s, filter 200ms ease-in 0s";
      rightButton.style.transition =
        "transform 200ms ease-in 0s, filter 200ms ease-in 0s";
    }, 8100);
  }, []);

  return (
    <Container>
      <main className="homepage">
        <div className="homepage__content">
          <div ref={welcomingRef} className="homepage__intro hidden__intro">
            <h1>welcome.</h1>
            <p>
              My name is Jordan Bettmann, I'm a front-end developer from Denver,
              CO with a background in brewing, business management and graphic
              design.
            </p>
          </div>
          <div>
            <h2 ref={getStartedRef} className="get-started hidden">
              lets get started...
            </h2>
            <div className="homepage-button__container">
              {/* <!-- directs use to about page --> */}
              <div ref={leftButtonRef} className="button left" id="light">
                <Link to="about">About Me</Link>
              </div>
              {/* <!-- directs user to work page --> */}
              <div ref={centerButtonRef} className="button center " id="middle">
                <Link to="projects">Projects</Link>
              </div>
              {/* <!-- sends email --> */}
              <div ref={rightButtonRef} className="button right " id="dark">
                <a href="mailto:hello@jordanbettmann.com">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
};
