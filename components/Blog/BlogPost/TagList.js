import React from 'react';
import NextLink from 'next/link';

export default function TagList({ tags }) {
  // Map a Tag array with the tags from BlogContext
  const tagList = tags.map((tag, index) => {
    return (
      <NextLink href={`/blog?tag=${tag.slug}`}>
        <a>
          <span className={`top-tag tag is-medium mx-1 `}>{tag.name}</span>
        </a>
      </NextLink>
    );
  });

  return <div className="has-text-centered">{tagList}</div>;
}
