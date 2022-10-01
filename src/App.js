import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import logo from "./logo.svg";
import "./App.css";

import Navigation from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="bunt88.github.io/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
