import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthentication } from "context";
import { Dark, routeConstants } from "constants";
import "./HomePageNavigation.css";

const HomePageNavigation = () => {
  const { HOME_ROUTE } = routeConstants;
  const { authState, logoutHandler } = useAuthentication();
  const { isLoggedIn } = authState;
  return (
    <nav className="home-page-nav flex-row flex-space-between-align-center">
      <Link
        to={HOME_ROUTE}
        className="link-none home-redirect flex-row flex-center"
      >
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
            <NavLink
              className={`hero-btn hero-btn-primary py-2 px-3 link-decoration-none`}
              to="/login"
            >
              LOGIN
            </NavLink>
          )}
        </li>
        <li className="component-hide">
          <Dark className="nav-icon text-cursor-pointer" title="Toggle Theme" />
        </li>
      </ul>
    </nav>
  );
};

export { HomePageNavigation };
