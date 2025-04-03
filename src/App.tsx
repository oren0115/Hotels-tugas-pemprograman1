import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { MapSection } from "./components/map-section";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Navbar />
      <AppRoutes />
      <MapSection />
      <Footer />
    </Router>
  );
}

export default App;
