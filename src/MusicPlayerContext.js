import React, { createContext, useContext, useState } from 'react';

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [indexSong, setIndexSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = (song, songList) => {
    console.log('Playing song:', song);
  console.log('Playlist:', songList);
    setCurrentSong(song);
    setPlaylist(songList);
    setIndexSong(songList.findIndex((item) => item._id === song._id));
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    console.log('Before toggle, isPlaying:', isPlaying);
    setIsPlaying(!isPlaying);
    console.log('After toggle, isPlaying:', !isPlaying);
  };

  return (
    <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, playlist, indexSong, setIndexSong, isPlaying, playSong, togglePlayPause }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  return useContext(MusicPlayerContext);
}
