import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "./logo.svg";
import "./App.css";

import Navigation from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
