import React from 'react';
import Post from '../../components/Blog/BlogPost/Post';

export default function index({ post }) {
  return (
    <React.Fragment>
      <Post post={post} />
    </React.Fragment>
  );
}
