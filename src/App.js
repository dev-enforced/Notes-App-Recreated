import React from "react";
import { AppRoutes } from "routes/Routes";
import { HomePageNavigation, ScrollToTop } from "components";
import { Toaster } from "react-hot-toast";
import { toastSettings } from "constants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Toaster {...toastSettings} />
        <HomePageNavigation />
        <AppRoutes />
      </ScrollToTop>
    </div>
  );
}

export default App;
