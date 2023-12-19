import React, { createContext, useState, useContext } from "react";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const playMusic = () => {
    setIsMusicPlaying(true);
    console.log("Musik diputar...");
  };

  const stopMusic = () => {
    setIsMusicPlaying(false);
  };

  return (
    <MusicContext.Provider value={{ isMusicPlaying, playMusic, stopMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  return useContext(MusicContext);
};
