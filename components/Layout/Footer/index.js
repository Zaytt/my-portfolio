import React from 'react';
import { withRouter } from 'next/router';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function footer({ router }) {
  return (
    <footer className="footer has-background-black-ter">
      <div className="container has-text-centered mb-0 pb-0">
        <div className="has-text-centered ">
          <Link
            className="has-text-white"
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <FontAwesomeIcon
              width="0"
              icon={faChevronUp}
              size="3x"
              className="has-text-white has-background-danger px-2 py-2 "
              style={{
                borderRadius: '5px',
                position: 'relative',
                top: '-40px',
              }}
            />
          </Link>
        </div>
        <div className="has-text-centered mt-0">
          <a href="https://github.com/Zaytt" target="_blank">
            <FontAwesomeIcon
              width="0"
              icon={faGithub}
              size="3x"
              className="mx-4 social-media-button"
            />
          </a>
          <a href="https://www.linkedin.com/in/ivanchaveze/" target="_blank">
            <FontAwesomeIcon
              width="0"
              icon={faLinkedin}
              size="3x"
              className="mx-4 social-media-button"
            />
          </a>
        </div>
        {router.pathname.includes('/blog') ? (
          <div className="has-text-centered has-text-white">
            <p className="mb-0 has-text-grey mt-5 is-size-7">Blog built with</p>
            <a href="https://buttercms.com/" target="_blank">
              <img
                className="butter-image-footer"
                src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
              />
            </a>
          </div>
        ) : null}
        <div className="has-text-centered">
          <p className="has-text-grey mt-2 is-size-7">
            IVAN CHAVEZ ESCAMILLA{' '}
            <span className="has-text-primary-medium">{`©${new Date().getFullYear()}`}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default withRouter(footer);
