import React from 'react';

export default function SkillCard({ title, text, icon }) {
  const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
  };

  return (
    <div>
      <img src={icon} alt={`${convertToKebabCase(title)}-icon`} width={100} />
      <h1 className="is-size-4 mt-2">{title}</h1>
      <div className="px-6 mx-4 my-0">
        <div className="is-divider my-2" />
      </div>
      <p>{text}</p>
    </div>
  );
}
