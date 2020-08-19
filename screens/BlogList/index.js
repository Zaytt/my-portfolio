import React, { useEffect } from 'react';
import BlogHero from '../../components/Blog/Hero';
import Header from '../../components/Layout/Header';
import TagsList from '../../components/Blog/BlogList/TagsList';
import PostsList from '../../components/Blog/BlogList/PostsList';
import Pagination from '../../components/Blog/BlogList/Pagination';
import { useBlog } from '../../context/blogContext';

export default function index(props) {
  // Get the required values from the BlogContext
  const { setTag, setPage, selectedTag, selectedPage } = useBlog();

  useEffect(() => {
    setTag(props.tag);
    setPage(props.page);
  }, []);

  return (
    <React.Fragment>
      <BlogHero />
      <Header sticky />
      <TagsList />
      <PostsList />
      <Pagination />
    </React.Fragment>
  );
}
