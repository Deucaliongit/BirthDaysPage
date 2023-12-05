import React from "react";
import img1 from "../img/bgWe.jpg";
import img2 from "../img/1poto.jpeg";
import Photo from "./minicomponents/Photo";
const Gallery = () => {
  const photo = [
    {
      id: 0,
      img: img2,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img2,
    },
  ];

  return (
    <div className="max-w-full h-screen">
      <img
        className="object-cover w-full h-screen absolute inset-0 z-0"
        src={img1}
        alt="/"
      />
      <Photo image={photo} />
    </div>
  );
};

export default Gallery;
