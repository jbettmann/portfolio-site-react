import React from "react";
import { Container } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo/logo.svg";

import "./navbar.scss";

export const NavigationBar = ({ showFooter, hideFooter }) => {
  return (
    <Navbar>
      <Container className="page-header">
        {/* <!-- Add Logo here --> */}
        <Navbar.Brand
          as={Link}
          to={"/"}
          className="logo page-header__item"
          onClick={showFooter} //sets footer to true in main-view state. shows Footer
        >
          <Logo />
        </Navbar.Brand>
        {/* <!-- Start of Navigation bar --> */}
        <Container className="page-header__item ">
          <Nav className="navigation-list">
            <NavLink
              to="about"
              role="menuitem"
              className="navigation-list__item"
              onClick={showFooter} //sets footer to true in main-view state. shows Footer
            >
              About
            </NavLink>
            <NavLink
              to="work"
              role="menuitem"
              className="navigation-list__item"
              onClick={showFooter} //sets footer to true in main-view state. shows Footer
            >
              Work
            </NavLink>
            <NavLink
              to="contact"
              role="menuitem"
              className="navigation-list__item"
              onClick={hideFooter} //sets footer to false in main-view state. hides Footer only in ContactView
            >
              Contact
            </NavLink>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
};
