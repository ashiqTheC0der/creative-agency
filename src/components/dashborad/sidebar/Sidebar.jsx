import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <nav className="col-md-5" className="sidebar">
      <Link to="/dashborad">
        <div className="text-center logo">Logo Here</div>
      </Link>
      <ul>
        <li className="nav-item">
          <Link
            style={{ marginTop: "70px" }}
            to="/dashborad/order"
            className="nav-link pt-10"
          >
            Order
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashborad/servicelist" className="nav-link">
            Service List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashborad/review" href="#" className="nav-link">
            Review
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashborad/addService" href="#" className="nav-link">
            Add Service
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashborad/makeAdmin" href="#" className="nav-link">
            Make Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
