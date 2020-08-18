// server.js
const { createServer } = require('http');
const next = require('next');
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create express server
  const server = express();

  /* Body Parser built-in to Express as of version 4.16 */
  server.use(express.json());

  // Its dangerous out there, wear a helmet
  server.use(helmet());

  // Prevent XSS Attacks
  server.use(xss());

  // Request rate limiting
  const apiLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 10, // limit each IP to 10 requests per windowMs
  });

  //  apply limiter to api requests
  server.use('/api/contact/', apiLimiter);

  // Import routes
  const contactRoutes = require('./routes/contact');
  const blogRoutes = require('./routes/blog');

  server.use('/api/contact', contactRoutes);
  server.use('/api/blog', blogRoutes);

  server.get('*', handle);

  createServer(server).listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
