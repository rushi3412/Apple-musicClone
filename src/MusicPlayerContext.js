// import React, { createContext, useContext, useState } from 'react';

// const MusicPlayerContext = createContext();

// export function useMusicPlayer() {
//   return useContext(MusicPlayerContext);
// }

// export function MusicPlayerProvider({ children }) {
//   const [currentSong, setCurrentSong] = useState(null);

//   // You can add additional state and functions here for playback control.

//   return (
//     <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong }}>
//       {children}
//     </MusicPlayerContext.Provider>
//   );
// }





// import React, { createContext, useContext, useState, useEffect } from 'react';

// const MusicPlayerContext = createContext();

// export function MusicPlayerProvider({ children }) {
//   const [currentSong, setCurrentSong] = useState([]);
//   const [indexSong, setIndexSong] = useState(0);
//   const [songs, setSongs] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <MusicPlayerContext.Provider value={{ currentSong, setCurrentSong, songs, indexSong, setIndexSong, isPlaying, setIsPlaying }}>
//       {children}
//     </MusicPlayerContext.Provider>
//   );
// }

// export function useMusicPlayer() {
//   return useContext(MusicPlayerContext);
// }







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





// import React, { createContext, useContext, useState } from 'react';

// const MusicPlayerContext = createContext();

// export function useMusicPlayer() {
//   return useContext(MusicPlayerContext);
// }

// export function MusicPlayerProvider({ children }) {
//   const [currentSong, setCurrentSong] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);
//   const songs = ["Song 1", "Song 2", "Song 3"];

//   // Function to play a song
//   const play = (songIndex) => {
//     setCurrentSongIndex(songIndex);
//     setCurrentSong(songs[songIndex]);
//     setIsPlaying(true);
//   };

//   // Function to pause the current song
//   const pause = () => {
//     setIsPlaying(false);
//   };

//   // Function to play the next song
//   const next = () => {
//     if (currentSongIndex < songs.length - 1) {
//       play(currentSongIndex + 1);
//     }
//   };

//   // Function to play the previous song
//   const previous = () => {
//     if (currentSongIndex > 0) {
//       play(currentSongIndex - 1);
//     }
//   };

//   // Function to toggle loop
//   const toggleLoop = () => {
//     setIsLooping(!isLooping);
//   };

//   // Function to toggle shuffle
//   const toggleShuffle = () => {
//     setIsShuffling(!isShuffling);
//   };

//   return (
//     <MusicPlayerContext.Provider
//       value={{
//         currentSong,
//         isPlaying,
//         isLooping,
//         isShuffling,
//         play,
//         pause,
//         next,
//         previous,
//         toggleLoop,
//         toggleShuffle,
//       }}
//     >
//       {children}
//     </MusicPlayerContext.Provider>
//   );
// }
