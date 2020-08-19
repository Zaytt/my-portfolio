const Butter = require('buttercms');

const butter = Butter(process.env.BUTTER_KEY);

const PAGE_SIZE = 9;

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
    return errorObject(error);
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
    return errorObject(error);
  }
};

/**
 * Returns an error object containing the error's message, status and data
 * @param {Error} error an Error obj
 */
function errorObject(error) {
  // Customize the message depending on the error status
  let message;
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

  return {
    success: false,
    error: error.message,
    status: error.response.status,
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
