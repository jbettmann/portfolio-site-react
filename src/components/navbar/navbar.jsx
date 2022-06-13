import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";

import "./navbar.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Container className="page-header">
        {/* <!-- Add Logo here --> */}
        <Navbar.Brand as={Link} to={"/"} className="logo page-header__item">
          <Logo />
        </Navbar.Brand>
        {/* <!-- Start of Navigation bar --> */}
        <Container className="page-header__item ">
          <Nav className="navigation-list">
            <NavLink
              to="about"
              role="menuitem"
              className="navigation-list__item"
            >
              About
            </NavLink>
            <NavLink
              to="work"
              role="menuitem"
              className="navigation-list__item"
            >
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
      </Container>
    </Navbar>
  );
};
