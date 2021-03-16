import React from "react";
import "./Navber.css";
import Logo from "../../../images/logos/logo.png";

const Navber = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar container navbar-expand-lg">
                <div className="container-fluid p-0">
                  <a className="navbar-brand" href="#">
                    <img className="nav-logo" src={Logo} alt="logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav float-start">
                      <li className="nav-item">
                        <a
                          className="nav-link p-0 active"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#">
                          Our Portfolio
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#">
                          Our Team
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#">
                          Contact Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link p-0" href="#">
                          Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
