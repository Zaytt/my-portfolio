import React, { useState, useEffect, useMemo } from 'react';
import { getBlogPosts, getBlogTags } from '../actions/blogActions';

const BlogContext = React.createContext();

/**
 * @name BlogProvider
 * @description Sets up the BlogContext
 * @param {*} props
 */
export function BlogProvider(props) {
  // Define the values that will be stored in the context
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedPage, setSelectedPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(0);
  const [tags, setTags] = useState(['All']);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * @name setTag
   * @description Set the selectedTag as well as loadingPosts
   * @param {String} tag
   */

  async function setTag(tag) {
    setSelectedTag(tag);
    setLoadingPosts(true);
  }

  /**
   * @name setPage
   * @description Set the page as well as loadingPosts
   * @param {Number} page
   */

  async function setPage(page) {
    setSelectedPage(page);
    setLoadingPosts(true);
  }

  /**
   * @name getPosts
   * @description Gets the posts from butterCMS.
   * If a tag other than 'all' is selected, it filters the posts by that tag
   * @param {Number} page the page of the posts
   * @param {Number} pageSize the number of posts per page
   * @returns {Array<{Object}>} An array of Objects containing the Posts
   */

  async function getPosts(pageSize = 9) {
    // Clean the error message
    setErrorMessage(null);

    const tag = selectedTag !== 'all' ? selectedTag : null;

    const res = await getBlogPosts(tag, selectedPage);
    if (!res.error) {
      setLoadingPosts(false);
      setPosts(res.data);
      setPostCount(res.meta.count);
      setNextPage(res.meta.next_page);
      setPreviousPage(res.meta.previous_page);
      return res.data;
    } else {
      setLoadingPosts(false);
      setPosts([]);
      setPostCount(0);
      setNextPage(null);
      setPreviousPage(null);
      setErrorMessage(res.message);
      return res;
    }
  }

  /**
   * @name getAllTags
   * @description Gets all the used tags from butterCMS.
   * @returns {Array<{Object}>} An array of Objects containing the Tags
   */
  async function getAllTags() {
    try {
      const tags = await getBlogTags();
      console.log(tags);
      const allTag = { name: 'All', slug: 'all' };
      setTags([allTag, ...tags]);

      return [allTag, ...tags];
    } catch (error) {
      setTags([]);
      return error;
    }
  }

  // Use a memo to store the values.
  const value = useMemo(() => {
    return {
      selectedTag,
      selectedPage,
      loadingPosts,
      posts,
      tags,
      postCount,
      nextPage,
      previousPage,
      setTag,
      setPage,
      setLoadingPosts,
      getPosts,
      getAllTags,
    };
  }, [
    selectedTag,
    selectedPage,
    loadingPosts,
    posts,
    tags,
    postCount,
    nextPage,
    previousPage,
  ]);

  return <BlogContext.Provider value={value} {...props} />;
}

/**
 * @name useBlog
 * @description function to consume the BlogContext
 */

export function useBlog() {
  const context = React.useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be inside BlogContext Provider ');
  }

  return context;
}
