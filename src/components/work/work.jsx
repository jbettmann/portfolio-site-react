import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "../../icons";
import "./work.scss";
import meet from "../../img/meet.png";
import myFlix_Angular from "../../img/myFlix_Angular.png";
import myFlix_database from "../../img/myFlix_database.png";
import myFlix_React from "../../img/myFlix_React.png";
import pokedex from "../../img/pokedex.png";
import choice from "../../img/chat-app/chat-choice.jpeg";
import chat_home from "../../img/chat-app/chat-home.PNG";
import chatroom from "../../img/chat-app/chat-room.PNG";
import brewBud from "../../img/brewbud.png";
import { ModalView } from "../modal/modal";
import caseStudy from "../../files/Case_Study.pdf";

export const WorkView = () => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(true);

  const getImage = (event) => {
    let image = event.target;
    console.log(image);
    setImage(image);
    setShow(true);
  };

  return (
    <>
      <Row>
        <Col lg={12}>
          <ModalView show={show} image={image} onHide={() => setShow(false)} />
          <div>
            <div className="work-header">
              <h1>my projects</h1>
            </div>
            <div className="grid">
              {/* <!-- Project 1 NORMAL--> */}
              {/* <!-- Grid items will live here --> */}
              <div className="grid__item">
                <div className="grid__content">
                  <h2>Brew Bud Timer App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm brew-img">
                    <img src={brewBud} alt="Brew Bud" onClick={getImage} />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div className="work_langs brew-bud">
                    <p> react / javascript / material ui / netlify / pwa </p>
                  </div>
                  <div className="grid__link">
                    <a
                      href="https://github.com/jbettmann/timer-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="github repo" />
                    </a>
                    <a
                      href="https://brew-timer-app.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon title="live demo" />
                    </a>
                  </div>
                  <p>
                    This client-side PWA was a personal project built with React
                    and styled with Material UI. Users can create, name, edit,
                    and run multiple timers at the same time. All data that is
                    created is stored in the browser via localStorage, allowing
                    for offline capability. React-countdown-circle-timer and
                    react-countdown-hook were used for animation and timer
                    functionality. <br />
                    <i>**THIS PROJECT IS CURRENTLY IN DEVELOPMENT**</i>
                  </p>
                </div>
                <div className="grid__img brew-img">
                  <img src={brewBud} alt="Brew Bud" onClick={getImage} />
                </div>
              </div>
              {/* <!-- Project 2 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div className="grid__item reverse">
                <div className="grid__content-reverse">
                  <h2>myFlix App (Angular)</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm angular-img">
                    <img
                      src={myFlix_Angular}
                      alt="myFlix Angular App"
                      onClick={getImage}
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
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
                  <p className="p_reverse">
                    Using the myFlix REST API built in a previous project, this
                    client-side version of the myFlix App was built with
                    Angular. The entire UI of the app was designed with Angular
                    Material. Documentation for the project was generated with
                    TypeDoc.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse angular-img">
                  <img
                    src={myFlix_Angular}
                    alt="myFlix Angular App"
                    onClick={getImage}
                  />
                </div>
              </div>
              {/* <!-- Project 3 NORMAL--> */}
              {/* <!-- Grid items will live here --> */}
              <div className="grid__item">
                <div className="grid__content">
                  <h2>PokeDex</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm pokemon-img">
                    <img src={pokedex} alt="PokeDex" onClick={getImage} />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div className="work_langs pokemon">
                    <p> html / css / javascript / bootstrap / jQuery </p>
                  </div>
                  <div className="grid__link">
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
                  <p>
                    This PokeDex is a small web application built with HTML,
                    CSS, and JavaScript that loads data from an external API.
                    Users can search for their favorite pokemon and view details
                    via a modal built with Bootstrap.
                  </p>
                </div>
                <div className="grid__img pokemon-img">
                  <img src={pokedex} alt="PokeDex" onClick={getImage} />
                </div>
              </div>

              {/* <!-- Project 4 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div className="grid__item reverse">
                <div className="grid__content-reverse">
                  <h2>myFlix API</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm api-img">
                    <img
                      src={myFlix_database}
                      alt="myFlix-API tested in Postman"
                      onClick={getImage}
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
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
                  <p className="p_reverse">
                    This REST API is the server-side component of the myFlix
                    App. Node.js, MongoDB and Express of the MERN stack were
                    used to build this API and database. This project
                    demonstrates a web server framework, business logic, basic
                    HTTP and JWT (token-based) authentication and data security.
                  </p>
                </div>
                <div className="grid__img grid__img-reverse api-img">
                  <img
                    src={myFlix_database}
                    alt="myFlix-API tested in Postman"
                    onClick={getImage}
                  />
                </div>
              </div>

              {/* <!-- Project 5 NORMAL --> */}
              <div className="grid__item">
                <div className="grid__content">
                  <h2>myFlix App (React)</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm react-img">
                    <img
                      src={myFlix_React}
                      alt="myFlix React"
                      onClick={getImage}
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
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
                    src={myFlix_React}
                    alt="myFlix React"
                    onClick={getImage}
                  />
                </div>
              </div>

              {/* <!-- Project 6 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div className="grid__item reverse">
                <div className="grid__content-reverse">
                  <h2>Meet App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm meet-img">
                    <img src={meet} alt="Meet App" onClick={getImage} />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
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
                  <p className="p_reverse">
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
              </div>

              {/* <!-- Project 7 NORMAL --> */}
              <div className="grid__item">
                <div className="grid__content">
                  <h2>Chat App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div className="grid__img-sm chat-img">
                    <div>
                      <img
                        src={chat_home}
                        alt="Chat App"
                        className="chat-app_height"
                        onClick={getImage}
                      />
                      <img
                        src={chatroom}
                        alt="Chat App chatroom"
                        className="chat-app_height"
                        onClick={getImage}
                      />
                      <img
                        src={choice}
                        alt="Chat App dialog options"
                        className="chat-app_height"
                        onClick={getImage}
                      />
                    </div>
                  </div>
                  {/* <!-- end of 1000px and smaller view --> */}
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
                  <div>
                    <img
                      src={chat_home}
                      alt="Chat App"
                      className="chat-app_height"
                      onClick={getImage}
                    />
                    <img
                      src={chatroom}
                      alt="Chat App chatroom
                      "
                      className="chat-app_height"
                      onClick={getImage}
                    />
                    <img
                      src={choice}
                      alt="Chat App dialog options"
                      className="chat-app_height"
                      onClick={getImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
