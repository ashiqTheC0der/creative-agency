import React from "react";
import HeaderMain from "../headerMain/HeaderMain";
import Navber from "../../shared/navber/Navber";

const Header = () => {
  return (
    <header>
      <Navber></Navber>
      <HeaderMain></HeaderMain>
    </header>
  );
};

export default Header;
