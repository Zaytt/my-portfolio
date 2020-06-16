import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: 'app',
    message: '',
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, subject, message } = this.state;
    return (
      <section className="has-background-dark py-6" id="contact">
        <div className="container is-fluid">
          <div className="has-text-centered ">
            <Slide left duration={900}>
              <h1 className="title has-text-weight-bold has-text-white">
                CONTACT
              </h1>
            </Slide>

            <Slide right delay={300} duration={900}>
              <div className="columns is-centered is-mobile">
                <div className="column is-one-fifth-desktop is-one-quarter-tablet is-half-mobile">
                  <hr className="has-background-danger my-0" />{' '}
                </div>
              </div>
            </Slide>
            <Slide left delay={600} duration={900}>
              <h2 className="has-text-white">
                Do you have a{' '}
                <span className="has-text-primary has-text-weight-semibold">
                  question
                </span>
                ?
                <br />
                Would you like to build something awesome{' '}
                <span className="has-text-danger has-text-weight-semibold">
                  together
                </span>
                ?
              </h2>
            </Slide>
          </div>
          <Slide right delay={900} duration={900}>
            <div className="columns is-centered mt-5">
              <div className="column is-narrow is-two-fifths-desktop is-half-tablet">
                <form>
                  <div class="field">
                    <label class="label has-text-white">Name</label>
                    <div class="control has-icons-left">
                      <input
                        class="input"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label has-text-white">Email</label>
                    <div class="control has-icons-left ">
                      <input
                        class="input"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                      />
                      <span class="icon is-small is-left">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label has-text-white">Subject</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select
                          name="subject"
                          onChange={this.onChange}
                          value={subject}
                        >
                          <option value="app">
                            Hello Ivan, I want you to make an app for me
                          </option>
                          <option value="hire">
                            Hey Ivan! I would like to hire you
                          </option>
                          <option value="love">
                            I... I think I'm in love with you 😍
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label has-text-white">Message</label>
                    <div class="control">
                      <textarea
                        class="textarea"
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                  </div>
                  <div class="control has-text-centered mb-6 pb-5">
                    <button class="button is-danger has-text-weight-semibold mt-5  is-fullwidth">
                      <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                      SEND IT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    );
  }
}
