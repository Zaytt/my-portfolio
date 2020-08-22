import React from 'react';
import NextLink from 'next/link';

export default function SidePostMeta({ meta }) {
  const { previous_post, next_post } = meta;

  const nextPost = next_post ? (
    <div className="my-5">
      <h1 className="title is-5 underline-bold mb-3">Next Post</h1>
      <NextLink href={`/blog/${next_post.slug}`}>
        <a>
          <figure className="image is-4by3">
            <img
              className="meta-panel-image clickable py-3 px-3 "
              src={next_post.featured_image}
              alt="Placeholder image"
            />
          </figure>
        </a>
      </NextLink>
      <NextLink href={`/blog/${next_post.slug}`}>
        <a>
          <p className="subtitle is-5 clickable px-3 has-text-centered">
            {next_post.title}
          </p>
        </a>
      </NextLink>
    </div>
  ) : null;

  const previousPost = previous_post ? (
    <div className="my-5">
      <h1 className="title is-5 underline-bold mb-3">Previous Post</h1>
      <NextLink href={`/blog/${previous_post.slug}`}>
        <a>
          <figure className="image is-4by3">
            <img
              className="meta-panel-image clickable py-3 px-3 "
              src={previous_post.featured_image}
              alt="Placeholder image"
            />
          </figure>
        </a>
      </NextLink>
      <NextLink href={`/blog/${previous_post.slug}`}>
        <a>
          <p className="subtitle is-5 clickable px-3 has-text-centered">
            {previous_post.title}
          </p>
        </a>
      </NextLink>
    </div>
  ) : null;

  return (
    <div>
      {next_post && nextPost}
      {previous_post && previousPost}
    </div>
  );
}
