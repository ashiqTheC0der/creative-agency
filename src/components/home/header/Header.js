import React from "react";
import HeaderMain from "../headerMain/HeaderMain";
import Navber from "../navber/Navber";
import BrandPartner from "../brandPartner/BrandPartner";
import Service from "../service/Service";

const Header = () => {
  return (
    <header>
      <Navber></Navber>
      <HeaderMain></HeaderMain>
      <BrandPartner></BrandPartner>
      <Service></Service>
    </header>
  );
};

export default Header;
