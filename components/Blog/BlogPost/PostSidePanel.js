import React from 'react';
import TagList from '../BlogList/TagsList';

export default function PostSidePanel() {
  return (
    <div>
      <h1 className="title is-5 underline-bold mb-3">Other Topics</h1>
      <TagList showSelected={false} alignment="left" />
    </div>
  );
}
