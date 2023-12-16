import React, { useRef } from "react";
import music from "../../img/backsound.mp3";

const Audio = () => {
  const audioRef = useRef(null);

  const putarAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Autoplay dicegah:", error);
      });
    }
  };

  return (
    <div>
      <button onClick={putarAudio} style={{ display: "none" }} />
      <audio ref={audioRef} loop autoPlay>
        <source src={music} type="audio/mp3" />
        Browser Anda tidak mendukung elemen audio.
      </audio>
    </div>
  );
};

export default Audio;
