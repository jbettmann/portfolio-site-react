import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Routes, Route, Redirect } from "react-router-dom"; // BrowserRouter used to implement state-based routing. HashRouter used for hash-based routing.
import { Homepage } from "../homepage/homepage";
import { AboutView } from "../about/about";
import { WorkView } from "../work/work";
import { ContactView } from "../contact/contact";
import { NavigationBar } from "../navbar/navbar";

import "./main-view.css";

export const MainView = () => {
  return (
    <>
      <NavigationBar fixed="top" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutView />} />
        <Route path="work" element={<WorkView />} />
        <Route path="contact" element={<ContactView />} />
      </Routes>
    </>
  );
};
