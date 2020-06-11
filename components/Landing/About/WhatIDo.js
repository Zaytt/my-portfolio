import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import SkillCard from './SkillCard';
import Fade from 'react-reveal/Fade';

export default function WhatIDo() {
  const frontEndText = (
    <React.Fragment>
      Dynamic, responsive and fast user interfaces using{' '}
      <span className="has-text-primary has-text-weight-semibold">
        React.js
      </span>
      , Redux, Bootstrap and Bulma.
    </React.Fragment>
  );

  const backEndText = (
    <React.Fragment>
      Solid business logic to power your applications using{' '}
      <span className="has-text-danger has-text-weight-semibold">Node.js</span>{' '}
      and MongoDB or MySQL.
    </React.Fragment>
  );

  const apiText = (
    <React.Fragment>
      RESTful API building with Java or{' '}
      <span className="has-text-danger has-text-weight-semibold">
        Express.js
      </span>{' '}
      .
    </React.Fragment>
  );

  const cloudText = (
    <React.Fragment>
      Deployment of Node.js apps, React.js apps and databases to leading cloud
      platforms such as Heroku, Digital Ocean and{' '}
      <span className="has-text-primary has-text-weight-semibold">
        Amazon AWS
      </span>
      .
    </React.Fragment>
  );

  return (
    <div className="mt-6">
      <div className="has-text-centered mb-6">
        <h1 className="title has-text-weight-semibold">WHAT I DO</h1>
      </div>

      <div className="columns is-centered">
        <Fade delay={360} duration={1080}>
          <div className="column is-one-quarter has-text-centered">
            <SkillCard
              icon="/static/assets/icons/server_100.png"
              title="Back-End Development"
              text={backEndText}
            />
          </div>
        </Fade>

        <Fade delay={720} duration={1080}>
          <div className="column is-one-quarter has-text-centered">
            <SkillCard
              icon="/static/assets/icons/coding_100x100.png"
              title="Front-End Programming"
              text={frontEndText}
            />
          </div>
        </Fade>
        <Fade delay={1080} duration={1080}>
          <div className="column is-one-quarter has-text-centered">
            <SkillCard
              title={`API Development`}
              text={apiText}
              icon="/static/assets/icons/api_100.png"
            />
          </div>
        </Fade>
        <Fade delay={1440} duration={1080}>
          <div className="column is-one-quarter has-text-centered">
            <SkillCard
              title="Cloud Integration"
              icon="/static/assets/icons/cloud_100.png"
              text={cloudText}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
