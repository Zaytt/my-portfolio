import React from 'react';

export default function bulma_logo({ width, height }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={width}
      height={height}
      style={{
        '-ms-transform': 'rotate(360deg',
        '-webkit-transform': 'rotate(360deg)',
        transform: ' rotate(360deg)',
      }}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 256 373"
    >
      <path
        fill="#00D1B2"
        d="M0 256L23.273 93.09L116.363 0l116.364 116.364l-69.818 69.818L256 279.272l-139.636 93.092z"
      />
      <rect x="0" y="0" width="256" height="373" fill="rgba(0, 0, 0, 0)" />
    </svg>
  );
}
