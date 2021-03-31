import React from "react";
import clientOne from "../../../images/customer-1.png";
import clientTwo from "../../../images/customer-2.png";
import clientThree from "../../../images/customer-3.png";
import ClientsFeedback from "../clientsFeedback/ClientsFeedback";
import "./Clients.css";

const clientsInfo = [
  {
    image: clientOne,
    name: "Nash Patrik",
    designation: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
  },
  {
    image: clientTwo,
    name: "Miriam Barron",
    designation: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
  },
  {
    image: clientThree,
    name: "Bria Malone",
    designation: "CEO, Manpol",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",
  },
];

const Clients = () => {
  return (
    <section className="clinet-part">
      <div className="container">
        <h3 className="text-center cli">
          Clients <span style={{ color: "#7AB259" }}>Feedback</span>
        </h3>
        <div className="row">
          {clientsInfo.map((Info) => (
            <ClientsFeedback Info={Info}></ClientsFeedback>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
