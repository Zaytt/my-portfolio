import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Jump from 'react-reveal/Jump';

export default function Hero() {
  return (
    <section className="hero is-fullheight is-dark" id="home-hero">
      <SocialMediaBar />
      <div className="hero-body pt-0">
        <div className="container has-text-white">
          <h1
            className="has-text-weight-normal is-size-1-mobile"
            style={{ fontSize: '72px' }}
          >
            Hello,
          </h1>
          <h1
            className="has-text-weight-normal is-size-1-mobile"
            style={{ fontSize: '76px' }}
          >
            I'm{' '}
            <span className="has-text-primary has-text-weight-bold">Ivan</span>,
          </h1>
          <h1
            className="has-text-weight-normal is-size-2-mobile"
            style={{ fontSize: '72px' }}
          >
            a Full-Stack Web{' '}
            <span className="has-text-danger has-text-weight-bold">
              Developer
            </span>
            .
          </h1>
        </div>
      </div>
      <div className="hero-foot has-text-centered">
        <div className="container">
          <Jump duration={1234}>
            <Link
              className="has-text-white"
              to="about"
              // spy={true}
              smooth={true}
              offset={-110}
              duration={700}
            >
              <FontAwesomeIcon width="0" icon={faChevronDown} size="3x" />
            </Link>
          </Jump>
        </div>
      </div>
    </section>
  );
}
