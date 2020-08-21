const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Returns an array of posts from ButterCMS
router.get('/posts', async (req, res) => {
  // Get tag and page from req.query
  const { tag, page } = req.query;
  // Get posts from controller
  const response = await blogController.getPosts(tag, page);
  // If error, set appropiate status
  const status = response.error ? response.status : 200;

  res.status(status).json(response);
});

//Return all tags from ButterCMS
router.get('/tags', async (req, res) => {
  // Get tags from controller
  const response = await blogController.getAllTags();
  // If error, set appropiate status
  const status = response.error ? response.status : 200;
  // return response
  res.status(status).json(response);
});

// Return a post from ButterCMS
router.get('/post', async (req, res) => {
  // Get tag and page from req.query
  const { slug } = req.query;
  // Get the post from controller
  const response = await blogController.getSinglePost(slug);
  // return response
  res.json(response);
});

module.exports = router;
