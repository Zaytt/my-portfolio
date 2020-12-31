import React from 'react';

export const PortfolioItemImage = ({ websiteUrl, image }) => {
  return (
    <div className="column has-text-right-desktop has-text-centered is-half-desktop">
      <a href={websiteUrl} target="_blank">
        <figure className="image image is-3by2">
          <img src={image} />
        </figure>
      </a>
    </div>
  );
};
