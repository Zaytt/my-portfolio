import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const PortfolioItemHeader = ({ title, websiteUrl, githubUrl }) => {
  return (
    <h1 className="is-size-3 has-text-left-desktop has-text-centeredhas-text-weight-semibold mb-2">
      {title}
      <span className="has-text-right">
        {websiteUrl && (
          <a href={websiteUrl} target="_blank">
            <FontAwesomeIcon
              width="0"
              icon={faExternalLinkAlt}
              className="ml-3 px-1 social-media-button2"
            />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank">
            <FontAwesomeIcon
              width="0"
              icon={faGithub}
              className="mx-2 px-1 social-media-button2"
            />
          </a>
        )}
      </span>
    </h1>
  );
};
