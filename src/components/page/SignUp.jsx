import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signin">
      <div className="signin__container" style={{ background: "white" }}>
        <div className="signin__container-body">
          <div className="d-flex justify-content-center  align-items-center">
            <form className="signin__container-body__form">
              <h3>Welcome back</h3>
              <p>Welcome back! Please enter your details.</p>
              <div className="signin__container-body__form-firstname">
                <label>FirstName</label>
                <input type="text" placeholder="Enter your firstname" />
              </div>
              <div className="signin__container-body__form-lastname">
                <label>LastName</label>
                <input type="text" placeholder="Enter your lastname" />
              </div>
              <div className="signin__container-body__form-email">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="signin__container-body__form-password">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              {/* <div className="signin__container-body__form-problem">
                <div className="signin__container-body__form-problem__remember">
                  <input type="checkbox" />
                  <span>Remember for 30 days</span>
                </div>
                <div className="signin__container-body__form-problem__forgot">
                  <span>Forgot password</span>
                </div>
              </div> */}
              <button className="signin__container-body__form-submit">
                Sign up
              </button>
            </form>
          </div>
          <div className="signin__container-body__signup">
            Have an account?{" "}
            <span>
              <Link
                to="/sign-in"
                onClick={() => {
                  window.scrollTo({
                    top: 126,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Sign In
              </Link>
            </span>
          </div>
          {/* <div className="signin__container-body__google">
            <FcGoogle />
            <span>Sign in with Google</span>
          </div> */}
        </div>
        <div className="signin__container-img">
          <img src="https://file.hstatic.net/1000383583/file/emptyname_20_s_638eaaab856c4b4bb6d16d9ae655b5bf.jpg" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
