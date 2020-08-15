import React from 'react';
import { useBlog } from '../../context/blogContext';

export default function PaginationLink({ page }) {
  const { selectedPage } = useBlog();
  const isCurrent = page === selectedPage;
  return (
    <li>
      <a
        className={`pagination-link ${isCurrent ? 'is-current' : ''}`}
        aria-label={`Goto page ${page}`}
      >
        {page}
      </a>
    </li>
  );
}
