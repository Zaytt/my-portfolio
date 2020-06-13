import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function About() {
  return (
    <div className="container" id="about">
      <div className="columns is-centered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column has-text-right has-text-centered-mobile is-half-tablet is-one-third">
          <Fade left>
            {/* <figure className="image has-text-centered"> */}
            <img src="/static/assets/me-HD3.jpg" style={imgStyle} />
            {/* </figure> */}
          </Fade>
        </div>

        <div className="column  is-half is-narrow is-three-fifths-tablet">
          <Fade right>
            <div className="container is-fluid has-text-weight-normal has-text-centered-mobile pt-1">
              <h1 className="title has-text-left has-text-centered-mobile has-text-weight-semibold mb-6">
                ABOUT ME
              </h1>
              <h2 className="subtitle">
                <p>
                  I am{' '}
                  <span className="has-text-weight-semibold">Ivan Chavez</span>
                  {', '}a Software{' '}
                  <span className="has-text-primary-medium has-text-weight-semibold">
                    Engineer
                  </span>{' '}
                  from Leon,{' '}
                  <span className="has-text-danger-medium has-text-weight-semibold">
                    Mexico
                  </span>
                  .
                </p>
              </h2>
              <div className="is-size-5 mb-1"></div>
              <div className="is-size-6">
                <p>
                  I've had a passion for coding and problem solving since
                  highschool.
                </p>
                <p>
                  I love coming up with solutions in the form of clean, readable
                  code that translates into enjoyable user experiences.
                </p>
                <br />
                <p>
                  My latest experience has been focused on building single-page
                  applications with{' '}
                  <span className="has-text-primary-medium has-text-weight-semibold">
                    React.js
                  </span>{' '}
                  and{' '}
                  <span className="has-text-danger-medium has-text-weight-semibold">
                    Node.js.
                  </span>
                </p>

                <div class="mt-5">
                  <Link
                    className="has-text-white"
                    to="contact"
                    smooth={true}
                    offset={-75}
                    duration={700}
                  >
                    <button class="button is-info is-outlined mr-2 has-text-weight-semibold">
                      CONTACT ME
                    </button>
                  </Link>
                  <Link
                    className="has-text-white"
                    to="portfolio"
                    smooth={true}
                    offset={-120}
                    duration={700}
                  >
                    <button class="button is-outlined is-danger has-text-weight-semibold">
                      SEE PORTFOLIO
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

const imgStyle = {
  width: '300px',
  height: 'auto',
  borderRadius: '25px',
  boxShadow: '2px 2px 4px 0px rgba(0,0,0,0.75)',
};
