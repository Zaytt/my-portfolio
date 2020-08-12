import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function About() {
  return (
    <div className="container" id="about">
      <div className="columns is-centered ">
        <div className="column has-text-right has-text-centered-mobile is-half-tablet is-one-third">
          <Fade left>
            {/* <figure className="image has-text-centered"> */}
            <img src="/assets/me/me.jpg" style={imgStyle} />
            {/* </figure> */}
          </Fade>
        </div>

        <div className="column  is-half is-narrow is-three-fifths-tablet">
          <Fade right>
            <div className="container is-fluid has-text-weight-normal has-text-centered-mobile pt-1">
              <h1 className="title has-text-left has-text-centered-mobile has-text-weight-semibold mb-6">
                <span className="underline-bold">ABOUT ME</span>
              </h1>
              <h2 className="subtitle">
                <p>
                  I am{' '}
                  <span className="has-text-weight-semibold">Ivan Chavez</span>
                  {', '}a Software{' '}
                  {/* <span className="has-text-primary-medium has-text-weight-semibold"> */}
                  Engineer
                  {/* </span> */} from Leon,{' '}
                  {/* <span className="has-text-danger-medium has-text-weight-semibold"> */}
                  Mexico
                  {/* </span> */}.
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
                  <span className=" has-text-weight-semibold">React.js</span>{' '}
                  and <span className="has-text-weight-semibold">Node.js.</span>
                </p>

                <div className="mt-5">
                  <Link
                    className="has-text-white "
                    to="contact"
                    smooth={true}
                    offset={-75}
                    duration={700}
                  >
                    <button className="button is-info mr-2 has-text-weight-semibold is-fullwidth-mobile">
                      CONTACT ME
                    </button>
                  </Link>
                  <Link
                    className="has-text-white "
                    to="portfolio"
                    smooth={true}
                    offset={-120}
                    duration={700}
                  >
                    <button className="button is-outlined is-danger has-text-weight-semibold is-fullwidth-mobile">
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
