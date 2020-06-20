const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');
const { validateMessage } = require('../utils/validateContactData');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // return res.status(200).json({ success: true });
  // Validate the message fields
  const validate = validateMessage(name, email, message);

  // If fields are invalid, return errors
  if (!validate.isValid) {
    return res.status(400).json({
      success: false,
      data: 'invalid contact form fields',
      errors: { ...validate.errors },
    });
  }

  // If fields are ok, send email
  const emailSent = await sendEmail({
    name,
    email,
    subject,
    message,
  });

  if (emailSent) {
    res.status(200).json({
      success: true,
      data: 'Email Sent',
    });
  } else {
    res.status(500).json({
      success: false,
      data: 'Email Not Sent',
    });
  }
});

module.exports = router;
