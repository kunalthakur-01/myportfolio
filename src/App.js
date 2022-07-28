import React from 'react';

import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contact/Contactme';
import Footer from './components/footer/Footer';
import SideContent from './components/UI/sidecontent/SideContent';

import './App.css';
import "./index.css";

function App() {
  return (
    <>
      <section className="container">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contactme />
        <SideContent />
      </section>
      <Footer />
    </>
  );
}

export default App;
