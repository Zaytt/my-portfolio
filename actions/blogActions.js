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
    .then((res) => res.data);
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
