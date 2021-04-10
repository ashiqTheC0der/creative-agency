import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Order from "../../dashborad/order/Order";
import ServiceList from "../../dashborad/serviceList/ServiceList";
import Review from "../../dashborad/review/Review";
import AddService from "../../dashborad/addService/AddService";
import MakeAdmin from "../../dashborad/makeAdmin/MakeAdmin";
import UseDocumentTitle from "../useDocumentTitle/UseDocumentTitle";

const Dashborad = () => {
  return (
    <div>
      {UseDocumentTitle("Deshborad")}
      <Router>
        <Switch>
          <div className="row">
            <div className="col-md-2 p-0">
              <Sidebar></Sidebar>
            </div>
            <div style={{ background: "#E5E5E5" }} className="col-md-10 p-0">
              <header
                style={{
                  backgroundColor: "yellow",
                  lineHeight: "65px",
                  backgroundColor: "white",
                }}
              ></header>

              <Route path="/dashborad/order">
                <Order></Order>
              </Route>
              <Route path="/dashborad/servicelist">
                <ServiceList></ServiceList>
              </Route>
              <Route path="/dashborad/review">
                <Review></Review>
              </Route>
              <Route path="/dashborad/addService">
                <AddService></AddService>
              </Route>
              <Route path="/dashborad/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashborad;
