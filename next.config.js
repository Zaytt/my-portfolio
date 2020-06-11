const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};

module.exports = withPlugins([withCss, withSass, withImages], nextConfig);
