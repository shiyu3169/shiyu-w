import React from 'react';

const Item = ({ item }) => {
  return (
    <div className="item" data-aos="flip-left">
      <div className="item-image">
        <img src={item.src} alt="" />
      </div>
      <div className="item-text">
        <div className="item-text-wrap">
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            Open Project
          </a>
          <a target="_blank" rel="noopener noreferrer" href={item.code}>
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Item;
