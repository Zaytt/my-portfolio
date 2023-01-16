import React from 'react';

export const PortfolioItemImage = ({ websiteUrl, imageUri }) => {
  const figure = (
    <figure className="image image is-3by2">
      <img src={imageUri} />
    </figure>
  );
  return (
    <div className="column has-text-right-desktop has-text-centered is-half-desktop">
      {websiteUrl ? (
        <a href={websiteUrl} target="_blank">
          {figure}
        </a>
      ) : (
        <div>{figure}</div>
      )}
    </div>
  );
};
