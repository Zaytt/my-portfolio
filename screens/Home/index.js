import React from 'react';
import Header from '../../components/Layout/Header';
import Hero from '../../components/Landing/Hero';
import About from '../../components/Landing/About/';
import Projects from '../../components/Landing/Projects';
import Contact from '../../components/Landing/Contact';

export default function index() {
  return (
    <div>
      <Hero />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
