import React, { useState, useEffect, useMemo } from 'react';
import Butter from 'buttercms';

const butter = Butter('YOUR_BUTTERCMS_KEY');

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

  /**
   * @name setTag
   * @description Set the selectedTag as well as loadingPosts
   * @param {String} tag
   */

  function setTag(tag) {
    setSelectedTag(tag);
    setLoadingPosts(true);
  }

  /**
   * @name setPage
   * @description Set the page as well as loadingPosts
   * @param {Number} page
   */

  function setPage(page) {
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

  async function getPosts(page = 1, pageSize = 9) {
    const params = { page: page, page_size: pageSize };
    if (selectedTag !== 'all') params.tag_slug = selectedTag;

    const res = await butter.post.list(params);
    console.log(res.data.meta.count);
    setLoadingPosts(false);
    setPosts(res.data.data);
    setPostCount(res.data.meta.count);
    setNextPage(res.data.meta.next_page);
    setPreviousPage(res.data.meta.previous_page);

    return res.data.data;
  }

  /**
   * @name getAllTags
   * @description Gets all the used tags from butterCMS.
   * @returns {Array<{Object}>} An array of Objects containing the Tags
   */
  async function getAllTags() {
    const res = await butter.tag.list();
    const allTag = { name: 'All', slug: 'all' };
    setTags([allTag, ...res.data.data]);

    return res.data.data;
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
