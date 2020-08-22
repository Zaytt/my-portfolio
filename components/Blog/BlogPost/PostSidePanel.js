import React from 'react';
import SideTagList from './SideTagList';
import SidePostMeta from './SidePostMeta';
import SocialMediaShare from './SocialMediaShare';

export default function PostSidePanel({ meta }) {
  return (
    <div id="side-panel">
      <SideTagList />
      <SidePostMeta meta={meta} />
    </div>
  );
}
