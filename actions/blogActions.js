import axios from 'axios';

/**
 * @name getPosts
 * @description Requests the backend for the posts from ButterCMS
 * @param {String} tag The sender's name
 * @param {Number} page The sender's email
 * @returns {Object} an Object containing the meta info of the post and an array of posts
 */
export async function getBlogPosts(tag, page) {
  return await axios
    .get('/api/blog/posts', { params: { tag, page } })
    .then((res) => res.data)
    .catch((error) => error.response.data);
}

/**
 * @name searchBlogPosts
 * @description Requests the backend for the posts from ButterCMS that match the given query
 * @param {String} query The sender's name
 * @param {Number} page The sender's email
 * @returns {Object} an Object containing the meta info of the post and an array of posts
 */
export async function searchBlogPosts(query, page) {
  return await axios
    .get('/api/blog/search', { params: { query, page } })
    .then((res) => res.data)
    .catch((error) => error.response.data);
}

/**
 * @name getAllTags
 * @description Requests the backend for the all tags in the posts from ButterCMS
 * @returns {[Object]} An array of Objects containing the Tag and its slug
 */
export async function getBlogTags() {
  return await axios.get('/api/blog/tags').then((res) => {
    return res.data.data;
  });
}

/**
 * @name getPost
 * @description Requests the backend for a single post from ButterCMS
 * @param {String} slug slug of the post
 * @returns {Object} an Object containing the info of the post
 */
export async function getSingleBlogPost(slug) {
  return await axios
    .get('/api/blog/post', { params: { slug } })
    .then((res) => res.data)
    .catch((error) => error.response.data);
}
