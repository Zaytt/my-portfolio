import React from 'react';
import Header from '../../components/Layout/Header';
import Hero from '../../components/Landing/Hero/Hero';
import About from '../../components/Landing/About/';
import Portfolio from '../../components/Landing/Portfolio/Portfolio';
import Contact from '../../components/Landing/Contact';

export default function index() {
  return (
    <div>
      <Hero />
      <Header />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
