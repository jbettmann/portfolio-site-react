import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo/logo2.svg";

import "./navbar.scss";

export const NavigationBar = ({ setAppOverFlow, showFooter, hideFooter }) => {
  return (
    <Navbar>
      <div className="page-header">
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
        <div className="page-header__item ">
          <Nav className="navigation-list">
            <NavLink
              to="about"
              role="menuitem"
              className="navigation-list__item"
              onClick={() => {
                showFooter();
                setAppOverFlow();
              }} //sets footer to true in main-view state. shows Footer
            >
              About
            </NavLink>
            <NavLink
              to="projects"
              role="menuitem"
              className="navigation-list__item"
              onClick={() => {
                showFooter();
                setAppOverFlow();
              }} //sets footer to true in main-view state. shows Footer
            >
              Projects
            </NavLink>
            <NavLink
              to="contact"
              role="menuitem"
              className="navigation-list__item"
            >
              Contact
            </NavLink>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};
