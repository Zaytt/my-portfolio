import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import SkillCard from './SkillCard';
import Fade from 'react-reveal/Fade';

export default function WhatIDo() {
  const frontEndText = (
    <React.Fragment>
      Dynamic, responsive and fast user interfaces using{' '}
      <span className="has-text-weight-semibold">React.js</span>,{' '}
      <span className="has-text-weight-semibold">Redux</span>,{' '}
      <span className="has-text-weight-semibold">Bootstrap</span> and{' '}
      <span className=" has-text-weight-semibold">Bulma</span>.
    </React.Fragment>
  );

  const backEndText = (
    <React.Fragment>
      Solid business logic to power your applications using{' '}
      <span className="has-text-weight-semibold">Node.js</span> and{' '}
      <span className="has-text-weight-semibold">MongoDB</span> or{' '}
      <span className="has-text-weight-semibold">MySQL</span>.
    </React.Fragment>
  );

  const apiText = (
    <React.Fragment>
      RESTful API building with{' '}
      <span className=" has-text-weight-semibold">Java</span> or{' '}
      <span className=" has-text-weight-semibold">Express.js</span>.
    </React.Fragment>
  );

  const cloudText = (
    <React.Fragment>
      Deployment of web applications and databases to leading cloud platforms
      such as <span className=" has-text-weight-semibold">Heroku</span>,{' '}
      <span className=" has-text-weight-semibold">Digital Ocean</span> and{' '}
      <span className=" has-text-weight-semibold">Amazon AWS</span>.
    </React.Fragment>
  );

  const isMobile = process.browser
    ? window.innerWidth <= 760
      ? true
      : false
    : false;
  return (
    <section className="mt-6 section" id="whatido">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h1 className="title has-text-weight-semibold">
            <span className="underline-bold">WHAT I DO</span>
          </h1>
        </div>

        <div className="columns is-centered mt-6 py-6">
          <Fade delay={0} duration={960}>
            <div className="column is-one-quarter has-text-centered">
              <SkillCard
                icon="/assets/icons/server_100.png"
                title="Back-End Development"
                text={backEndText}
              />
            </div>
          </Fade>

          <Fade delay={isMobile ? 0 : 360} duration={960}>
            <div className="column is-one-quarter has-text-centered">
              <SkillCard
                icon="/assets/icons/coding_100x100.png"
                title="Front-End Programming"
                text={frontEndText}
              />
            </div>
          </Fade>
          <Fade delay={isMobile ? 0 : 720} duration={960}>
            <div className="column is-one-quarter has-text-centered">
              <SkillCard
                title={`API Development`}
                text={apiText}
                icon="/assets/icons/api_100.png"
              />
            </div>
          </Fade>
          <Fade delay={isMobile ? 0 : 1080} duration={960}>
            <div className="column is-one-quarter has-text-centered">
              <SkillCard
                title="Cloud Integration"
                icon="/assets/icons/cloud_100.png"
                text={cloudText}
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
