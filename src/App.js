import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className = "text-white-400 bg-blue-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}


