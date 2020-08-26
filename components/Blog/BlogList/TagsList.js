import React, { useEffect } from 'react';
import Tag from './Tag';
import { useBlog } from '../../../context/blogContext';

export default function TagsList(
  { showSelected = true, alignment = 'centered' },
  isSideBar = false
) {
  // Get the values that we will use from the BlogContext
  const { selectedTag, getAllTags, tags } = useBlog();

  /* The use effect hook is similar to the life cycle methods 'componentDidMount' 
  and 'componentDidUpdate'. It runs both after the first render and after every update. 
  It is possible to condition the rerender to only when a value has changed, by passing 
  values in an array in a a second parameter.
  */
  useEffect(() => {
    getAllTags();
  }, [selectedTag]);

  // Map a Tag array with the tags from BlogContext
  const tagList = tags.map((tag, index) => {
    return (
      <Tag
        key={index}
        tag={tag}
        isActive={showSelected ? selectedTag === tag.slug : false}
        isSideTag={isSideBar}
      />
    );
  });

  return (
    <div className="container mt-2 mb-5">
      <div className={`has-text-${alignment} mb-5`}>{tagList}</div>
    </div>
  );
}
