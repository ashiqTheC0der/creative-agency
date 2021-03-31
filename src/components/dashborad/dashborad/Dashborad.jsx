import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "../../dashborad/order/Order";
import ServiceList from "../../dashborad/serviceList/ServiceList";
import Review from "../../dashborad/review/Review";

const Dashborad = () => {
  return (
    <Router>
      <Switch>
        <div className="row">
          <div className="col-md-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-md-10">
            <Route path="/order">
              <Order></Order>
            </Route>
            <Route path="/servicelist">
              <ServiceList></ServiceList>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default Dashborad;
