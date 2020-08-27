import React from 'react';
import { withRouter } from 'next/router';
import NextLink from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
import SearchBar from './SearchBar';

const navBarStyle = {
  borderBottom: '3px solid hsl(171, 100%, 41%)',
};

const TABLET_WIDTH = 769;

function Header({ router, sticky }) {
  const [isActive, setisActive] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  // Use effect to check when is mobile
  React.useEffect(() => {
    setIsMobile(window.innerWidth < TABLET_WIDTH);
    window.addEventListener(
      'resize',
      _.throttle(() => setIsMobile(window.innerWidth < TABLET_WIDTH), 500)
    );

    return () => {
      window.removeEventListener(
        'resize',
        () => setIsMobile(window.innerWidth < TABLET_WIDTH),
        500
      );
    };
  }, []);

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
      {!isMobile && <span className="navbar-separator" />}
      <span className="navbar-item">
        <NextLink href="/blog">
          <a className="navbar-item-text has-text-white">BLOG</a>
        </NextLink>
      </span>
    </React.Fragment>
  );

  const blogLinks = (
    <React.Fragment>
      <span className="navbar-item">
        <NextLink href="/">
          <a className="navbar-item-text has-text-white">MY PORTFOLIO</a>
        </NextLink>
      </span>
      {!isMobile && <span className="navbar-separator" />}
      <span className="navbar-item ">
        <NextLink href="/blog">
          <a className="navbar-item-text has-text-white">BLOG</a>
        </NextLink>
      </span>
    </React.Fragment>
  );

  return (
    <nav
      className={`navbar main-navbar ${
        sticky ? 'sticky-navbar' : ''
      } has-background-black-ter is-dark`}
      style={navBarStyle}
    >
      <div className="container px-3" id={sticky ? '' : 'top'}>
        <div className="navbar-brand">
          <span className="navbar-item ">
            <NextLink href={router.pathname === '/' ? '/' : '/blog'}>
              <a className="navbar-item has-text-weight-semibold is-size-4">
                <span className="has-text-danger">{`{ `}</span>{' '}
                <span className="has-text-primary">{`ivan`}</span>
                <span className="has-text-white">{`chavez`}</span>
                <span className="has-text-danger">{` }`}</span>
              </a>
            </NextLink>
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
          {router.pathname === '/' ? '' : <SearchBar />}
          <div className="navbar-end has-background-black-ter is-dark">
            {router.pathname === '/' ? portfolioLinks : blogLinks}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Header);
