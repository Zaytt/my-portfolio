import React, { useRef } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const navBarStyle = {
  borderBottom: '3px solid hsl(171, 100%, 41%)',
};

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);

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
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              <div
                className="navbar-item has-text-weight-semibold is-size-4"
                href="#home"
              >
                <span className="has-text-danger">{`{ `}</span>{' '}
                <span className="has-text-primary">{`ivan`}</span>
                <span className="has-text-white">{`chavez`}</span>
                <span className="has-text-danger">{` }`}</span>
              </div>
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
          style={navBarStyle}
        >
          <div className="navbar-end has-background-black-ter is-dark">
            <span className="navbar-item ">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
