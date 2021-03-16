import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top mx-auto d-block"
          src={service.img}
          alt="Card image cap"
        />
        <a href="#">
          <div className="card-body">
            <h5 className="card-title">{service.title}</h5>
            <p className="card-text">{service.content}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
