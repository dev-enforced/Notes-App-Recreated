import React from "react";
import { AppRoutes } from "routes/Routes";
import { HomePageNavigation } from 'components';
import "./App.css";

function App() {
  return (
    <>
      <HomePageNavigation />
      <AppRoutes />
    </>
  );
}

export default App;
