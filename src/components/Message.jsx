import React from "react";

const Message = () => {
  return (
    <div className="body h-screen">
      <div className="birthdayCard">
        <div className="cardFront">
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
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY!</h3>
          <p>Dear Aqila Shearin,</p>
          <p className="text-[14px]">
            Selamat ulang tahun, sayangku! Semoga setiap tahun membawa
            kebahagiaan baru dalam hidupmu. Bersyukur bisa berbagi momen indah
            ini bersamamu. Semoga yang kamu cita citakan dapat terwujud.
          </p>
          <p className="text-right text-[14px]">Ilham Rifai</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
