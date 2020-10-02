import React from 'react';
import PortfolioItemPubg from './PortfolioItem_Pubg';
import PortfolioItemPando from './PortfolioItem_Pando';
import AngledSeparator from '../AngledSeparator';

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container is-fluid mb-6 pb-6">
        <div className="has-text-centered mb-6">
          <h1 className="title has-text-weight-semibold mb-6">
            <span className="underline-bold">PORTFOLIO</span>
          </h1>
        </div>
        <div className="my-5">
          <PortfolioItemPando />
        </div>
        <div className="is-flex is-flex-center">
          <hr className="has-background-danger separator" />
        </div>

        <div className="my-5">
          <PortfolioItemPubg />
        </div>
      </div>

      <AngledSeparator />
    </section>
  );
}
