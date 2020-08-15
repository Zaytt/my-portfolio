import React from 'react';
import moment from 'moment';

export default function PostCard({ post }) {
  // Map the tags of the array into an array of tag spans
  const tags = post.tags.map((tag, index) => {
    return (
      <span className="tag is-small is-light mr-1" key={index}>
        {tag.name}
      </span>
    );
  });

  // Format the published date of the post
  const publishedDate = new moment(post.published).format(
    'h:mm A - D MMM YYYY'
  );

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            className="post-card-image"
            src={post.featured_image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{post.seo_title}</p>
          </div>
        </div>

        <div className="content">
          {post.summary}

          <div className="my-3">{tags}</div>

          <time dateTime={post.published}>{publishedDate}</time>
        </div>
      </div>
    </div>
  );
}
