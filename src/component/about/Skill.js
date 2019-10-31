import React from 'react';

const Skill = ({ title, width }) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="progress">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default Skill;
