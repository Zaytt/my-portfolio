import React from 'react';
import { useBlog } from '../../context/blogContext';

export default function Tag({ tag, isActive }) {
  const { setTag } = useBlog();
  return (
    <span
      className={`top-tag tag is-medium ${
        isActive ? 'is-danger' : ''
      } mx-1 my-1`}
      onClick={() => setTag(tag.slug)}
    >
      {tag.name}
    </span>
  );
}
