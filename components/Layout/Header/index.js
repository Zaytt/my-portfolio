import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import ActiveLink from 'components/ActiveLink';
import styles from './styles';
import LogoDark from 'assets/Logo.svg';

const navBarStyle = {
  borderBottom: '3px solid hsl(171, 100%, 41%)',
  // background: '#1b242f',
  // borderBottom: '3px solid hsl(171, 100%, 29%)',
};

export default function Navbar() {
  return (
    <nav
      className={classnames(
        'navbar',
        'has-background-black-ter',
        'is-transparent'
      )}
      style={navBarStyle}
    >
      <div className={'navbar-menu'}>
        <div className="navbar-end">
          <ActiveLink
            href="#home"
            activeClass="has-text-white"
            className="navbar-item has-text-white is-size-6 ml-5 is-uppercase has-text-weight-normal"
            alt="home"
            title="Home"
          />
          <ActiveLink
            href="#about"
            activeClass="has-text-white"
            className="navbar-item has-text-white is-size-6 ml-5 is-uppercase has-text-weight-normal"
            alt="about"
            title="About"
          />
          <ActiveLink
            href="#projects"
            activeClass="active"
            className="navbar-item has-text-white is-size-6 ml-5 is-uppercase has-text-weight-normal"
            alt="projects"
            title="Projects"
          />
          <ActiveLink
            href="#contact"
            activeClass="active"
            className="navbar-item has-text-white is-size-6 ml-5 mr-6 is-uppercase has-text-weight-normal"
            alt="contact"
            title="Contact"
          />
        </div>
      </div>
    </nav>
  );
}
