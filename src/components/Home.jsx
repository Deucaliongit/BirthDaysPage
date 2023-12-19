import React, { useState, useEffect } from "react";
import Bg1 from "../img/bg2.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import music from "../img/backsound.mp3";
import { useMusic } from "../components/MusicContext";
import { motion } from "framer-motion";

import Bmessage from "./minicomponents/Bmessage";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [view, setIsView] = useState(false);
  const { playMusic, isMusicPlaying } = useMusic(); // Use the hook at the top level

  useEffect(() => {
    setIsView(false);
  }, []);

  const startMusic = () => {
    playMusic();
    setIsView(true);
    console.log("Musik diputar...");
  };

  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 3, delay: 1 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 3 } },
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      {!view && (
        <div className="text-center absolute inset-10 flex items-center justify-center bg-opacity-50">
          <button
            className="bg-sky-500 text-white rounded-lg p-2"
            onClick={startMusic}
          >
            Putar Musik
          </button>
        </div>
      )}
      {view && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <audio autoPlay loop>
            <source src={music} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <div className="text-center">
            <Bmessage />
            <motion.div
              className="your-container-class"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div
                className="text-center mx-auto my-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link to="/message">
                  {isHovered ? (
                    <motion.div variants={iconVariants} whileHover="hover">
                      <FaEnvelopeOpen
                        size={50}
                        className="text-white text-center mx-auto"
                      />
                    </motion.div>
                  ) : (
                    <motion.div variants={iconVariants} whileHover="hover">
                      <FaEnvelope
                        size={50}
                        className="text-white text-center mx-auto"
                      />
                    </motion.div>
                  )}
                </Link>
              </div>
              <motion.div variants={iconVariants} whileHover="hover">
                <h1 className="text-white font-bold">Buka</h1>
              </motion.div>
              {isMusicPlaying && <p className="text-white"></p>}
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
