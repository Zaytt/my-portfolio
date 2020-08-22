import React from 'react';
import NextLink from 'next/link';
import moment from 'moment';

export default function PostInfo({ author, tags, date }) {
  // Format the published date of the post
  const publishedDate = new moment(date).format('MMMM Do, YYYY');

  return (
    <div>
      <h6 className="has-text-grey has-text-left is-italic has-text-weight-light has-text-centered-mobile">
        By
        <NextLink href="/">
          <a className="clickable is-underlined has-text-grey">{` ${author.first_name} ${author.last_name} `}</a>
        </NextLink>
        on {publishedDate}
      </h6>
    </div>
  );
}
