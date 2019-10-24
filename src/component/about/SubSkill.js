import React from "react";

const SubSkill = ({ skill }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={skill.url}>
      {skill.name}
    </a>
  );
};

export default SubSkill;
