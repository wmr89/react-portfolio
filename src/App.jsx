import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <section>
        <Navbar />
        {/* <About />
      <Portfolio />
      <Contact />
      <Resume />*/}
      </section>
      <Footer />
    </main>
  );
}

export default App;
