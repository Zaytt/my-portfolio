import React, { useState, useEffect, useMemo } from 'react';
import {
  getBlogPosts,
  getBlogTags,
  searchBlogPosts,
} from '../actions/blogActions';
import { BLOG_PAGE_SIZE } from '../utils/constants';

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
  const [query, setQuery] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  /**
   * @name setTag
   * @description Set the selectedTag as well as loadingPosts
   * @param {String} tag
   */

  async function setTag(tag) {
    setLoadingPosts(true);
    setQuery(null);
    setSelectedTag(tag);
    setSelectedPage(1);
    setQuery(null);
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
   * @name setQuery
   * @description Set the search query as well as loadingPosts
   * @param {Number} query
   */

  async function setSearchQuery(query) {
    setLoadingPosts(true);
    setQuery(query);
    setSelectedPage(1);
    setSelectedTag(null);
  }

  /**
   * @name getPosts
   * @description Gets the posts from butterCMS.
   * If a tag other than 'all' is selected, it filters the posts by that tag
   * @returns {Array<{Object}>} An array of Objects containing the Posts
   */

  async function getPosts() {
    // Clean the error message
    setErrorMessage(null);

    const tag = selectedTag !== 'all' ? selectedTag : null;

    // Get the blog posts from backend
    const res = await getBlogPosts(tag, selectedPage);

    // Set provider values
    setLoadingPosts(false);
    setPosts(res.data.data);
    setPostCount(res.data.meta.count);
    setNextPage(res.data.meta.next_page);
    setPreviousPage(res.data.meta.previous_page);
    setErrorMessage(res.data.success ? null : res.message);

    return res.data;
  }

  /**
   * @name searchPosts
   * @description Searchs the posts from butterCMS.
   * @param {Number} query the page of the posts
   * @returns {Array<{Object}>} An array of Objects containing the Posts
   */

  async function searchPosts() {
    // Clean the error message
    setErrorMessage(null);

    // Get the blog posts from backend
    const res = await searchBlogPosts(query, selectedPage);

    // Set provider values
    setLoadingPosts(false);
    setPosts(res.data.data);
    setPostCount(res.data.meta.count);
    setNextPage(res.data.meta.next_page);
    setPreviousPage(res.data.meta.previous_page);
    setErrorMessage(res.data.success ? null : res.message);

    return res.data;
  }

  /**
   * @name getAllTags
   * @description Gets all the used tags from butterCMS.
   * @returns {Array<{Object}>} An array of Objects containing the Tags
   */
  async function getAllTags() {
    try {
      const tags = await getBlogTags();
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
      query,
      postCount,
      nextPage,
      previousPage,
      errorMessage,
      setTag,
      setPage,
      setSearchQuery,
      setLoadingPosts,
      getPosts,
      getAllTags,
      searchPosts,
    };
  }, [
    selectedTag,
    selectedPage,
    loadingPosts,
    posts,
    tags,
    query,
    postCount,
    nextPage,
    previousPage,
    errorMessage,
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
