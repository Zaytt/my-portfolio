import React from 'react';
import Router from 'next/router';
import { useBlog } from '../../../context/blogContext';

export default function PaginationLink({ page }) {
  const { selectedPage, setPage } = useBlog();

  const isCurrent = page == selectedPage;

  // Update the page both in the Context and in the url query
  const updatePage = (newPage) => {
    // Create query obj
    const query = {};
    // If there's a tag in the query, add it to the new query
    if (Router.query.tag) query.tag = encodeURI(Router.query.tag);
    // Add the new page to the query
    query.page = encodeURI(newPage);

    // Push new query to url
    Router.push({
      pathname: '/blog',
      query,
    });
    // Set page in Context
    setPage(newPage);
  };

  return (
    <li>
      <a
        className={`pagination-link ${isCurrent ? 'is-current' : ''}`}
        aria-label={`Goto page ${page}`}
        onClick={() => updatePage(page)}
      >
        {page}
      </a>
    </li>
  );
}
