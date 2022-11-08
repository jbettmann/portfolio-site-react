import React from "react";
import { Navbar } from "react-bootstrap";
import { Icon } from "../../icons";

import "./footer.scss";

export const Footer = () => {
  return (
    // <!-- Footer with links to social media profiles -->
    <Navbar className="page-footer">
      <div className="social-media">
        <a
          href="https://github.com/jbettmann"
          target="_blank"
          className="social-media__icon"
          rel="noreferrer"
        >
          <Icon title="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/jordan-bettmann-268a39228/"
          target="_blank"
          className="social-media__icon"
          rel="noreferrer"
        >
          <Icon title="linkedin" />
        </a>
        <a
          href="https://twitter.com/gordev5"
          target="_blank"
          className="social-media__icon"
          rel="noreferrer"
        >
          <Icon title="twitter" />
        </a>
        <div>
          <p className="copywrite">© 2022 Jordan Bettmann</p>
        </div>
      </div>
    </Navbar>
  );
};
