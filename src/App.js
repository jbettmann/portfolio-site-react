import "./App.css";
import React from "react";

import { MainView } from "./components/main-view/main-view";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </div>
  );
}

export default App;
