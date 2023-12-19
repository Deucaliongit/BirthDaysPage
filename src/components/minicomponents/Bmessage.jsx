import React from "react";
import { motion } from "framer-motion";
const Bmessage = () => {
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 3 } },
    exit: { opacity: 0, y: -50, transition: { duration: 1 } },
  };

  const textVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 3, delay: 1 } },
  };
  return (
    <div>
      <motion.div
        className="your-container-class"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          className="oleo text-4xl md:py-10 md:text-[80px] font-bold text-white"
          variants={textVariants}
        >
          Selamat Ulang Tahun
        </motion.h1>
        <motion.span
          className="px-2 oleo text-3xl font-bold md:text-[70px] text-white"
          variants={textVariants}
        >
          Aqila Shearin Ramadhantya
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Bmessage;
