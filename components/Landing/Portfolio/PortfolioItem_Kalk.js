import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NextJSLogo from '../../Logos/next_logo';
import ReactLogo from '../../Logos/react_logo';
import NodeLogo from '../../Logos/node_logo';
import ReduxLogo from '../../Logos/redux_logo';
import BootstrapLogo from '../../Logos/bootstrap_logo';
import HerokuLogo from '../../Logos/heroku_logo';

export default function PortfolioItem({}) {
  return (
    <Fade right>
      <div
        className="container has-background-white-ter"
        style={{ borderRadius: '25px' }}
      >
        <div className="columns is-centered is-desktop">
          <div className="column has-text-right-desktop has-text-centered is-half-desktop">
            <a href="http://www.mypubgsquad.com" target="_blank">
              {/* <Fade left> */}
              <figure className="image image is-3by2">
                <img
                  src="/static/assets/portfolio/mypubgsquad.png"
                  style={imgStyle}
                />
              </figure>
              {/* </Fade> */}
            </a>
          </div>

          <div className="column is-half-desktop is-narrow">
            {/* <Fade right> */}
            <div className="container has-text-weight-normal has-text-centered-mobile pt-3 pr-4">
              <h1 className="is-size-3 has-text-left-desktop has-text-centeredhas-text-weight-semibold mb-2">
                MYPUBGSQUAD
                <span className="has-text-right">
                  <a href="http://www.mypubgsquad.com" target="_blank">
                    <FontAwesomeIcon
                      width="0"
                      icon={faExternalLinkAlt}
                      className="ml-3 px-1 social-media-button2"
                    />
                  </a>
                  <a
                    href="https://github.com/Zaytt/mypubgsquad"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      width="0"
                      icon={faGithub}
                      className="mx-2 px-1 social-media-button2"
                    />
                  </a>
                </span>
              </h1>
              <p>
                <span className="has-text-weight-semibold">
                  mypubgsquad.com
                </span>{' '}
                is a webite that provides information regarding a player's
                statistics inside the popular game{' '}
                <a
                  href="https://www.pubg.com/"
                  target="_blank"
                  className="tag is-warning has-text-weight-semibold"
                >
                  Playerunknown's Battlegrounds
                </a>
                .
              </p>
              <p className="mt-2">
                What differentiates this site from others similar to it, is that
                it takes the data of a group's most recent matches and processes
                that information, returning their statistics and performance as
                a group rather than as individuals.
              </p>
              <p className="my-2">
                During the development of this website, I collaborated on
                building new features for an API wrapper of the official{' '}
                <span className="has-text-weight-semibold">PUBG</span> API,
                which can be found{' '}
                <a
                  className="tag is-link is-outlined has-text-weight-semibold"
                  href="https://github.com/ickerio/pubg.js"
                  target="_blank"
                >
                  HERE
                </a>
                .
              </p>
              <span className="has-text-weight-semibold is-size-6">
                Built with:
              </span>
              <div className="has-text-centered container is-vertical-center">
                <div className="columns is-mobile is-multiline is-aligned-bottom">
                  <div className="column mx-1 ">
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <ReactLogo
                        width={48}
                        height={48}
                        className="underlined-on-hover"
                      />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://nodejs.org/en/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <NodeLogo width={48} height={48} />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <NextJSLogo width={72} height={72} />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://redux.js.org/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <ReduxLogo width={42} height={42} />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://getbootstrap.com/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <BootstrapLogo width={42} height={42} />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://www.heroku.com/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <HerokuLogo width={42} height={40} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}

const imgStyle = {
  // maxWidth: '500px',
  // maxHeight: 'auto',
};

const logoStyle1 = {
  width: 'auto',
  height: '64px',
};

const logoStyle2 = {
  width: 'auto',
  height: '48px',
};

const logoStyle3 = {
  width: 'auto',
  height: '32px',
};
