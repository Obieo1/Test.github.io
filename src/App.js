import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Errorboundaries from "./components/Errorboundaries";
// import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Errorboundaries>
      <Routes basename="/Test.github.io">
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Errorboundaries>
  );
};

export default App;
