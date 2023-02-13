import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Bar from "./components/about/Bar";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Home />
        <About />
        <Bar />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
