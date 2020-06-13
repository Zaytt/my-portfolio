import React from 'react';
import Fade from 'react-reveal/Fade';

export default function PortfolioItem({}) {
  return (
    <div className={`inclined-row `}>
      <div className="column has-text-right has-text-centered-mobile">
        <Fade left></Fade>
      </div>

      <div className="column is-three-fifths is-narrow">
        <Fade right>
          <div className="card-content has-text-weight-normal has-text-centered-mobile">
            <h1 className="title has-text-left has-text-centered-mobile has-text-weight-semibold mb-6">
              ABOUT ME
            </h1>
          </div>
        </Fade>
      </div>
    </div>
  );
}
