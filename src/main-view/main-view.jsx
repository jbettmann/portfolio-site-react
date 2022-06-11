import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; // BrowserRouter used to implement state-based routing. HashRouter used for hash-based routing.

import { Homepage } from "../components/homepage/homepage";
import { NavigationBar } from "../components/navbar/navbar";

import "./main-view.css";

export const MainView = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NavigationBar fixed="top" />
          <Homepage />
        </Col>
      </Row>
    </Container>
  );
};
