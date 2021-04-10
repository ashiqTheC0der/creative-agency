import React from "react";
import UseDocumentTitle from "../useDocumentTitle/UseDocumentTitle";
import "./Order.css";

const Order = () => {
  return (
    <div>
      <h1>{UseDocumentTitle("Order")}</h1>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control ml"
            placeholder="Your name / company’s name"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control ml"
            placeholder="Your email address"
          />
        </div>
        <div className="cate mb-3">
          <label className="ml" for="categoris">
            Choose Your Catagory :
          </label>
          <select name="categoris" id="categoris">
            <option value="Graphic Design">Graphic Design</option>
            <option value="Web Design">Web Design</option>
            <option value="Mobile App Develop">Monile App Develop</option>
            <option value="Consultant">Consultant</option>
          </select>
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control proDe ml"
            placeholder="Project Details"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control price ml"
            placeholder="Price"
          />
          <input
            style={{ marginLeft: "5px" }}
            placeholder="you project file"
            type="file"
          />
        </div>

        <button type="submit" className="btn btn-primary ml">
          Send
        </button>
      </form>
    </div>
  );
};

export default Order;
