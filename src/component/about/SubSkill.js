import React from 'react';

const SubSkill = ({ skill }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={skill.url}
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      {skill.name}
    </a>
  );
};

export default SubSkill;
