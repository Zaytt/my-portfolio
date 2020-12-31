import React from 'react';
import NextJSLogo from '../../Logos/next_logo';
import ReactLogo from '../../Logos/react_logo';
import NodeLogo from '../../Logos/node_logo';
import ReduxLogo from '../../Logos/redux_logo';
import BootstrapLogo from '../../Logos/bootstrap_logo';
import HerokuLogo from '../../Logos/heroku_logo';
import BulmaLogo from '../../Logos/bulma_logo';
import MongoLogo from '../../Logos/mongo_logo';

const techLogos = {
  react: {
    icon: <ReactLogo />,
    url: 'https://reactjs.org/',
  },
  next: { icon: <NextJSLogo />, url: 'https://nextjs.org' },
  node: { icon: <NodeLogo />, url: 'https://nodejs.org' },
  redux: { icon: <ReduxLogo />, url: 'https://redux.js.org/' },
  bootstrap: { icon: <BootstrapLogo />, url: 'https://getbootstrap.com' },
  heroku: { icon: <HerokuLogo />, url: 'https://heroku.com' },
  bulma: { icon: <BulmaLogo />, url: 'https://bulma.io' },
  mongo: { icon: <MongoLogo />, url: 'https://www.mongodb.com' },
};
function TechStackList({ techs }) {
  return (
    <div>
      <span className="has-text-weight-semibold is-size-6">Built with:</span>
      <div className="has-text-centered container is-vertical-center mt-3">
        <div className="columns is-mobile is-multiline is-aligned-bottom">
          {techs.map((tech) => {
            return (
              <div className="column mx-1 ">
                <a
                  href={techLogos[tech].url}
                  target="_blank"
                  className="underlined-on-hover"
                >
                  {techLogos[tech].icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TechStackList;
