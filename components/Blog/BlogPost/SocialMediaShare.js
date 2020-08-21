import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share';

export default function SocialMediaShare({ url, title, tags, summary }) {
  const completeUrl = `https://wwww.ivanchavez.dev/blog/${url}`;
  const hashtags = tags ? tags.map((tag) => tag.slug) : [];
  const source = 'https://www.ivanchavez.dev/blog';

  return (
    <div
      className="has-text-right has-text-centered-mobile
    "
    >
      <span className="mx-1 is-vcentered">
        <FacebookShareButton
          url={completeUrl}
          quote={`I liked this post:\n${title} - "${summary}"\n`}
          hashtag={hashtags.length > 0 ? hashtags[0] : ''}
        >
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </span>
      <span className="mx-1">
        <TwitterShareButton
          url={completeUrl}
          title={`This is awesome!\n${title}\n`}
          hashtags={hashtags}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </span>
      <span className="mx-1">
        <LinkedinShareButton
          url={completeUrl}
          title={`I found this interesting: ${title}`}
          source={source}
          summary={summary}
        >
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </span>

      <span className="mx-1">
        <RedditShareButton
          url={completeUrl}
          title={`I liked thi post: ${title}`}
        >
          <RedditIcon size={32} round={true} />
        </RedditShareButton>
      </span>
    </div>
  );
}
