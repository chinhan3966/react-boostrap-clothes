import React from "react";
import { Container } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  return (
    <div className="signin">
      <div className="signin__container" style={{ background: "white" }}>
        <div className="signin__container-body">
          <div className="d-flex justify-content-center  align-items-center">
            <form className="signin__container-body__form">
              <h3>Welcome back</h3>
              <p>Welcome back! Please enter your details.</p>
              <div className="signin__container-body__form-email">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="signin__container-body__form-password">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className="signin__container-body__form-problem">
                <div className="signin__container-body__form-problem__remember">
                  <input type="checkbox" />
                  <span>Remember for 30 days</span>
                </div>
                <div className="signin__container-body__form-problem__forgot">
                  <span>Forgot password</span>
                </div>
              </div>
              <button className="signin__container-body__form-submit">
                Sign in
              </button>
            </form>
          </div>
          <div className="signin__container-body__signup">
            Don't have an account? <span>Sign Up</span>
          </div>
          <div className="signin__container-body__google">
            <FcGoogle />
            <span>Sign in with Google</span>
          </div>
        </div>
        <div className="signin__container-img">
          <img src="https://file.hstatic.net/1000360022/collection/dsc03238_713b806b9bb5414bad483f5a15cc5ab9_master.jpg" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
