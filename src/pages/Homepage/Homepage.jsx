import React from "react";
import { HeroSection } from "components";
import { useDocumentTitle } from "hooks";

const Homepage = () => {
  useDocumentTitle("WELCOME | UNOTE");
  return (
    <section className="home-page-wrapper">
      <HeroSection />
    </section>
  );
};

export { Homepage };
