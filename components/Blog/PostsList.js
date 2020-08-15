import React, { useEffect } from 'react';
import PostCard from './PostCard';
import Loader from 'react-loader-spinner';
import { useBlog } from '../../context/blogContext';

export default function PostsList() {
  // Get the required values from the BlogContext
  const { posts, selectedTag, page, getPosts, loadingPosts } = useBlog();

  /* The use effect hook is similar to the life cycle methods 'componentDidMount' 
  and 'componentDidUpdate'. It runs both after the first render and after every update. 
  It is possible to condition the rerender to only when a value has changed, by passing 
  values in an array in a a second parameter.
  */
  useEffect(() => {
    // Used a timeout to imporove the UX, as the request is too fast and can be quite jarring
    // It lets you enjoy the loading animation this way too :)
    setTimeout(() => {
      getPosts();
    }, 333);
  }, [selectedTag, page]);

  // Configure the loader spinner
  const loaderSpinner = (
    <div className="has-text-centered is-fullheight">
      <Loader
        type="ThreeDots"
        color="lightseagreen"
        height={300}
        width={100}
        timeout={0}
      />
    </div>
  );

  // Get an array of postCards
  const postCards = posts.map((post, index) => {
    return (
      <div className="tile is-4 is-parent" key={index}>
        <div className="tile is-child">
          <PostCard post={post} />
        </div>
      </div>
    );
  });

  // Get the array of postCards inside their ancestor tile
  const postTiles = (
    <div className="tile is-ancestor" style={{ flexWrap: 'wrap' }}>
      {postCards}
    </div>
  );

  return (
    <div className="container">
      {/* <h1 className="title has-text-centered is-size-2">
        {loadingPosts ? 'Loading...' : 'Posts'}
      </h1> */}
      {loadingPosts ? loaderSpinner : postTiles}
    </div>
  );
}
