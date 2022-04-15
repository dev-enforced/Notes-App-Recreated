import React from "react";
import { Link } from "react-router-dom";
import { useAuthentication } from "context";
import "./HeroSection.css";
const HeroSection = () => {
  const {
    authState: { isLoggedIn },
  } = useAuthentication();
  return (
    <header className="hero-wrapper flex-column flex-center">
      <img
        src="./taking-notes-hero.svg"
        alt="Taking Notes through UNOTE"
        className="hero-image responsive-img"
      />
      <h3 className="hero-heading">Get Productive through UNOTE</h3>
      <div className="hero-links-wrapper flex-row flex-center">
        <Link
          to="/noteshome"
          className="py-2 px-3  hero-btn hero-btn-primary hero-btn-outline py-2 px-3"
        >
          GET STARTED
        </Link>
        {!isLoggedIn && (
          <Link to="/signup" className="py-2 px-3  hero-btn hero-btn-primary ">
            SIGNUP
          </Link>
        )}
      </div>
    </header>
  );
};

export { HeroSection };
