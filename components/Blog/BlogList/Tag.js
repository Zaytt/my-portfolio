import React from 'react';
import Router from 'next/router';
import { useBlog } from '../../../context/blogContext';

export default function Tag({ tag, isActive, isSideTag }) {
  // Get the setTag function from the BlogContext
  const { setTag, selectedTag } = useBlog();

  const updateQuery = (newQuery) => {
    const query = {};
    if (newQuery !== 'all') query.tag = encodeURI(newQuery);
    Router.push({
      pathname: '/blog',
      query,
    });
  };

  return (
    <span
      className={`top-tag tag is-medium ${
        isActive ? 'is-danger' : ''
      } mx-1 my-1`}
      onClick={() => {
        if (!isSideTag && selectedTag === tag.slug) return;
        updateQuery(tag.slug);
        setTag(tag.slug);
      }}
    >
      {tag.name}
    </span>
  );
}
