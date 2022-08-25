import "./App.scss";
import React, { useEffect, useState } from "react";

import { MainView } from "./components/main-view/main-view";
import { BrowserRouter } from "react-router-dom";

function App() {
  const pressed = [];
  const secretCode = "dracarys";
  const secretCodeWest = "fire";

  const [fire, setFire] = useState(false);

  function handleSecret(e) {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
      const fireOn = setTimeout(() => setFire(true), 0);
      const fireOff = setTimeout(() => setFire(false), 4000);
    }
    if (pressed.join("").includes(secretCodeWest)) {
      window.location.href =
        "https://awoiaf.westeros.org/index.php/Dragonflame";
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", handleSecret);
  });

  return (
    <div className={fire ? "App fire" : "App"}>
      <BrowserRouter>
        <MainView />
      </BrowserRouter>
    </div>
  );
}

export default App;
