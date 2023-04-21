import React from "react";
import "./Carousel.css";

export default function Carousel({ items }) {
  return (
    <div className="carousel-grid">
      {items.map((item) => (
        <div className="carousel-cont" key={item}>
          <img src={item} alt="" />
        </div>
      ))}
    </div>
  );
}
