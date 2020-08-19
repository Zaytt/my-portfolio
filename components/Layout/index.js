import React, { Component } from 'react';
import { withRouter } from 'next/router';
import _ from 'lodash';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';

class Layout extends Component {
  state = {
    width: 0,
    height: 0,
    mode: 'desktop',
  };

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      mode: window.innerWidth > 1087 ? 'desktop' : 'mobile',
    });
  };

  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener('resize', _.throttle(this.updateDimensions, 500));
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  };

  render() {
    const { router, children } = this.props;

    const renderHeader =
      router.pathname === '/' || router.pathname === '/blog' ? false : true;

    return (
      <React.Fragment>
        {renderHeader && <Header sticky={false} />}
        {children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
