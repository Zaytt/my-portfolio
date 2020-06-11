import React from 'react';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <div className="container">
      {/* <h1
            className="is-size-2 has-text-centered has-text-weight-semibold mb-6"
            style={{ textDecoration: 'underline' }}
          >
            About
          </h1> */}

      <div className="columns is-centered  is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column has-text-right">
          <Fade left>
            {/* <figure className="image has-text-centered"> */}
            <img src="/static/assets/me-HD3.jpg" style={imgStyle} />
            {/* </figure> */}
          </Fade>
        </div>

        <div className="column is-three-fifths is-narrow">
          <Fade right>
            <div className="card-content has-text-left has-text-weight-normal">
              <h1 className="title has-text-left has-text-weight-semibold mb-6">
                ABOUT ME
              </h1>
              <h2 className="subtitle">
                <p>
                  I am{' '}
                  <span className="has-text-weight-semibold">Ivan Chavez</span>
                  {', '}a Software{' '}
                  <span className="has-text-primary has-text-weight-semibold">
                    Engineer
                  </span>{' '}
                  from Leon,{' '}
                  <span className="has-text-danger has-text-weight-semibold">
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
                  <span className="has-text-primary has-text-weight-semibold">
                    React.js
                  </span>{' '}
                  and{' '}
                  <span className="has-text-danger has-text-weight-semibold">
                    Node.js.
                  </span>
                </p>
                <div class="mt-5">
                  <button class="button is-outlined is-primary mr-2 has-text-weight-semibold">
                    CONTACT ME
                  </button>
                  <button class="button is-outlined is-danger has-text-weight-semibold">
                    SEE PORTFOLIO
                  </button>
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
