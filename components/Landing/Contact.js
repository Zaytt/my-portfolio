import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { sendEmail } from '../../actions/contactActions';
import { validateMessage } from '../../utils/validateContactData';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: 'app',
    subjectText: 'Hello Ivan, I want you to make an app for me',
    message: '',
    loading: false,
    emailSent: false,
    emailError: false,
    errors: {},
  };

  onChange = (e) => {
    if (e.target.name === 'subject') {
      this.setState({
        [e.target.name]: e.target.value,
        subjectText: e.target.selectedOptions[0].text,
        errors: {
          ...this.state.errors,
          [e.target.name]: '',
        },
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        errors: {
          ...this.state.errors,
          [e.target.name]: '',
        },
      });
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subjectText, message } = this.state;
    const validation = validateMessage(name, email, message);

    // Validate message fields
    if (!validation.isValid) {
      this.setState({
        errors: { ...validation.errors },
      });
      return;
    }

    // If app is still processing an email, return
    if (this.state.loading) return;

    this.setState({ errors: {}, loading: true }, async () => {
      const res = await sendEmail(name, email, subjectText, message);

      if (res.success) {
        this.setState({ emailSent: true, loading: false });
      } else {
        this.setState({
          emailSent: true,
          emailError: true,
          loading: false,
          errors: { ...res.errors },
        });
      }
    });
  };

  render() {
    const {
      name,
      email,
      subject,
      message,
      emailSent,
      emailError,
      loading,
      errors,
    } = this.state;
    let buttonText = 'SEND IT';
    let buttonIcon = faPaperPlane;

    if (emailSent) {
      if (emailError) {
        buttonText = 'SOMETHING HAPPENED';
        buttonIcon = faTimes;
      } else {
        buttonText = 'MESSAGE SENT';
        buttonIcon = faCheck;
      }
    }

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
                <br />
              </h2>
            </Slide>
          </div>
          <Slide right delay={900} duration={900}>
            <div className="columns is-centered mt-5">
              <div className="column is-narrow is-two-fifths-desktop is-half-tablet">
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <label className="label has-text-white">Name</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={this.onChange}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon width="1em" icon={faUser} />
                      </span>
                      {errors.name && (
                        <span className="icon is-small is-right">
                          <FontAwesomeIcon
                            width="1em"
                            icon={faExclamationTriangle}
                          />
                        </span>
                      )}
                    </div>
                    {errors.name && (
                      <p className="help is-danger">{errors.name}</p>
                    )}
                  </div>
                  <div className="field">
                    <label className="label has-text-white">Email</label>
                    <div className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="text"
                        placeholder="Your Email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                      />
                      <span className="icon is-small is-left">
                        <FontAwesomeIcon width="1em" icon={faEnvelope} />
                      </span>
                      {errors.email && (
                        <span className="icon is-small is-right">
                          <FontAwesomeIcon
                            width="1em"
                            icon={faExclamationTriangle}
                          />
                        </span>
                      )}
                    </div>
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
                  </div>
                  <div className="field">
                    <label className="label has-text-white">Subject</label>
                    <div className="control">
                      <div className="select is-fullwidth">
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

                  <div className="field">
                    <label className="label has-text-white">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        placeholder="Your Message"
                        name="message"
                        value={message}
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="help is-danger">{errors.message}</p>
                    )}
                  </div>
                  <div className="control has-text-centered mb-6 pb-5">
                    <button
                      // disabled={emailSent ? true : false}
                      type="submit"
                      className={`button is-danger has-text-weight-semibold mt-5 is-fullwidth ${
                        loading ? 'is-loading' : ''
                      }`}
                    >
                      <FontAwesomeIcon
                        width="1em"
                        icon={buttonIcon}
                        className="mr-2"
                      />
                      {buttonText}
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
