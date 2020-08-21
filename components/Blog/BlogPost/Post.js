import React from 'react';
import PostInfo from './PostInfo';
import SocialMediaShare from './SocialMediaShare';
import PostSidePanel from './PostSidePanel';

export default function Post({ post }) {
  const { data } = post.data;
  const { meta } = post;
  return (
    <div className="container px-3 mb-5">
      <h1 className="has-text-centered title is-1 my-5">{data.title}</h1>
      <hr className="mx-auto my-5" style={{ width: '50%' }} />
      <div className="columns my-5">
        <div className="column">
          <PostInfo
            author={data.author}
            tags={data.tags}
            date={data.published}
          />
        </div>
        <div className="column">
          <SocialMediaShare
            url={data.url}
            title={data.title}
            tags={data.tags}
            summary={data.summary}
          />
        </div>
      </div>
      <div className="columns">
        <div className="column my-5 py-5 is-two-thirds" id="post">
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
        <div className="column is-one-third">
          <PostSidePanel />
        </div>
      </div>
    </div>
  );
}
