import React from "react";
import { Navbar } from "react-bootstrap";
import { Icon } from "../../icons";
import { ContactView } from "../contact/contact";

import "./footer.scss";

export const Footer = () => {
  return (
    // <!-- Footer with links to social media profiles -->
    <Navbar fixed="bottom" className="page-footer">
      <p>Find me on</p>
      <div className="social-media">
        <a
          href="https://github.com/jbettmann"
          target="_blank"
          className="social-media__icon"
        >
          <Icon title="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-bettmann-268a39228/"
          target="_blank"
          className="social-media__icon"
        >
          <Icon title="linkedin" />
        </a>
        <a
          href="https://twitter.com/gordev5"
          target="_blank"
          className="social-media__icon"
        >
          <Icon title="twitter" />
        </a>
      </div>
    </Navbar>
  );
};
