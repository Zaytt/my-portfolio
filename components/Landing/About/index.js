import React, { useRef } from 'react';
import Me from './Me';
import WhatIDo from './WhatIDo';

export default function index() {
  return (
    <div className="section">
      <Me />
      <WhatIDo />
    </div>
  );
}
