import React from 'react';
import { BlogProvider } from '../../context/blogContext';
import Post from '../../screens/BlogPost/';
import { getSinglePost } from '../../controllers/blogController';

export default function post({ post }) {
  return (
    <BlogProvider>
      <Post post={post} />
    </BlogProvider>
  );
}

export async function getServerSideProps(context) {
  // Get query params
  const slug = context.query.slug;

  // Request the blog post from the backend
  const post = await getSinglePost(slug);

  // Pass data to the page via props
  return {
    props: { post: post },
  };
}
