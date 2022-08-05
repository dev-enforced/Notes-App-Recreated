import React from "react";
import { AppRoutes } from "routes/Routes";
import { HomePageNavigation } from "components";
import { Toaster } from "react-hot-toast";
import { toastSettings } from "constants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster {...toastSettings} />
      <HomePageNavigation />
      <AppRoutes />
    </div>
  );
}

export default App;
