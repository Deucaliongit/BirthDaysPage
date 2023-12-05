import React from "react";

const Photo = ({ image }) => {
  console.log(image);
  return (
    <>
      <div className="w-full relative z-10 px-4 py-10">
        <h1 className="text-center font-semibold md:text-3xl text-xl text-slate-500">
          Our Memories
        </h1>
        <div className="w-full my-4 grid grid-cols-2 lg:grid-cols-4 mx-auto justify-center gap-4 relative z-10 ">
          {image &&
            image?.map((poto, index) => (
              <div key={index} className="bg-white px-2 py-2 md:py-4 md:px-4">
                <img src={poto.img} alt="/" className="w-full" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Photo;
