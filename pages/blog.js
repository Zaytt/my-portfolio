import React from 'react';
import Butter from 'buttercms';
import Blog from '../screens/Blog';

const butter = Butter('d6b7a143ed7dbe96d110a739365d67dc2065e35a');

export default function blog() {
  butter.tag.list().then(function(response) {
    console.log(response);
  });
  butter.post.list({ page: 1, page_size: 10 }).then(function(response) {
    console.log(response);
  });
  return <Blog></Blog>;
}
