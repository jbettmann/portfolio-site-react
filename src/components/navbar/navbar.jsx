import React from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./navbar.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="page-header">
        {/* <!-- Add Logo here --> */}
        <Navbar.Brand className="logo page-header__item" href="index.html">
          <Image src="img/logo/logo.svg" alt="Jordan Bettmann's logo" />
        </Navbar.Brand>
        {/* <!-- Start of Navigation bar --> */}
        <Nav className="page-header__item">
          <Nav.Link
            href="about.html"
            role="menuitem"
            className="navigation-list__item"
          >
            About
          </Nav.Link>
          <Nav.Link
            href="work.html"
            role="menuitem"
            className="navigation-list__item"
          >
            Work
          </Nav.Link>
          <Nav.Link
            href="contact.html"
            role="menuitem"
            className="navigation-list__item"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
