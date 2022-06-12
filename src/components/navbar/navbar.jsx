import React from "react";
import { Container, Image } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import "./navbar.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="page-header">
        {/* <!-- Add Logo here --> */}
        <Navbar.Brand as={Link} to={"/"} className="logo page-header__item">
          <Image src="img/logo/logo.svg" alt="Jordan Bettmann's logo" />
        </Navbar.Brand>
        {/* <!-- Start of Navigation bar --> */}
        <Nav className="page-header__item">
          <NavLink to="about" role="menuitem" className="navigation-list__item">
            About
          </NavLink>
          <NavLink to="work" role="menuitem" className="navigation-list__item">
            Work
          </NavLink>
          <NavLink
            to="contact"
            role="menuitem"
            className="navigation-list__item"
          >
            Contact
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};
