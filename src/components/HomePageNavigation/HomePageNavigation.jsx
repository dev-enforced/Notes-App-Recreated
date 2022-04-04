import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomePageNavigation.css";
import { Dark } from "constants";
const HomePageNavigation = () => {
  return (
    <nav className="home-page-nav flex-row flex-space-between-align-center">
      <Link to="/" className="link-none home-redirect flex-row flex-center">
        <img src="./main-icon.png" alt="UNOTES APP LOGO" className="home-logo" />
        <h2 className="home-title">UNOTE</h2>
      </Link>
      <ul className="home-links flex-row flex-align-center">
        <li>
          <NavLink className={`home-link link-none `} to="/login">
            LOGIN
          </NavLink>
        </li>
        <li>
          <Dark className="nav-icon text-cursor-pointer" />
        </li>
      </ul>
    </nav>
  );
};

export { HomePageNavigation };
