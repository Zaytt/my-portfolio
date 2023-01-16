import React, { useEffect, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import AngledSeparator from '../AngledSeparator';
import { getBlogPages } from '../../../actions/blogActions';

export default function Portfolio() {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const fetchPages = async () => {
      const pages = await getBlogPages('portfolio_item');
      if (pages && pages.sucess) setPages(pages.data.data);
    };

    fetchPages();
  }, []);

  return (
    <section id="portfolio">
      <div className="container is-fluid mb-6 pb-6">
        <div className="has-text-centered mb-6">
          <h1 className="title has-text-weight-semibold mb-6">
            <span className="underline-bold">PORTFOLIO</span>
          </h1>
        </div>
        {pages.map((page, index) => {
          return (
            <div className="my-5" key={index}>
              <PortfolioItem item={page} />
            </div>
          );
        })}
      </div>

      <AngledSeparator />
    </section>
  );
}
