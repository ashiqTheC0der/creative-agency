import React from "react";
import "./ClientsFeedback.css";

const ClientsFeedback = ({ Info }) => {
  return (
    <div className="col-md-4">
      <div className="clinet-card">
        <div className="client-head">
          <div className="img">
            <img src={Info.image} alt="customerimg" />
          </div>
          <div className="head-content">
            <h3>{Info.name}</h3>
            <h5>{Info.designation}</h5>
          </div>
          <div className="body-content">
            <p>{Info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
