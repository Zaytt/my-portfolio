import React, { useRef } from 'react';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';

const navBarStyle = {
  borderBottom: '3px solid hsl(171, 100%, 41%)',
};

function Header({ router }) {
  const [isActive, setisActive] = React.useState(false);

  const portfolioLinks = (
    <React.Fragment>
      <span className="navbar-item">
        <Link
          activeClass="navbar-item-active"
          className="has-text-white"
          to="about"
          spy={true}
          smooth={true}
          offset={-110}
          duration={700}
        >
          ABOUT
        </Link>
      </span>
      <span className="navbar-item ">
        <Link
          activeClass="navbar-item-active"
          className="has-text-white"
          to="whatido"
          spy={true}
          smooth={true}
          offset={-100}
          duration={700}
        >
          WHAT I DO
        </Link>
      </span>
      <span className="navbar-item ">
        <Link
          activeClass="navbar-item-active"
          className="has-text-white"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-120}
          duration={700}
        >
          PORTFOLIO
        </Link>
      </span>
      <span className="navbar-item ">
        <Link
          activeClass="navbar-item-active"
          className="has-text-white"
          to="contact"
          spy={true}
          smooth={true}
          offset={-75}
          duration={700}
        >
          CONTACT
        </Link>
      </span>
      <span className="navbar-separator"></span>
      <span className="navbar-item">
        <NextLink href="/blog">
          <span className="navbar-item-text">BLOG</span>
        </NextLink>
      </span>
    </React.Fragment>
  );

  const blogLinks = (
    <React.Fragment>
      <span className="navbar-item">
        <NextLink href="/">
          <span className="navbar-item-text">MY PORTFOLIO</span>
        </NextLink>
      </span>
      <span className="navbar-separator"></span>
      <span className="navbar-item ">
        <NextLink href="/blog">
          <span className="navbar-item-text">BLOG</span>
        </NextLink>
      </span>
    </React.Fragment>
  );

  return (
    <nav
      className="navbar sticky-navbar has-background-black-ter is-dark"
      style={navBarStyle}
    >
      <div className="container px-3">
        <div className="navbar-brand">
          <span className="navbar-item ">
            <Link
              className="has-text-white"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <NextLink href="/">
                <div
                  className="navbar-item has-text-weight-semibold is-size-4"
                  href="/"
                >
                  <span className="has-text-danger">{`{ `}</span>{' '}
                  <span className="has-text-primary">{`ivan`}</span>
                  <span className="has-text-white">{`chavez`}</span>
                  <span className="has-text-danger">{` }`}</span>
                </div>
              </NextLink>
            </Link>
          </span>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active ' : ''} `}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
            onClick={() => {
              setisActive(!isActive);
            }}
          >
            <span aria-hidden="true" className="has-text-grey-lighter"></span>
            <span aria-hidden="true" className="has-text-grey-lighter"></span>
            <span aria-hidden="true" className="has-text-grey-lighter"></span>
          </a>
        </div>

        <div
          className={`navbar-menu has-background-black-ter ${
            isActive ? 'is-active ' : ''
          }`}
          id="navbarMenu"
          style={isActive ? navBarStyle : {}}
        >
          <div className="navbar-end has-background-black-ter is-dark">
            {router.pathname === '/' ? portfolioLinks : blogLinks}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Header);
