import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "../../icons";
import "./work.scss";

import brett from "../../img/brett/brett.png";
import brewAssit from "../../img/brewbud.png";
import chatApp from "../../img/chat-app.png";
import chatApp_lazy from "../../img/chat-app_lazy.png";
import myFlix_Angular from "../../img/myFlix_Angular.png";
import myFlix_Angular_lazy from "../../img/myFlix_Angular_lazy.png";
import myFlix_React from "../../img/myFlix_React.png";
import myFlix_React_lazy from "../../img/myFlix_React_lazy.png";
import myFlix_database from "../../img/myFlix_database.png";
import myFlix_database_lazy from "../../img/myFlix_database_lazy.png";
import pokedex from "../../img/pokedex.png";
import pokedex_lazy from "../../img/pokedex_lazy.png";
import brewAssitLazy from "../../img/brewbud-lazy.png";
import brettHomepage from "../../img/brett/brett_homepage.png";
import storeyHomepage from "../../img/storey/Story_homepage.png";
import storeyHomepageLazy from "../../img/storey/Story_homepage_lazy.png";

import caseStudy from "../../files/Case_Study.pdf";
import { ModalView } from "../modal/modal";
import { Github, Globe } from "lucide-react";

export const WorkView = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);

  const getImage = (event) => {
    let image = event.target;
    console.log(image);
    setImage(image);
    setShow(true);
  };

  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    const section = document.querySelectorAll(".grid__project");

    // Scroll Reveal with Intersection Observer **********************
    const sectionReveal = function (entries, observer) {
      const [entry] = entries;
      // prevent all from loading on page load
      if (!entry.isIntersecting) return;
      entry.target.classList.remove("hidden");
      // stops observation of section. No more events
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(sectionReveal, {
      root: null,
      threshold: 0.1,
    });

    section.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("hidden");
    });

    // Lazy Load image with Intersection Observer *******************
    const loadImg = (entries, observer) => {
      const [entry] = entries;
      // prevent all from loading on page load
      if (!entry.isIntersecting) return;
      // Replace src with data-src
      entry.target.src = entry.target.dataset.src;
      // listen for larger img to load
      entry.target.addEventListener("load", () => {
        entry.target.classList.remove("lazy-img_work");
      });
      // stop observing once in view
      observer.unobserve(entry.target);
    };
    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 1,
    });

    imgs.forEach((img) => imgObserver.observe(img));
  }, []);
  return (
    <>
      <Row>
        <Col lg={12}>
          <ModalView show={show} image={image} onHide={() => setShow(false)} />
          <div className="">
            <div className="work-header">
              <h1>recent work</h1>
            </div>
            <div className="grid">
              <div className="grid__item  reverse">
                <div className="grid__content-reverse">
                  <h2 className="tw-m-0 tw-text-4xl md:tw-text-5xl tw-font-normal">
                    Brett
                  </h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm tw-rounded-lg  tw-w-full tw-h-full brett-img__container ">
                    <div className="tw-flex tw-p-4 reverse" onClick={getImage}>
                      <img
                        src={brettHomepage}
                        data-src={brettHomepage}
                        alt="Brett App"
                        className=" tw-w-full tw-h-full tw-rounded-lg"
                      />
                    </div>
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div className="tw-flex tw-gap-2 tw-flex-wrap">
                    <p className="tags">nextjs</p>
                    <p className="tags">node.js</p>
                    <p className="tags">mongoDB</p>
                    <p className="tags">typescript</p>
                    <p className="tags">tailwindcss</p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-3 tw-font-normal tw-text-base md:tw-text-lg">
                    <p>
                      Brett is a cutting-edge Next.js application that bridges
                      the gap between brewers and beertenders through a robust
                      Node.js RESTful API and MongoDB database.
                    </p>
                    <p>
                      It supplies front-line staff with comprehensive, real-time
                      beer profiles, fostering and engaging customer service
                      experience. Crafted to thrive in the fast-paced
                      hospitality environment, Brett delivers a responsive and
                      intuitive user interface.
                    </p>
                    <div className="tw-flex tw-flex-col tw-gap-1 w-[90%] ">
                      <h5 className=" tw-text-lg tw-font-medium ">
                        Try it out
                      </h5>
                      <div className="tw-flex tw-gap-6 ">
                        <div>
                          <p className="tw-text-md">Email</p>
                          <p className="tw-text-md">Password</p>
                        </div>
                        <div>
                          <p className="tw-font-medium tw-text-gray-400">
                            test@gmail.com
                          </p>
                          <p className="tw-font-medium tw-text-gray-400">
                            password1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/beer-flow"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Github title="github repo" strokeWidth={1} />
                      <p className="tw-m-0 tw-h-fit ">GitHub</p>
                    </a>
                    <a
                      href="https://beer-flow.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Globe strokeWidth={1} />

                      <p className="tw-m-0 tw-h-fit ">Visit Site</p>
                    </a>
                  </div>
                </div>
                <div className="tw-flex tw-my-auto grid__img tw-rounded-lg tw-w-full tw-h-full brett-img__container">
                  <div
                    className="tw-flex tw-w-full tw-h-full tw-p-4"
                    onClick={getImage}
                  >
                    <img
                      src={brettHomepage}
                      data-src={brettHomepage}
                      alt="Brett App"
                      className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* STOREY*/}
              <div className="grid__item ">
                <div className="grid__content-reverse">
                  <h2 className="tw-m-0 tw-text-4xl md:tw-text-5xl tw-font-normal">
                    Motz-Storey Real Estate
                  </h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm tw-rounded-lg  tw-w-full tw-h-full storey-img__container">
                    <div className="tw-flex tw-p-4 reverse" onClick={getImage}>
                      <img
                        src={storeyHomepageLazy}
                        data-src={storeyHomepage}
                        alt="Motz-Storey Real Estate"
                        className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg"
                      />
                    </div>
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div className="tw-flex tw-gap-2 tw-flex-wrap">
                    <p className="tags">react</p>
                    <p className="tags">sanity.io</p>
                    <p className="tags">tailwindcss</p>
                  </div>

                  <div className="tw-flex tw-flex-col tw-gap-3 tw-font-normal tw-text-base md:tw-text-lg">
                    <p>
                      The revamped Motz-Storey Real Estate website boasts a
                      modern, intuitive interface, enhanced by the integration
                      of Sanity Studio's headless CMS into the React framework,
                      providing the team with robust content management
                      capabilities.
                    </p>
                    <p>
                      The site's responsive design ensures a seamless user
                      experience across devices, facilitating real-time updates
                      and client engagement in the fast-paced real estate
                      market.
                    </p>
                  </div>
                  <div className="grid__link-reverse">
                    {/* <a
                      href="https://github.com/jbettmann/storery-website"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Github title="github repo" strokeWidth={1} />
                      <p className="tw-m-0 tw-h-fit ">GitHub</p>
                    </a> */}
                    <a
                      href="https://storeyhomes-colorado.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Globe strokeWidth={1} />

                      <p className="tw-m-0 tw-h-fit ">Visit Site</p>
                    </a>
                  </div>
                </div>
                <div className="tw-flex tw-my-auto grid__img tw-rounded-lg tw-w-full tw-h-full storey-img__container">
                  <div
                    className="tw-flex tw-w-full tw-h-full tw-p-4"
                    onClick={getImage}
                  >
                    <img
                      src={storeyHomepageLazy}
                      data-src={storeyHomepage}
                      alt="Motz-Storey Real Estate"
                      className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg lazy-img_work"
                    />
                  </div>
                </div>
              </div>

              {/* BREW TIMER */}
              <div className="grid__item reverse">
                <div className="grid__content-reverse">
                  <h2 className="tw-m-0 tw-text-4xl md:tw-text-5xl tw-font-normal">
                    BrewAssit Timer App
                  </h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm tw-rounded-lg  tw-w-full tw-h-full timer-img__container ">
                    <div className="tw-flex tw-p-4 reverse" onClick={getImage}>
                      <img
                        src={brewAssitLazy}
                        data-src={brewAssit}
                        alt="Brew Bud"
                        className=" tw-w-full tw-h-full tw-rounded-lg lazy-img_work"
                      />
                    </div>
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div className="tw-flex tw-gap-2 tw-flex-wrap">
                    <p className="tags"> react</p>
                    <p className="tags">material ui</p>
                    <p className="tags">react-countdown</p>
                    <p className="tags">pwa </p>
                  </div>
                  <div className="tw-flex tw-flex-col tw-gap-3 tw-font-normal tw-text-base md:tw-text-lg">
                    <p>
                      This progressive web app (PWA) is a personal initiative,
                      developed with React and Material UI, enables users to
                      manage customized timers with options to create, edit, and
                      delete.
                    </p>
                    <p>
                      Leveraging localStorage for data retention, it ensures
                      full offline functionality. Animation and timing are
                      driven by react-countdown-circle-timer and
                      react-countdown-hook for a seamless user experience.
                    </p>
                  </div>
                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/timer-app"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Github title="github repo" strokeWidth={1} />
                      <p className="tw-m-0 tw-h-fit ">GitHub</p>
                    </a>
                    <a
                      href="https://brew-timer-app.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="main-btn "
                    >
                      <Globe strokeWidth={1} />

                      <p className="tw-m-0 tw-h-fit ">Visit Site</p>
                    </a>
                  </div>
                </div>
                <div className="tw-flex tw-my-auto grid__img tw-rounded-lg tw-w-full tw-h-full timer-img__container">
                  <div
                    className="tw-flex tw-w-full tw-h-full tw-p-4"
                    onClick={getImage}
                  >
                    <img
                      src={brewAssitLazy}
                      data-src={brewAssit}
                      alt="Brew Bud"
                      className="tw-w-full tw-h-full tw-object-cover tw-rounded-lg lazy-img_work"
                    />
                  </div>
                </div>
              </div>

              {/* /////////////////////////////////////////////////////// */}

              {/* <!-- Project REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              {/* <div className="grid__item grid__project reverse">
                <div className="grid__content-reverse">
                  <h2>myFlix App (Angular)</h2>
                 
                  <div className="grid__img-sm angular-img">
                    <img
                      src={myFlix_Angular_lazy}
                      data-src={myFlix_Angular}
                      className="lazy-img_work"
                      alt="myFlix Angular App"
                      onClick={getImage}
                    />
                  </div>
              
                  <div className="work_langs work_langs-reverse angular">
                    <p>
                      angular / typescript / typedoc / jsdoc / angular material
                    </p>
                  </div>
                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/myFlix-Angular-client"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                    <a
                      href="https://jbettmann.github.io/myFlix-Angular-client/welcome"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="live demo" />
                    </a>
                  </div>
                  <p className="">
                    Using the myFlix REST API built in a previous project, this
                    client-side version of the myFlix App was built with
                    Angular. The entire UI of the app was designed with Angular
                    Material. Documentation for the project was generated with
                    TypeDoc.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse angular-img">
                  <img
                    src={myFlix_Angular_lazy}
                    data-src={myFlix_Angular}
                    className="lazy-img_work"
                    alt="myFlix Angular App"
                    onClick={getImage}
                  />
                </div>
              </div> */}

              {/* <!-- Project NORMAL --> */}
              {/* <div className="grid__item grid__project">
                <div className="grid__content">
                  <h2>Chat App</h2>
                 
                  <div className="grid__img-sm chat-img">
                    <img
                      src={chatApp_lazy}
                      data-src={chatApp}
                      alt="Chat App"
                      className="chat-app_height lazy-img_work"
                      onClick={getImage}
                    />
                  </div>
               
                  <div className="work_langs chat">
                    <p> react native / expo / google firebase / gifted chat </p>
                  </div>
                  <div className="grid__link">
                    <a
                      href="https://github.com/jbettmann/chat-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                  </div>
                  <p>
                    This is a mobile chat app built with React Native. The app
                    uses the Gifted Chat library to provide a familiar chat
                    interface along with options to share images and their
                    location.
                  </p>
                </div>
                <div className="grid__img chat-img">
                  <img
                    src={chatApp_lazy}
                    data-src={chatApp}
                    alt="Chat App"
                    className="chat-app_height lazy-img_work"
                    onClick={getImage}
                  />
                </div>
              </div> */}

              {/* <!-- Project REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              {/* <div className="grid__item grid__project reverse">
                <div className="grid__content-reverse">
                  <h2>myFlix API</h2>
                 
                  <div className="grid__img-sm api-img">
                    <img
                      src={myFlix_database_lazy}
                      data-src={myFlix_database}
                      className="lazy-img_work"
                      alt="myFlix-API tested in Postman"
                      onClick={getImage}
                    />
                  </div>
       
                  <div className="work_langs work_langs-reverse api">
                    <p> node.js / express / mongoDB / mongoose </p>
                  </div>
                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/myFlix-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                  </div>
                  <p className="">
                    This REST API is the server-side component of the myFlix
                    App. Node.js, MongoDB and Express of the MERN stack were
                    used to build this API and database. This project
                    demonstrates a web server framework, business logic, basic
                    HTTP and JWT (token-based) authentication and data security.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse api-img">
                  <img
                    src={myFlix_database_lazy}
                    data-src={myFlix_database}
                    className="lazy-img_work"
                    alt="myFlix-API tested in Postman"
                    onClick={getImage}
                  />
                </div>
              </div> */}

              {/* <!-- Project  NORMAL --> */}
              {/* <div className="grid__item grid__project">
                <div className="grid__content">
                  <h2>myFlix App (React)</h2>
               
                  <div className="grid__img-sm react-img">
                    <img
                      src={myFlix_React_lazy}
                      data-src={myFlix_React}
                      className="lazy-img_work"
                      alt="myFlix React"
                      onClick={getImage}
                    />
                  </div>
                
                  <div className="work_langs react">
                    <p> react / mongoDB / redux / netlify / bootstrap </p>
                  </div>
                  <div className="grid__link">
                    <a
                      href="https://github.com/jbettmann/myFlix-clent"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                    <a
                      href="https://bettsmyflix.netlify.app/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="live demo" />
                    </a>
                    <a href={caseStudy} target="_blank" rel="noreferrer">
                      <Icon title="case study" />
                    </a>
                  </div>
                  <p>
                    This is the client-side single-page myFlix application built
                    with React. Redux is used to manage the global state of the
                    application. Users can search and access information about
                    different movies, their descriptions, directors, actors and
                    genres. The application makes all its call to the myFlix
                    RESTful API.
                  </p>
                </div>
                <div className="grid__img react-img">
                  <img
                    src={myFlix_React_lazy}
                    data-src={myFlix_React}
                    className="lazy-img_work"
                    alt="myFlix React"
                    onClick={getImage}
                  />
                </div>
              </div> */}

              {/* <!-- Project REVERSE--> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              {/* <div className="grid__item grid__project reverse">
                <div className="grid__content-reverse">
                  <h2>PokeDex</h2>
              
                  <div className="grid__img-sm pokemon-img">
                    <img
                      src={pokedex_lazy}
                      data-src={pokedex}
                      className="lazy-img_work"
                      alt="PokeDex"
                      onClick={getImage}
                    />
                  </div>
                 
                  <div className="work_langs work_langs-reverse pokemon">
                    <p> html / css / javascript / bootstrap / jQuery </p>
                  </div>
                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/pokedex-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                    <a
                      href="https://jbettmann.github.io/pokedex-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="live demo" />
                    </a>
                  </div>
                  <p className="">
                    This PokeDex is a small web application built with HTML,
                    CSS, and JavaScript that loads data from an external API.
                    Users can search for their favorite pokemon and view details
                    via a modal built with Bootstrap.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse pokemon-img">
                  <img
                    src={pokedex_lazy}
                    data-src={pokedex}
                    className="lazy-img_work"
                    alt="PokeDex"
                    onClick={getImage}
                  />
                </div>
              </div> */}
              {/* <!-- Project REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              {/* <div className="grid__item grid__project reverse">
                <div className="grid__content-reverse">
                  <h2>Meet App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> 
                  <div className="grid__img-sm meet-img">
                    <img src={meet} alt="Meet App" onClick={getImage} />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> 
                  <div className="work_langs work_langs-reverse meet">
                    <p> react / MUI / TDD / jest / puppeteer / aws </p>
                  </div>
                  <div className="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/meet"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                    <a
                      href="https://jbettmann.github.io/meet/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="live demo" />
                    </a>
                  </div>
                  <p className="">
                    This serverless, PWA project was built with React using a
                    test-driven development technique. An OOP approach was taken
                    when implementing error alerts for users. This application
                    uses the Google Calendar API to fetch events along with
                    Rechart to display data visualizations.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse meet-img">
                  <img src={meet} alt="Meet App" onClick={getImage} />
                </div>
              </div> */}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
