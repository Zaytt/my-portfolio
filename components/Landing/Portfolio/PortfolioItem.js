import React from 'react';
import Fade from 'react-reveal/Fade';
import { PortfolioItemHeader } from './PortfolioItemHeader';
import { PortfolioItemImage } from './PortfolioItemImage';
import TechStackList from './TechStackList';

export default function PortfolioItem({ item }) {
  const {
    title,
    content,
    imageuri: imageUri,
    websiteurl: websiteUrl,
    githuburl: githubUrl,
  } = item.fields;

  const tags = item.fields.tags.split(',');

  return (
    <Fade right>
      <div
        className="container has-background-white-ter"
        style={{ borderRadius: '25px' }}
      >
        <div className="columns is-centered is-desktop">
          <PortfolioItemImage websiteUrl={websiteUrl} imageUri={imageUri} />
          <div className="column is-half-desktop is-narrow">
            <div className="container is-fluid has-text-weight-normal has-text-centered-mobile pt-3 px-5">
              {/* Item Header */}
              <PortfolioItemHeader
                title={title}
                websiteUrl={websiteUrl}
                githubUrl={githubUrl}
              />
              {/* Item description */}
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
              {/* Tech stack icon list */}
              <TechStackList techs={tags} />
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
