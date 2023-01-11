import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter used to implement state-based routing. HashRouter used for hash-based routing.
import { Homepage } from "../homepage/homepage";
import { AboutView } from "../about/about";
import { WorkView } from "../work/work";
import { ContactView } from "../contact/contact";
import { NavigationBar } from "../navbar/navbar";
import { Footer } from "../footer/footer";

import "./main-view.scss";

export const MainView = ({ setAppOverFlow }) => {
  const [footer, setFooter] = useState(true);

  // sets footer to false and hides Footer Component when ContactView is displayed
  let hideFooter = () => {
    setFooter(false);
  };

  // sets footer to true and shows Footer Component
  let showFooter = () => {
    setFooter(true);
  };

  return (
    <>
      <NavigationBar
        hideFooter={hideFooter}
        showFooter={showFooter}
        setAppOverFlow={setAppOverFlow}
        fixed="top"
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutView />} />
        <Route path="projects" element={<WorkView />} />
        <Route
          path="contact"
          element={<ContactView hideFooter={hideFooter} />}
        />
      </Routes>
      {footer && <Footer />}
    </>
  );
};
