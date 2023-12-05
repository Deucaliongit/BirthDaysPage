import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Setelah komponen dimuat, atur loaded menjadi true untuk memulai efek opacity.
    setLoaded(true);
  }, []);
  return (
    <div
      className={`body bg-gray-200 h-screen transition-opacity duration-20000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="birthdayCard shadow-md">
        <div className="cardFront shadow-md">
          <h3 className="happy bg-sky-500 text-white font-bold">
            Dear My Future Wife
          </h3>
          <div className="balloons">
            <div className="balloonOne"></div>
            <div className="balloonTwo"></div>
            <div className="balloonThree"></div>
            <div className="balloonFour"></div>
          </div>
        </div>
        <div className="cardInside shadow-lg relative">
          <h3 className="back relative z-10">HAPPY BIRTHDAY!</h3>
          <p className="relative z-10">Dear Aqila Shearin,</p>
          <p className="text-[14px] relative z-10">
            Selamat ulang tahun, sayangku! Semoga setiap tahun membawa
            kebahagiaan baru dalam hidupmu. Bersyukur bisa berbagi momen indah
            ini bersamamu. Semoga yang kamu cita citakan dapat terwujud.
          </p>
          <div className="flex items-center relative z-10">
            <Link to="/memories">
              <div>
                <p className="bg-black px-1 text-xs text-white">Our Moment</p>
              </div>
            </Link>
            <div>
              <p className="text-right text-[14px]">Ilham Rifai</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
