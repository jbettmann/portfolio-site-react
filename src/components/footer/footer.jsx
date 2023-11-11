import React, { useEffect, useRef } from "react";

import { Navbar } from "react-bootstrap";
import { Icon } from "../../icons";

import "./footer.scss";

export const Footer = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    const footerNav = footerRef.current;
    footerNav.classList.remove("hidden");
  });
  return (
    // <!-- Footer with links to social media profiles -->
    <Navbar
      ref={footerRef}
      className="page-footer hidden tw-pt-[90rem] lg:tw-pt-[30rem]"
    >
      <div className="tw-flex ">
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
      </div>
      <div>
        <p className="copywrite">© 2023 Jordan Bettmann</p>
      </div>
    </Navbar>
  );
};
