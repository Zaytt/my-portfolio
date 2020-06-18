// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create express server
  const server = express();
  /* Body Parser built-in to Express as of version 4.16 */
  server.use(express.json());

  // Import routes
  const contactRoutes = require('./routes/contact');
  server.use('/api/contact', contactRoutes);

  server.get('*', handle);

  createServer(server).listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
