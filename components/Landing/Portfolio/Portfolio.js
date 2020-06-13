import React from 'react';
import Item from './PortfolioItem';
import PortfolioItem from './PortfolioItem';
import AngledSeparator from '../AngledSeparator';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="has-text-centered mb-6">
        <h1 className="title has-text-weight-semibold">PORTFOLIO</h1>
      </div>
      <div className="">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
      <AngledSeparator />
    </section>
  );
}
