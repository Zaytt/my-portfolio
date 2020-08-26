import React from 'react';
import { withRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useBlog } from '../../../context/blogContext';

function SearchBar({ router }) {
  const [query, setQuery] = React.useState('');
  const { setSearchQuery, query: previousQuery } = useBlog();

  // Update the search query both in the Context and in the url query
  const updateQuery = (newQuery) => {
    if (newQuery === previousQuery) return;
    const query = {};
    // Add the new page to the query
    query.search = encodeURI(newQuery);

    // Push new query to url
    router.push({
      pathname: '/blog',
      query,
    });
    // Set query in Context
    setSearchQuery(newQuery);
  };

  const handleInputChange = (e) => setQuery(e.currentTarget.value);

  const onSubmit = (e) => {
    e.preventDefault();
    updateQuery(query);
  };

  return (
    <div className="navbar-item navbar-center">
      <form className="has-text-centered" onSubmit={onSubmit}>
        <input
          name="search"
          type="search"
          id="search-box"
          placeholder="Search Blog Posts"
          onChange={handleInputChange}
          value={query}
        />
        <label htmlFor="search-box">
          <FontAwesomeIcon
            width="0"
            icon={faSearch}
            size="1x"
            id="search-icon"
            onClick={() => updateQuery(query)}
          />
        </label>
      </form>
    </div>
  );
}

export default withRouter(SearchBar);
