import React from 'react';
import NextLink from 'next/link';
import PaginationLink from './PaginationLink';
import { useBlog } from '../../../context/blogContext';

export default function Pagination() {
  const pageSize = 9;
  const { selectedPage, postCount, previousPage, nextPage } = useBlog();

  const pageCount = Math.ceil(postCount / pageSize);

  // Simple pagination algorithm from https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
  const paginationArray = (function() {
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
  })();

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

  const renderPreviousButton = () => {
    if (previousPage) {
      return (
        <NextLink href={`blog?page=${previousPage}`}>
          <a
            className="pagination-previous ml-5"
            disabled={previousPage === null}
          >
            Previous
          </a>
        </NextLink>
      );
    } else {
      return (
        <a
          className="pagination-previous ml-5"
          disabled={previousPage === null}
        >
          Previous
        </a>
      );
    }
  };

  const renderNextButton = () => {
    if (nextPage) {
      return (
        <NextLink href={`blog?page=${nextPage}`}>
          <a className="pagination-next mr-5" disabled={nextPage === null}>
            Next page
          </a>
        </NextLink>
      );
    } else {
      return (
        <a className="pagination-next mr-5" disabled={nextPage === null}>
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
