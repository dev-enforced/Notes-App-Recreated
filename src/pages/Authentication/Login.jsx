import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthentication } from "context";
import { initialLoginData, guestCredentials } from "constants";
import { loginSubmissionHandler } from "services";
import "./authentication.css";
import { fetchAndSetFormInputValues } from "utilities";
const Login = () => {
  const { setAuthState } = useAuthentication();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState(initialLoginData);

  return (
    <section className="main-container">
      <div className="auth-wrapper flex-row flex-center">
        <div className="form-container">
          <div className="form-header text-center">
            <p className="form-heading-text">Log In</p>
          </div>
          <form
            className="auth-form"
            onSubmit={(e) => {
              loginSubmissionHandler(e, loginData, setAuthState, navigate);
            }}
          >
            <div className="form-input-container">
              <label htmlFor="emailGiven" className="form-input-label">
                Email Address
              </label>
              <input
                type="email"
                id="emailGiven"
                name="email"
                className="auth-input"
                placeholder="krishpatel@gmail.com"
                onChange={(e) => {
                  fetchAndSetFormInputValues(e, setLoginData);
                }}
                required
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="passwordGiven" className="form-input-label">
                Password
              </label>
              <input
                type="password"
                id="passwordGiven"
                className="auth-input"
                placeholder="******"
                name="password"
                onChange={(e) => {
                  fetchAndSetFormInputValues(e, setLoginData);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="py-2 px-3 hero-btn hero-btn-primary"
            >
              LOG IN
            </button>
          </form>
          <div className="form-actions flex-column gentle-flex-gap flex-align-center">
            <p>
              <button
                className="px-2 py-3 hero-btn hero-btn-primary"
                onClick={(e) => {
                  loginSubmissionHandler(
                    e,
                    guestCredentials,
                    setAuthState,
                    navigate
                  );
                }}
              >
                GUEST LOGIN
              </button>
            </p>
            <p>
              <NavLink to="/signup" className="link-none">
                New To UNOTE ?{" "}
                <span className="alternate-action">Join Now</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login };
