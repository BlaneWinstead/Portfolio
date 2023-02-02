import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <div className="bg-container">
        <div className="gradient-container">
          <Main />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
