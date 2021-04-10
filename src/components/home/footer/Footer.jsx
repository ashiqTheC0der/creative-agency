import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="leftside">
              <h1>
                Let us handle your project, <br />
                professionally.
              </h1>
              <p>
                With well written codes, we build amazing apps for all <br />{" "}
                platforms, mobile and web apps in general.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rightside">
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email address"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Your name / company’s name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Your message"
                    className="form-control ym"
                  />
                </div>
                <button type="submit" className="btn">
                  <span className="send">Send</span>
                </button>
              </form>
            </div>
          </div>
          <span className="text-center copyright">
            copyright ashiqthecoder {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
