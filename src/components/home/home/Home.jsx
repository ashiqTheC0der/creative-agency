import React from "react";
import Header from "../header/Header";
import BrandPartner from "../../../components/home/brandPartner/BrandPartner";
import Service from "../../../components/home/service/Service";
import OurWorks from "../../../components/home/ourWorks/OurWorks";
import Clients from "../clients/Clients";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrandPartner></BrandPartner>
      <Service></Service>
      <OurWorks></OurWorks>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  );
};

export default Home;
