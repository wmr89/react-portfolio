import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {

  return (
  
    <main>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </main>
  )
}

export default App
