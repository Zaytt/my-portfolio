import React, { Component } from 'react';
import { withRouter } from 'next/router';
import throttle from 'lodash.throttle';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import Banner from './Header/Banner';

class Layout extends Component {
  state = {
    width: 0,
    height: 0,
    isMobile: 'desktop',
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 769 ? true : false,
    });
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', throttle(this.updateDimensions, 500));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    const { router, children } = this.props;
    const { isMobile } = this.state;
    const renderHeader =
      router.pathname === '/' || router.pathname === '/blog' ? false : true;

    return (
      <React.Fragment>
        {renderHeader && !isMobile && <Banner />}
        {renderHeader && <Header sticky={false} />}
        {children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
