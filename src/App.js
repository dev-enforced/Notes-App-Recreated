import React from "react";
import { AppRoutes } from "routes/Routes";
import { HomePageNavigation } from 'components';
import "./App.css";

function App() {
  return (
    <div className="App">
      <HomePageNavigation />
      <AppRoutes />
    </div>
  );
}

export default App;
