import React from "react";
import "./Navber.css";
import Logo from "../../../images/logos/logo.png";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar container navbar-expand-lg p-0">
                <div className="container-fluid">
                  <Link to="/" className="navbar-brand" href="#">
                    <img className="nav-logo" src={Logo} alt="logo" />
                  </Link>
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
                        <Link
                          to="/"
                          className="nav-link"
                          aria-current="page"
                          href="#"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link to="portfolio" className="nav-link" href="#">
                          Our Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="ourteam" className="nav-link" href="#">
                          Our Team
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link" href="#">
                          Contact Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="login" className="nav-link" href="#">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to="/dashborad/dashborad"
                          className="nav-link"
                          href="#"
                        >
                          Dashborad
                        </Link>
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
