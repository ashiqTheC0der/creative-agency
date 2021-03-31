import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav
      className="col-md-5 navber navber-expand d-flex flex-cloumn align-items-start"
      className="sidebar"
    >
      <Link to="/dashborad" className="navber-brand text-light mt-5">
        <div className="display-5 font-weight-bold">Sidebar</div>
      </Link>
      <ul className="navber-nav d-flex flex-column mt-5 w-100">
        <li className="nav-item w-100">
          <Link to="/order" className="nav-link text-light pl-4">
            Order
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link to="/servicelist" className="nav-link text-light pl-4">
            Service List
          </Link>
        </li>
        <li className="nav-item w-100">
          <Link to="/review" href="#" className="nav-link text-light pl-4">
            Review
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
