import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos/dist/aos';

const Item = ({ item }) => {
  AOS.init({
    offset: 200,
    duration: 1000
  });
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
