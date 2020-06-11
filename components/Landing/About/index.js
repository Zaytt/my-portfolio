import React from 'react';
import Me from './Me';
import WhatIDo from './WhatIDo';

export default function index({ element }) {
  return (
    <div className="section" ref={element}>
      <Me />
      <WhatIDo />
    </div>
  );
}
