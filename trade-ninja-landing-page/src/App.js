import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./containers/home/Home";
import NavBar from "./components/navBar/NavBar";
import GetApp from "./containers/getApp/GetApp";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/get-app" element={<GetApp />} />
      </Routes>
    </div>
  );
}

export default App;
