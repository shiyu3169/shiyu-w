import React from "react";

const SocialTab = ({ icon, title, desc, href }) => {
  return (
    <li className="tab">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={`social ${icon}`}>
          <span>{title}</span>
        </div>
        <div className="content">
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </a>
    </li>
  );
};

export default SocialTab;
