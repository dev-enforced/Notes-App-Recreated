import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthentication } from "context";
import { Dark } from "constants";
import "./HomePageNavigation.css";

const HomePageNavigation = () => {
  const { authState, logoutHandler } = useAuthentication();
  const { isLoggedIn } = authState;
  return (
    <nav className="home-page-nav flex-row flex-space-between-align-center">
      <Link to="/" className="link-none home-redirect flex-row flex-center">
        <img
          src="./main-icon.png"
          alt="UNOTES APP LOGO"
          className="home-logo"
        />
        <h2 className="home-title">UNOTE</h2>
      </Link>
      <ul className="home-links flex-row flex-align-center">
        <li>
          {isLoggedIn ? (
            <button
              className={`hero-btn hero-btn-primary py-2 px-3`}
              onClick={() => {
                logoutHandler();
              }}
            >
              LOGOUT
            </button>
          ) : (
            <NavLink className={`home-link link-none`} to="/login">
              LOGIN
            </NavLink>
          )}
        </li>
        <li>
          <Dark className="nav-icon text-cursor-pointer" title="Toggle Theme" />
        </li>
      </ul>
    </nav>
  );
};

export { HomePageNavigation };
