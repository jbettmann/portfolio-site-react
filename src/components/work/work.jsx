import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./work.css";

export const WorkView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <div class="work-header">
              <h1>my projects</h1>
            </div>
            <div class="grid">
              {/* <!-- Project 1 NORMAL--> */}
              {/* <!-- Grid items will live here --> */}
              <div class="grid__item">
                <div class="grid__content">
                  <h2>PokeDex</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm">
                    <img
                      src="img/pokedex.png"
                      alt="screenshot of PokeDex app homepage"
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div class="work_langs">
                    <p> html css / javascript / bootstrap / jQuery </p>
                  </div>
                  <div class="grid__link">
                    <a
                      href="https://github.com/jbettmann/pokedex-app"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="PokeDex github repo"
                      />
                    </a>
                    <a
                      href="https://jbettmann.github.io/pokedex-app"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/live.svg"
                        alt="live demo of PokeDex"
                      />
                    </a>
                  </div>
                  <p>
                    This PokeDex is a small web application build with HTML,
                    CSS, and JavaScript that loads data from an external API.
                    Users are able to search for their favorite pokemon and view
                    details via a modal built with Bootstrap.
                  </p>
                </div>
                <div class="grid__img">
                  <img
                    src="img/pokedex.png"
                    alt="screenshot of PokeDex app homepage"
                  />
                </div>
              </div>

              {/* <!-- Project 2 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div class="grid__item reverse">
                <div class="grid__content-reverse">
                  <h2>myFlix API</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm sm-img__margin">
                    <img
                      src="img/myFlix_database.png"
                      alt="Screenshot of myFlix-api/database being tested in Postman"
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div class="work_langs work_langs-reverse">
                    <p> node.js / express / mongoDB / mongoose </p>
                  </div>
                  <div class="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/myFlix-app"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="myFlix API github repo"
                      />
                    </a>
                  </div>
                  <p class="p_reverse">
                    This REST API is the server side component to the myFlix
                    App. Node.js, MongoDB and Express of the MERN stack were
                    used to build this API and database. This project
                    demonstrate web server framework, business logic, basic HTTP
                    and JWT (token-based) authentication and data security.
                  </p>
                </div>
                <div class="grid__img grid__img-reverse">
                  <img
                    src="img/myFlix_database.png"
                    alt="Screenshot of myFlix-api/database being tested in Postman"
                  />
                </div>
              </div>

              {/* <!-- Project 3 NORMAL --> */}
              <div class="grid__item">
                <div class="grid__content">
                  <h2>myFlix App (React)</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm">
                    <img
                      src="img/myFlix_React.png"
                      alt="screenshot of myFlix React homepage"
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div class="work_langs">
                    <p> react / mongoDB / heroku / netlify / bootstrap </p>
                  </div>
                  <div class="grid__link">
                    <a
                      href="https://github.com/jbettmann/myFlix-clent"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="myFlix React github repo"
                      />
                    </a>
                    <a
                      href="https://bettsmyflix.netlify.app/login"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/live.svg"
                        alt="live demo of myFlix React"
                      />
                    </a>
                  </div>
                  <p>
                    This is the client-side single-page myFlix application built
                    with React. Is displays responsive and rich UI components
                    implemented with react-bootstrap. Users can search and
                    access information about different movies, their
                    descriptions, directors, actors and genres. The application
                    makes all its call to the myFlix RESTful API.
                  </p>
                </div>
                <div class="grid__img">
                  <img
                    src="img/myFlix_React.png"
                    alt="screenshot of myFlix React homepage"
                  />
                </div>
              </div>

              {/* <!-- Project 4 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div class="grid__item reverse">
                <div class="grid__content-reverse">
                  <h2>Meet App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm sm-img__margin">
                    <img
                      src="img/meet.png"
                      alt="screenshot of Meet app homepage"
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div class="work_langs work_langs-reverse">
                    <p> react / MUI / TDD / jest / puppeteer / aws </p>
                  </div>
                  <div class="grid__link-reverse">
                    <a href="https://github.com/jbettmann/meet" target="_blank">
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="myFlix API github repo"
                      />
                    </a>
                    <a href="https://jbettmann.github.io/meet/" target="_blank">
                      <img
                        src="img/work-link_icons/live.svg"
                        alt="live demo of meet app"
                      />
                    </a>
                  </div>
                  <p class="p_reverse">
                    This serverless, PWA project was built with React using a
                    test-driven development technique. An OOP approach was taken
                    when implementing error alerts for users. This application
                    uses the Google Calendar API to fetch events along with
                    Rechart to display data visualizations.
                  </p>
                </div>
                <div class="grid__img grid__img-reverse">
                  <img
                    src="img/meet.png"
                    alt="screenshot of Meet app homepage"
                  />
                </div>
              </div>

              {/* <!-- Project 5 NORMAL --> */}
              <div class="grid__item">
                <div class="grid__content">
                  <h2>Chat App</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm">
                    <div>
                      <img
                        src="img/chat-app/chat-home.PNG"
                        alt="screenshot of chat app homepage"
                        class="chat-app_height"
                      />
                      <img
                        src="img/chat-app/chat-room.PNG"
                        alt="screenshot of chat app chatroom page"
                        class="chat-app_height"
                      />
                      <img
                        src="img/chat-app/chat-choice.jpeg"
                        alt="screenshot of chat app send option page"
                        class="chat-app_height"
                      />
                    </div>
                  </div>
                  {/* <!-- end of 1000px and smaller view --> */}
                  <div class="work_langs">
                    <p> react native / expo / google firebase / gifted chat </p>
                  </div>
                  <div class="grid__link">
                    <a
                      href="https://github.com/jbettmann/chat-app"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="chat app github repo"
                      />
                    </a>
                  </div>
                  <p>
                    This is a mobile chat app built with React Native. The app
                    uses the Gifted Chat library to provide a familiar chat
                    interface along with options to share images and their
                    location.
                  </p>
                </div>
                <div class="grid__img">
                  <div>
                    <img
                      src="img/chat-app/chat-home.PNG"
                      alt="screenshot of chat app homepage"
                      class="chat-app_height"
                    />
                    <img
                      src="img/chat-app/chat-room.PNG"
                      alt="screenshot of chat app chatroom page"
                      class="chat-app_height"
                    />
                    <img
                      src="img/chat-app/chat-choice.jpeg"
                      alt="screenshot of chat app send option page"
                      class="chat-app_height"
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Project 6 REVERSE --> */}
              {/* <!-- REVERSE layout for this. Referenced in style as "reverse" --> */}
              <div class="grid__item reverse">
                <div class="grid__content-reverse">
                  <h2>myFlix App (Angular)</h2>
                  {/* <!-- displays only in 1000px and smaller screens --> */}
                  <div class="grid__img-sm sm-img__margin">
                    <img
                      src="img/myFlix_Angular.png"
                      alt="myFlix-Angular-client app homepage"
                    />
                  </div>
                  {/* <!-- end of 1000px and smaller screens --> */}
                  <div class="work_langs work_langs-reverse">
                    <p>
                      angular / typescript / typedoc / jsdoc / angular material
                    </p>
                  </div>
                  <div class="grid__link-reverse">
                    <a
                      href="https://github.com/jbettmann/myFlix-Angular-client"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/github.svg"
                        alt="myFlix app Angular github repo"
                      />
                    </a>
                    <a
                      href="https://jbettmann.github.io/myFlix-Angular-client/welcome"
                      target="_blank"
                    >
                      <img
                        src="img/work-link_icons/live.svg"
                        alt="live demo of meet app"
                      />
                    </a>
                  </div>
                  <p class="p_reverse">
                    Using the myFlix REST API build in a previous project, this
                    client side version of the myFlix App was build with
                    Angular. The entire UI of the app was designed with Angular
                    Material. Documentation for the project was generated with
                    TypeDoc.
                  </p>
                </div>
                <div class="grid__img grid__img-reverse">
                  <img
                    src="img/myFlix_Angular.png"
                    alt="myFlix-Angular-client app homepage"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
