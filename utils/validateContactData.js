const Validator = require('validator');
const { isEmpty } = require('./isEmpty');

exports.validateMessage = (name, email, message) => {
  let errors = {};

  // Check for null, undefined, empty string or empty objects
  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  message = !isEmpty(message) ? message : '';

  // Validate Email
  Validator.normalizeEmail(email, { all_lowercase: true });
  if (!Validator.isEmail(email)) errors.email = 'Invalid email';

  // Validate length
  if (!Validator.isLength(name, { min: 1, max: 30 }))
    errors.name = 'Your name must be between 1 and 30 characters';
  if (!Validator.isLength(email, { min: 1, max: 100 }))
    errors.email = 'Your email must be between 1 and 100 characters';
  if (!Validator.isLength(message, { min: 1, max: 500 }))
    errors.message = 'Your message must be between 1 and 500 characters';

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
