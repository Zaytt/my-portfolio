import React from 'react';

export default function Banner() {
  return (
    <div
      id="home"
      style={{ height: '200px', display: 'flex', alignItems: 'center' }}
    >
      <div className="container">
        <h1 className="has-text-left title is-1">
          <span className="has-text-primary">const</span>
          <span className="has-text-danger">{` { `}</span>
          <span className="has-text-white">blogPost</span>
          <span className="has-text-danger">{` }`}</span>
          <span className="has-text-white">{` = `}</span>
          <span className="has-text-primary">Ivan</span>
          <span className="has-text-danger">.</span>
          <span className="has-text-white">blog</span>
          <span className="has-text-danger">;</span>
        </h1>
      </div>
    </div>
  );
}
