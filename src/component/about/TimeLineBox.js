import React from "react";

export default function TimeLineBox({ title, description }) {
  return (
    <li data-aos="zoom-in-up" data-aos-duration="1500">
      <div>
        <h3>
          <i className="fas fa-chevron-right"></i> {title}
        </h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
