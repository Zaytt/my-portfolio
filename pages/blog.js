import React from 'react';
import Blog from '../screens/Blog';

export default function blog({ data }) {
  return <Blog data={data}></Blog>;
}

export async function getServerSideProps(context) {
  // Get query params
  const page = context.query.page || 0;
  const tag = context.query.tag || 'all';

  // Pass data to the page via props
  return {
    props: {
      page,
      tag,
    },
  };
}
