import React from "react";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import ServiceCard from "../serviceCard/ServiceCard";
import "./Service.css";

const servicepart = [
  {
    title: "Web & Mobile Design",
    content:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    img: service1,
  },
  {
    title: "Graphic design",
    content:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    img: service2,
  },
  {
    title: "Web development",
    content:
      "With well written codes, we build amazing apps for all platforms,mobile and web apps in general.",
    img: service3,
  },
];

const Service = () => {
  return (
    <section className="service-part">
      <div className="container">
        <h3 className="text-center">
          Provide awesome <span style={{ color: "#7AB259" }}>product</span>
        </h3>
        <div className="row">
          {
          servicepart.map((service) => (
            <ServiceCard service={service}></ServiceCard>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Service;
