import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./containers/home/Home";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
