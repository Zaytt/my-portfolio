import axios from 'axios';

export async function sendEmail(name, email, subject, message) {
  return await axios
    .post('/api/contact', { name, email, subject, message })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
}
