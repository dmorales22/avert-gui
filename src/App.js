import React, { useState, useEffect } from "react";

import "./App.css";

import { Card } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Configuration from "./pages/Configuration";
import Sync from "./pages/Sync";

import HomeContentArea from "./components/HomeContentArea";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const { height } = useWindowDimensions();

  return (
    <Card className={!darkMode ? "bp3-dark" : ""} style={{ minHeight: height }}>
      <Router>
        <Navbar setDark={setDarkMode} />
        <div style={{ padding: 16 }}>
          <Switch>
            <Route path="/configuration">
              <Configuration />
            </Route>
            <Route path="/sync">
              <Sync />
            </Route>
            <Route path="/">
              <HomeContentArea />
            </Route>
          </Switch>
        </div>
      </Router>
    </Card>
  );
}

export default App;
