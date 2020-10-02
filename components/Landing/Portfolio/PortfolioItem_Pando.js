import React from 'react';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NextJSLogo from '../../Logos/next_logo';
import ReactLogo from '../../Logos/react_logo';
import NodeLogo from '../../Logos/node_logo';
import BulmaLogo from '../../Logos/bulma_logo';
import MongoLogo from '../../Logos/mongo_logo';

export default function PortfolioItem({}) {
  return (
    <Fade left>
      <div
        className="container has-background-white-ter"
        style={{ borderRadius: '25px' }}
      >
        <div className="columns is-centered is-desktop">
          <div className="column has-text-right-desktop has-text-centered is-half-desktop">
            <a href="http://www.pandomap.com" target="_blank">
              {/* <Fade left> */}
              <figure className="image image is-3by2">
                <img src="/assets/portfolio/pandomap.png" style={imgStyle} />
              </figure>
              {/* </Fade> */}
            </a>
          </div>

          <div className="column is-half-desktop is-narrow">
            {/* <Fade right> */}
            <div className="container has-text-weight-normal has-text-centered-mobile pt-3 px-5">
              <h1 className="is-size-3 has-text-left-desktop has-text-centeredhas-text-weight-semibold mb-2">
                Pando
                <span className="has-text-right">
                  <a href="http://www.pandomap.com" target="_blank">
                    <FontAwesomeIcon
                      width="0"
                      icon={faExternalLinkAlt}
                      className="ml-3 px-1 social-media-button2"
                    />
                  </a>
                </span>
              </h1>
              <p>
                I built{' '}
                <span className="has-text-weight-semibold">pandomap.com</span>{' '}
                for{' '}
                <a
                  href="https://groundbreakershub.org/"
                  target="_blank"
                  className="has-text-primary has-text-weight-semibold"
                >
                  The Groundbreakers Network
                </a>
                .
              </p>
              <p className="mt-2">
                Pando is a web app that aims to help people locate helpful
                resources during these Pandemic times. From Shelter, to Meal
                Relief and Healthcare, Pando provides the location and contact
                information of thousands of help centers.
              </p>
              <p className="my-2">
                For ease of use, Pando allows users to sign up through Facebook,
                Google or a simple username and password. After that, Pando
                locates the user's position in the globe and shows him the
                resources that are near him. The user can also add a new
                resource if he knows one or fill in missing information about an
                already existing resource.
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
                      href="https://bulma.io/"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <BulmaLogo width={48} height={48} />
                    </a>
                  </div>
                  <div className="column mx-1 ">
                    <a
                      href="https://www.mongodb.com"
                      target="_blank"
                      className="underlined-on-hover"
                    >
                      <MongoLogo width={110} height={48} />
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
