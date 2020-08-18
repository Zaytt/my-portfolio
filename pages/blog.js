import React from 'react';
import Blog from '../screens/BlogList';
import { BlogProvider } from '../context/blogContext';

export default function blog({ page, tag }) {
  return (
    <BlogProvider>
      <Blog page={page} tag={tag} />
    </BlogProvider>
  );
}

export async function getServerSideProps(context) {
  // Get query params
  const page = context.query.page || 1;
  const tag = context.query.tag || 'all';

  // Pass data to the page via props
  return {
    props: { page: page, tag: tag },
  };
}
