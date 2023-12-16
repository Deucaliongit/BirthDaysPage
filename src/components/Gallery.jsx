import React from "react";
import imgbg from "../img/bgWe.jpg";
import img1 from "../img/1.webp";
import img2 from "../img/2.webp";
import img3 from "../img/3.webp";
import img4 from "../img/4.webp";
import img5 from "../img/5.webp";
import img6 from "../img/6.webp";
import img7 from "../img/7.webp";
import img8 from "../img/8.webp";
import img9 from "../img/9.webp";
import img10 from "../img/10.webp";
import img11 from "../img/11.webp";
import img12 from "../img/12.webp";

import Photo from "./minicomponents/Photo";
const Gallery = () => {
  const photo = [
    {
      id: 0,
      img: img1,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img3,
    },
    {
      id: 3,
      img: img4,
    },
    {
      id: 4,
      img: img5,
    },
    {
      id: 5,
      img: img6,
    },
    {
      id: 6,
      img: img7,
    },
    {
      id: 7,
      img: img8,
    },
    {
      id: 8,
      img: img9,
    },
    {
      id: 9,
      img: img10,
    },
    {
      id: 10,
      img: img11,
    },
    {
      id: 11,
      img: img12,
    },
  ];

  return (
    <div className="max-w-full h-screen">
      <img
        className="object-cover w-full h-screen absolute inset-0 z-0"
        src={imgbg}
        alt="/"
      />
      <Photo image={photo} />
    </div>
  );
};

export default Gallery;
