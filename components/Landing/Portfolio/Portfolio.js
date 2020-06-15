import React from 'react';
import Item from './PortfolioItem_Pubg';
import PortfolioItemPubg from './PortfolioItem_Pubg';
import AngledSeparator from '../AngledSeparator';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container is-fluid mb-6 pb-6">
        <div className="has-text-centered mb-6">
          <h1 className="title has-text-weight-semibold">
            <span className="underline-bold">PORTFOLIO</span>
          </h1>
        </div>
        <div>
          <PortfolioItemPubg />
        </div>
      </div>

      <AngledSeparator />
    </section>
  );
}
