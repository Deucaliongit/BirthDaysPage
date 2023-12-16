import React, { useState, useRef, useEffect } from "react";
import Bg1 from "../img/bg2.png";
import { Link } from "react-router-dom";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import music from "../img/backsound.mp3";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Bg1})` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        <div className="text-center">
          <h1 className="oleo text-4xl md:py-10 md:text-[80px] font-bold text-white">
            Happy Birthdays
          </h1>

          <span className="px-2 oleo text-3xl font-bold md:text-[70px] text-white">
            Aqila Shearin Ramadhantya
          </span>
          <div
            className="text-center mx-auto my-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <Link to="/message">
                <FaEnvelopeOpen
                  size={50}
                  className="text-white text-center mx-auto"
                />
              </Link>
            ) : (
              <Link to="/message">
                <FaEnvelope
                  size={50}
                  className="text-white text-center mx-auto"
                />
              </Link>
            )}
          </div>
          <h1 className="text-white font-bold">Open</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
