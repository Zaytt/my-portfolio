import React from 'react';
import NextLink from 'next/link';
import Router from 'next/router';
import PaginationLink from './PaginationLink';
import { useBlog } from '../../../context/blogContext';
import { BLOG_PAGE_SIZE } from '../../../utils/constants';

export default function Pagination() {
  const pageSize = BLOG_PAGE_SIZE;
  const {
    selectedPage,
    setPage,
    postCount,
    previousPage,
    nextPage,
  } = useBlog();
  const pageCount = Math.ceil(postCount / pageSize);

  // Generate the pagination array
  const paginationArray = generatePaginationArray(selectedPage, pageCount);

  // Turn the pages array into a PaginationLink component array
  const pagesLinks = paginationArray.map((page, index) => {
    if (page === '...')
      return (
        <li key={index}>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
      );
    else return <PaginationLink key={index} page={page} />;
  });

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

  const renderPreviousButton = () => {
    if (previousPage) {
      return (
        <a
          className="pagination-previous ml-5"
          onClick={() => updatePage(previousPage)}
        >
          Previous
        </a>
      );
    } else {
      return (
        <a className="pagination-previous ml-5" disabled>
          Previous
        </a>
      );
    }
  };

  const renderNextButton = () => {
    if (nextPage) {
      return (
        <a
          className="pagination-next mr-5"
          onClick={() => updatePage(nextPage)}
        >
          Next page
        </a>
      );
    } else {
      return (
        <a className="pagination-next mr-5" disabled>
          Next page
        </a>
      );
    }

    return components;
  };

  return (
    <div className="container">
      <nav
        className="pagination is-centered mt-5 mb-5"
        role="navigation"
        aria-label="pagination"
      >
        {renderPreviousButton()}
        {renderNextButton()}
        <ul className="pagination-list">{pagesLinks}</ul>
      </nav>
    </div>
  );
}

function generatePaginationArray(selectedPage, pageCount) {
  let current = selectedPage;
  let last = pageCount;
  let delta = 1;
  let left = current - delta;
  let right = current + delta + 1;
  let range = [];
  let rangeWithDots = [];
  let l;

  if (pageCount === 1) return [1];
  range.push(1);

  for (let i = current - delta; i <= current + delta; i++) {
    if (i >= left && i < right && i < last && i > 1) {
      range.push(i);
    }
  }
  range.push(last);

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}
