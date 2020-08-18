import axios from 'axios';

/**
 * @name sendEmail
 * @description Sends an email to the email defined as EMAIL in .env
 * @param {String} name The sender's name
 * @param {String} email The sender's email
 * @param {String} subject Subject of the email
 * @param {String} message The email's content
 */
export async function sendEmail(name, email, subject, message) {
  return await axios
    .post('/api/contact', { name, email, subject, message })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return {
        success: false,
        status: err.response.status,
        statusText: err.response.statusText,
        data: err.response.data,
      };
    });
}
