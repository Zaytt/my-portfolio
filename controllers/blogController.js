const Butter = require('buttercms');
const butter = Butter(process.env.BUTTER_KEY);

const PAGE_SIZE = process.env.BLOG_PAGE_SIZE;

/**
 * Get posts from ButterCMS
 * @param {String} tag Filter the post list by tag
 * @param {Number} page The post list page number
 */
exports.getPosts = async (tag, page) => {
  try {
    // Define the posts parameters
    const params = { page: page, page_size: PAGE_SIZE };
    if (tag !== 'all') params.tag_slug = tag;

    // Get posts from ButterCMS
    const posts = await butter.post.list(params);

    const res = {
      sucess: true,
      data: posts.data,
    };

    return res;
  } catch (error) {
    return errorObjectPosts(error);
  }
};

/**
 * Search posts from ButterCMS
 * @param {String} query The query to search for in the posts
 * @param {Number} page The post list page number
 */
exports.searchPosts = async (query, page) => {
  try {
    // Define the search parameters
    const params = { page: page, page_size: PAGE_SIZE };

    // Get posts from ButterCMS
    const posts = await butter.post.search(query, params);

    const res = {
      sucess: true,
      data: posts.data,
    };

    return res;
  } catch (error) {
    return errorObjectPosts(error);
  }
};

/**
 * Get pages from ButterCMS
 */
exports.getPages = async (type) => {
  try {
    // Define the posts parameters
    const params = { page: 1, page_size: 10 };

    // Get posts from ButterCMS
    const pages = await butter.page.list(type, params);

    const res = {
      sucess: true,
      data: pages.data,
    };

    return res;
  } catch (error) {
    return errorObjectPosts(error);
  }
};

/**
 * Get posts from ButterCMS
 * @param {String} slug the slug of the post
 */
exports.getSinglePost = async (slug) => {
  try {
    const post = await butter.post.retrieve(slug);
    const res = {
      success: true,
      data: post.data,
    };
    return res;
  } catch (error) {
    return errorObjectSinglePost(error);
  }
};

/**
 * Get all the tags from ButterCMS
 */
exports.getAllTags = async () => {
  try {
    const tags = await butter.tag.list();
    return tags.data;
  } catch (error) {
    return [];
  }
};

/**
 * Returns an error object containing the error's message, status and data
 * @param {Error} error an Error obj
 */
function errorObjectPosts(error) {
  // Customize the message depending on the error status
  let message = 'Something happened while retrieving blog posts.';
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401:
        message = `Could not retrieve posts. Please try again later.`;
        break;
      case 404:
        message = `No posts found within that page.`;
        break;
      default:
        message = 'Something happened while retrieving blog posts.';
    }
  }

  return {
    success: false,
    error: error.message,
    status: error.response
      ? error.response.status
        ? error.response.status
        : 500
      : 500,
    message,
    data: {
      data: [],
      meta: {
        count: 0,
        next_page: null,
        previous_page: null,
      },
    },
  };
}

/**
 * Returns an error object containing the error's message, status and data
 * @param {Error} error an Error obj
 */
function errorObjectSinglePost(error) {
  // Customize the message depending on the error status
  let message = 'Something happened while retrieving the blog post.';
  if (error.response && error.response.status) {
    switch (error.response.status) {
      case 401:
        message = `Could not retrieve post. Please try again later.`;
        break;
      case 404:
        message = `No post found with that slug.`;
        break;
      default:
        message = 'Something happened while retrieving the blog post.';
    }
  }

  return {
    success: false,
    error: error.message,
    status: error.response
      ? error.response.status
        ? error.response.status
        : 500
      : 500,
    message,
    data: {},
  };
}
