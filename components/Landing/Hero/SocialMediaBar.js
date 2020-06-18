import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function ContactNavbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-end mt-4 ">
          <a href="https://github.com/Zaytt" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="social-media-button mx-4"
              width="3em"
            />
          </a>
          <a href="https://www.linkedin.com/in/ivanchaveze/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              className="social-media-button ml-2 mr-6"
              width="3em"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
