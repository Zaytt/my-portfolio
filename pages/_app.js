import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import { BlogProvider } from '../context/blogContext';

import Layout from 'components/Layout';
import 'styles/styles.scss';
import 'animate.css/animate.min.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// ------ Stuff that makes font-awesome icons not jump out of place when loading
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
// ------ End of that stuff

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{`Ivan Chavez - Full Stack Web Developer`}</title>
        </Head>
        <BlogProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BlogProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(MyApp);
