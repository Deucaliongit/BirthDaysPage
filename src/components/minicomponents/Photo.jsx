import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Photo = ({ image }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, []);

  return (
    <>
      <div className="w-full relative z-10 px-4 py-10">
        <h1 className="text-center font-semibold md:text-3xl text-xl text-slate-500">
          Our Memories
        </h1>
        <div className="w-full my-4 grid grid-cols lg:grid-cols-4 mx-auto justify-center gap-4">
          {image &&
            image.map((poto, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 px-2 py-2 md:py-4 md:px-4"
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img src={poto.img} alt="/" className="w-full" />
              </motion.div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Photo;
