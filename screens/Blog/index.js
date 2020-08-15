import React, { useContext, createContext } from 'react';
import BlogHero from '../../components/Blog/Hero';
import Header from '../../components/Layout/Header';
import TagsList from '../../components/Blog/TagsList';
import PostsList from '../../components/Blog/PostsList';
import Pagination from '../../components/Blog/Pagination';

import { BlogProvider } from '../../context/blogContext';

export default function index({ page, tag }) {
  return (
    <BlogProvider>
      <BlogHero />
      <Header />
      <TagsList />
      <PostsList />
      <Pagination />
    </BlogProvider>
  );
}
