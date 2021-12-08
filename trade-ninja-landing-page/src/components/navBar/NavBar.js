import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="navbar__container navbar navbar-light px-2">
      <a className="navbar-brand navbar__logo text-danger" href="/">
        Trade Ninja
      </a>
      <ul className="nav">
        <li className="nav-item">
          <a
            className="nav-link"
            href="/"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Support
          </a>
        </li>
        <li className="nav-item ">
          <a href="/get-app" className="btn btn-danger">
            Get App
          </a>
        </li>
      </ul>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Support
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Please email your questions, issues, or concerns to{" "}
              <a href="mailto:keenan560@gmail.com">keenan560@gmail.com</a>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
