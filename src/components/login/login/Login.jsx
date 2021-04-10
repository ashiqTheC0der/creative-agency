import React from "react";
import Navber from "../../shared/navber/Navber";
import Logo from "../../../images/logos/logo.png";
import GoogleLogo from "../../../images/logos/google-logo.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="container">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <img
            className="main-logo"
            style={{
              width: "150px",
              paddingTop: "80px",
              paddingBottom: "20px",
            }}
            src={Logo}
            alt="logo"
          />
          <div className="col-md-12">
            <div className="login-page d-flex justify-content-center align-items-center">
              <div className="main-content">
                <h3>Login With</h3>
                <button>
                  <img
                    style={{ width: "31px" }}
                    src={GoogleLogo}
                    alt="google logo"
                  />
                  <span>Continue with Google</span>
                </button>
                <h4>
                  Don't have an account?{" "}
                  <Link to="/login">Create an account</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
