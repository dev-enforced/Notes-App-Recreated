import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthentication } from "context";
import { initialSignupData } from "constants";
import { signupSubmissionHandler } from "services";
import "./authentication.css";
import { fetchAndSetFormInputValues } from "utilities";
const Signup = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuthentication();
  const [signupData, setSignupData] = useState(initialSignupData);

  return (
    <section className="main-container">
      <div className="auth-wrapper flex-row flex-center">
        <div className="form-container">
          <div className="form-header text-center">
            <p className="form-heading-text">Sign Up</p>
          </div>
          <form
            className="auth-form"
            onSubmit={(e) => {
              signupSubmissionHandler(e, signupData, setAuthState, navigate);
            }}
          >
            <div className="form-input-container">
              <label htmlFor="firstNameGiven" className="form-input-label">
                First Name
              </label>
              <input
                type="text"
                id="firstNameGiven"
                name="firstName"
                className="auth-input"
                onChange={(e) => {
                  fetchAndSetFormInputValues(e, setSignupData);
                }}
                placeholder="e.g Krish"
                required
              />
            </div>
            <div className="form-input-container">
              <label htmlFor="lastNameGiven" className="form-input-label">
                Last Name
              </label>
              <input
                type="text"
                id="lastNameGiven"
                name="lastName"
                className="auth-input"
                placeholder="e.g Patel"
                onChange={(e) => {
                  fetchAndSetFormInputValues(e, setSignupData);
                }}
                required
              />
            </div>
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
                  fetchAndSetFormInputValues(e, setSignupData);
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
                name="password"
                className="auth-input"
                placeholder="******"
                onChange={(e) => {
                  fetchAndSetFormInputValues(e, setSignupData);
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="py-2 px-3 hero-btn hero-btn-primary"
            >
              SIGN UP
            </button>
          </form>
          <div className="form-actions flex-column gentle-flex-gap flex-align-center">
            <p>
              <NavLink to="/login" className="link-none">
                Already on UNOTE ?{" "}
                <span className="alternate-action">Log In</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup };
