import React from 'react';
import Router from 'next/router';
import { useBlog } from '../../../context/blogContext';

export default function Tag({ tag, isActive }) {
  // Get the setTag function from the BlogContext
  const { setTag } = useBlog();

  const updateQuery = (newQuery) => {
    Router.push({
      pathname: '/blog',
      query: { tag: encodeURI(newQuery) },
    });
  };

  return (
    <span
      className={`top-tag tag is-medium ${
        isActive ? 'is-danger' : ''
      } mx-1 my-1`}
      onClick={() => {
        updateQuery(tag.slug);
        setTag(tag.slug);
      }}
    >
      {tag.name}
    </span>
  );
}
