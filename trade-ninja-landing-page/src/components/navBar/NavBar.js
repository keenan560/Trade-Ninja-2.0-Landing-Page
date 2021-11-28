import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navbar__container navbar navbar-light px-2">
      <a className="navbar-brand navbar__logo text-danger" href="#">
        Trade Ninja
      </a>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Support
          </a>
        </li>
        <li className="nav-item ">
          <div className="btn btn-danger">Get App</div>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
