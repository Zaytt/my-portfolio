import React from 'react';

export default function SkillCard({ title, text, icon }) {
  return (
    <div>
      <img src={icon} alt="Icon" width={100} />

      <h1 className="is-size-4 mt-2">{title}</h1>
      <div className="px-6 mx-4 my-0">
        <div class="is-divider my-2" />
      </div>
      <p>{text}</p>
    </div>
  );
}
