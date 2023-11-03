// import React from "react";
// import {
//   IconButton,
//   Typography,
//   Card,
//   CardContent,
//   CardActions,
// } from "@mui/material";
// import { PlayArrow, Pause, SkipPrevious, SkipNext, Loop, Shuffle } from "@mui/icons-material";

// function MusicPlayerPage() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Now Playing
//           </Typography>
//           {/* Add the song image here */}
//         </CardContent>
//         <CardActions>
//           <IconButton>
//             <Shuffle />
//           </IconButton>
//           <IconButton>
//             <SkipPrevious />
//           </IconButton>
//           <IconButton>
//             <Pause />
//           </IconButton>
//           <IconButton>
//             <PlayArrow />
//           </IconButton>
//           <IconButton>
//             <SkipNext />
//           </IconButton>
//           <IconButton>
//             <Loop />
//           </IconButton>
//         </CardActions>
//       </Card>
//     </div>
//   );
// }

// export default MusicPlayerPage;








// import React, { useState, useEffect } from 'react';
// import { IconButton } from '@material-ui/core';
// import { PlayArrow, Pause, SkipNext, SkipPrevious, Shuffle, Repeat } from '@material-ui/icons';

// function MusicPlayerPage() {
//     const [songs, setSongs] = useState([]);
//     const [currentSongIndex, setCurrentSongIndex] = useState(0);
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Fetch songs from API
//     useEffect(() => {
//         fetch('https://academics.newtonschool.co/api/v1/music/album/64cf907e47ae38c3e33a18ae', {
//             headers: {
//                 'projectId': 'f104bi07c490'
//             }
//         })
//         .then(response => {
//             console.log('Response:', response);
//             return response.json();
//         })
//         .then(data => {
//             console.log('Data:', data);
//             setSongs(data);
//         })
//         .catch(error => console.error('Error fetching album data:', error));
//     }, []);

//     const audioRef = React.useRef();

//     // Play or pause the song
//     const handlePlayPause = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     // Go to next or previous song
//     const handleSkip = (forward = true) => {
//         let index = currentSongIndex;
//         index = forward ? index + 1 : index - 1;
//         if (index < 0) index = songs.length - 1;
//         if (index >= songs.length) index = 0;
//         setCurrentSongIndex(index);
//     };

//     if(songs.length > 0){

//     return (
//       <div>
        
        
//         <h2>{songs[currentSongIndex]?.title}</h2>
//               <img src={songs[currentSongIndex]?.thumbnail} alt="Album cover" />
//               <audio src={songs[currentSongIndex]?.audio_url} ref={audioRef} />
//               <IconButton onClick={() => handleSkip(false)}><SkipPrevious /></IconButton>
//               <IconButton onClick={handlePlayPause}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
//               <IconButton onClick={() => handleSkip()}><SkipNext /></IconButton>
//               {/* Add your shuffle and loop buttons here */}
//               <IconButton><Shuffle /></IconButton>
//               <IconButton><Repeat /></IconButton>
        
      
//   </div>
//     );
//     }
// }

// export default MusicPlayerPage;






// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { IconButton } from '@material-ui/core';
// import { PlayArrow, Pause, SkipNext, SkipPrevious, Shuffle, Repeat } from '@material-ui/icons';

// function MusicPlayerPage() {
//     const location = useLocation();
//     const { album, songIndex } = location.state; // Get the album data and song index from the location state

//     const [songs, setSongs] = useState(album.songs); // Set the initial songs state to be the songs from the album
//     const [currentSongIndex, setCurrentSongIndex] = useState(songIndex);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const audioRef = React.useRef();

//     // Play or pause the song
//     const handlePlayPause = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     // Go to next or previous song
//     const handleSkip = (forward = true) => {
//         let index = currentSongIndex;
//         index = forward ? index + 1 : index - 1;
//         if (index < 0) index = songs.length - 1;
//         if (index >= songs.length) index = 0;
//         setCurrentSongIndex(index);
//     };

//     if(songs.length > 0){

//     return (
//       <div>
        
        
//         <h2>{songs[currentSongIndex]?.title}</h2>
//               <img src={songs[currentSongIndex]?.thumbnail} alt="Album cover" />
//               <audio src={songs[currentSongIndex]?.audio_url} ref={audioRef} />
//               <IconButton onClick={() => handleSkip(false)}><SkipPrevious /></IconButton>
//               <IconButton onClick={handlePlayPause}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
//               <IconButton onClick={() => handleSkip()}><SkipNext /></IconButton>
//               {/* Add your shuffle and loop buttons here */}
//               <IconButton><Shuffle /></IconButton>
//               <IconButton><Repeat /></IconButton>
        
      
//   </div>
//     );
//     }
// }

// export default MusicPlayerPage;






// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { IconButton } from '@material-ui/core';
// import { PlayArrow, Pause, SkipNext, SkipPrevious, Shuffle, Repeat } from '@material-ui/icons';

// function MusicPlayerPage() {
//     const location = useLocation();
//     const { album, songIndex } = location.state; // Get the album data and song index from the location state

//     const [songs, setSongs] = useState(album.songs); // Set the initial songs state to be the songs from the album
//     const [currentSongIndex, setCurrentSongIndex] = useState(songIndex);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const audioRef = React.useRef();

//     // Play or pause the song
//     const handlePlayPause = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     // Go to next or previous song
//     const handleSkip = (forward = true) => {
//         let index = currentSongIndex;
//         index = forward ? index + 1 : index - 1;
//         if (index < 0) index = songs.length - 1;
//         if (index >= songs.length) index = 0;
//         setCurrentSongIndex(index);
//         setIsPlaying(false); // Set isPlaying to false to ensure the new song starts playing
//         handlePlayPause(); // Call handlePlayPause to start playing the new song
//     };

//     if(songs.length > 0){

//     return (
//       <div>
        
        
//         <h2>{songs[currentSongIndex]?.title}</h2>
//               <img src={songs[currentSongIndex]?.thumbnail} alt="Album cover" />
//               <audio src={songs[currentSongIndex]?.audio_url} ref={audioRef} />
//               <IconButton onClick={() => handleSkip(false)}><SkipPrevious /></IconButton>
//               <IconButton onClick={handlePlayPause}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
//               <IconButton onClick={() => handleSkip()}><SkipNext /></IconButton>
//               {/* Add your shuffle and loop buttons here */}
//               <IconButton><Shuffle /></IconButton>
//               <IconButton><Repeat /></IconButton>
        
      
//   </div>
//     );
//     }
// }

// export default MusicPlayerPage;







// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { IconButton, Box } from '@material-ui/core';
// import { PlayArrow, Pause, SkipNext, SkipPrevious, Shuffle, Repeat } from '@material-ui/icons';

// function MusicPlayerPage() {
//     const location = useLocation();
//     const { album, songIndex } = location.state; 

//     const [songs, setSongs] = useState(album.songs); 
//     const [currentSongIndex, setCurrentSongIndex] = useState(songIndex);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const audioRef = React.useRef();


//     useEffect(() => {
//       if (songs.length > 0) {
//         audioRef.current.src = songs[currentSongIndex].audio_url;
//         if (isPlaying) {
//           audioRef.current.play();
//         }
//       }
//     }, [currentSongIndex]);

//     // Play or pause the song
//     const handlePlayPause = () => {
//         if (isPlaying) {
//             audioRef.current.pause();
//         } else {
//             audioRef.current.play();
//         }
//         setIsPlaying(!isPlaying);
//     };

//     // Go to next or previous song
//     const handleSkip = (forward = true) => {
//         let index = currentSongIndex;
//         index = forward ? index + 1 : index - 1;
//         if (index < 0) index = songs.length - 1;
//         if (index >= songs.length) index = 0;
//         setCurrentSongIndex(index);
//         setIsPlaying(false); 
//         handlePlayPause(); 
//     };

//     if(songs.length > 0){

//     return (
//       <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//         <img src={songs[currentSongIndex]?.thumbnail} alt="Album cover" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
//         <h2>{songs[currentSongIndex]?.title}</h2>
//         <audio src={songs[currentSongIndex]?.audio_url} ref={audioRef} />
//         <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
//           <IconButton onClick={() => handleSkip(false)} style={{ color: isPlaying ? 'blue' : 'black' }}><SkipPrevious /></IconButton>
//           <IconButton onClick={handlePlayPause} style={{ color: isPlaying ? 'blue' : 'black' }}>{isPlaying ? <Pause /> : <PlayArrow />}</IconButton>
//           <IconButton onClick={() => handleSkip()} style={{ color: isPlaying ? 'blue' : 'black' }}><SkipNext /></IconButton>
//           {/* Add your shuffle and loop buttons here */}
//           <IconButton><Shuffle /></IconButton>
//           <IconButton><Repeat /></IconButton>
//         </Box>
//       </Box>
//     );
//     }
// }

// export default MusicPlayerPage;






// import React, { useState } from "react";

// function MusicPlayerPage() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const songs = [
//     {
//       title: "Song 1",
//       artist: "Artist 1",
//       audioUrl: "url_to_audio_1.mp3",
//       thumbnail: "url_to_thumbnail_1.jpg",
//     },
//     {
//       title: "Song 2",
//       artist: "Artist 2",
//       audioUrl: "url_to_audio_2.mp3",
//       thumbnail: "url_to_thumbnail_2.jpg",
//     },
//     // Add more songs with their details
//   ];

//   const currentSong = songs[currentSongIndex];

//   // Implement play/pause, forward, previous, and audio controls here

//   return (
//     <div className="music-player-container" style={{ marginTop: "70px", marginLeft: "20px" }}>
//       <div className="thumbnail">
//         <img src={currentSong.thumbnail} alt={currentSong.title} />
//       </div>
//       <div className="song-info">
//         <h3>{currentSong.title}</h3>
//         <p>{currentSong.artist}</p>
//       </div>
//       <div className="audio-controls">
//         {/* Implement play, pause, forward, and previous buttons here */}
//       </div>
//     </div>
//   );
// }

// export default MusicPlayerPage;





// import React, { useState } from 'react';
// import { IconButton, Box, Typography } from '@mui/material';
// import { PlayArrow, Pause, SkipPrevious, Repeat, Shuffle } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';

// function MusicPlayerPage() {
//   const { currentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//     // Add logic to play or pause the current song here
//   };

//   const handlePrev = () => {
//     // Implement logic to play the previous song
//     // This logic would depend on your application's state and how you maintain the playlist or queue.
//     // You may need to keep track of the current song's index and navigate to the previous song accordingly.
//   };

//   const handleLoop = () => {
//     setIsLooping(!isLooping);
//     // Add logic to enable or disable looping here
//   };

//   const handleShuffle = () => {
//     setIsShuffling(!isShuffling);
//     // Add logic to enable or disable shuffling here
//   };

//   return (
//     <Box>
//       <Typography variant="h6" gutterBottom>
//         {currentSong ? currentSong.title : 'No song selected'}
//       </Typography>
//       <IconButton onClick={handlePrev}>
//         <SkipPrevious />
//       </IconButton>
//       <IconButton onClick={handlePlayPause}>
//         {isPlaying ? <Pause /> : <PlayArrow />}
//       </IconButton>
//       <IconButton onClick={handleLoop}>
//         <Repeat color={isLooping ? 'primary' : 'inherit'} />
//       </IconButton>
//       <IconButton onClick={handleShuffle}>
//         <Shuffle color={isShuffling ? 'primary' : 'inherit'} />
//       </IconButton>
//     </Box>
//   );
// }

// export default MusicPlayerPage;








// import React, { useState, useEffect, useRef } from 'react';
// import { IconButton, Typography } from '@mui/material';
// import { PlayArrow, Pause, SkipPrevious, Repeat, Shuffle } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';

// function MusicPlayerPage() {
//   const { currentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);

//   const audioRef = useRef(new Audio(currentSong ? currentSong.audio_url : null));

//   // Use this effect to handle changes in the current song
//   useEffect(() => {
//     if (currentSong) {
//       audioRef.current.src = currentSong.audio_url;
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     } else {
//       audioRef.current.pause();
//     }
//   }, [currentSong, isPlaying]);

//   const handlePlayPause = () => {
//     if (currentSong) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handlePrev = () => {
//     // Implement logic to play the previous song.
//     // You may need to maintain a list of songs and their order to determine the previous song.
//   };

//   const handleLoop = () => {
//     setIsLooping(!isLooping);
//     // Add logic to enable or disable looping here.
//   };

//   const handleShuffle = () => {
//     setIsShuffling(!isShuffling);
//     // Add logic to enable or disable shuffling here.
//   };

  

//   return (
//     <div className="music-player" style={{ marginTop: "70px", marginLeft: "20px" }}>
//       <Typography variant="h6" gutterBottom>
//         {currentSong ? currentSong.title : 'No song selected'}
//       </Typography>
//       <IconButton onClick={handlePrev}>
//         <SkipPrevious />
//       </IconButton>
//       <IconButton onClick={handlePlayPause}>
//         {isPlaying ? <Pause /> : <PlayArrow />}
//       </IconButton>
//       <IconButton onClick={handleLoop}>
//         <Repeat color={isLooping ? 'primary' : 'inherit'} />
//       </IconButton>
//       <IconButton onClick={handleShuffle}>
//         <Shuffle color={isShuffling ? 'primary' : 'inherit'} />
//       </IconButton>
//       </div>
//   );
// }

// export default MusicPlayerPage;





// import React, { useState, useEffect, useRef } from 'react';
// import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { PlayArrow, Pause, SkipPrevious, Repeat, Shuffle } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';

// const cardStyle = {
//   backgroundColor: '#1d1c1c',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '16px',
//   textAlign: 'center',
//   marginTop: '53px',
// };

// const mediaStyle = {
//   width: '450px', // Adjust the width as needed
//   height: '400px', // Adjust the height as needed
//   borderRadius: '5px',
// };

// const iconStyle = {
//   fontSize: '36px', // Adjust the icon size as needed
//   color: 'white', // Change the icon color to white
// };

// const textStyle = {
//   fontSize: '24px', // Adjust the font size as needed
//   color: 'white',  // Change the text color to white
// };

// // Map of artist IDs to artist names
// const artistMap = {
//   '64ce7c0bbbbada037c35edaa': 'Sukhwinder Singh',
//   '64ce7c0bbbbada037c35edab': 'Salim Merchant',
//   '64ce7c0bbbbada037c35edac': 'Marianne D-Cruz',
//   // Add more mappings as needed
// };

// function MusicPlayerPage() {
//   const { currentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);

//   const audioRef = useRef(new Audio(currentSong ? currentSong.audio_url : null));

//   // Use this effect to handle changes in the current song
//   useEffect(() => {
//     if (currentSong) {
//       audioRef.current.src = currentSong.audio_url;
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     } else {
//       audioRef.current.pause();
//     }
//   }, [currentSong, isPlaying]);

//   const handlePlayPause = () => {
//     if (currentSong) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const handlePrev = () => {
//     // Implement logic to play the previous song.
//     // You may need to maintain a list of songs and their order to determine the previous song.
//   };

//   const handleLoop = () => {
//     setIsLooping(!isLooping);
//     // Add logic to enable or disable looping here.
//   };

//   const handleShuffle = () => {
//     setIsShuffling(!isShuffling);
//     // Add logic to enable or disable shuffling here.
//   };

//   return (
//     <Card className="music-player" style={cardStyle}>
//       <CardMedia
//         component="img"
//         alt={currentSong ? currentSong.title : 'No song selected'}
//         src={currentSong ? currentSong.thumbnail : 'placeholder_image_url'}
//         style={mediaStyle}
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom style={textStyle}>
//           {currentSong ? `${currentSong.title} - ${currentSong.artists && currentSong.artists.length > 0 ? currentSong.artists.map(artistId => artistMap[artistId]).join(', ') : 'Unknown Artist'}` : 'No song selected'}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" style={textStyle}>
//           Mood: {currentSong ? currentSong.mood : 'N/A'}
//         </Typography>
//         <IconButton onClick={handlePrev} style={iconStyle}>
//           <SkipPrevious />
//         </IconButton>
//         <IconButton onClick={handlePlayPause} style={iconStyle}>
//           {isPlaying ? <Pause /> : <PlayArrow />}
//         </IconButton>
//         <IconButton onClick={handleLoop} style={iconStyle}>
//           <Repeat color={isLooping ? 'primary' : 'inherit'} />
//         </IconButton>
//         <IconButton onClick={handleShuffle} style={iconStyle}>
//           <Shuffle color={isShuffling ? 'primary' : 'inherit'} />
//         </IconButton>
//       </CardContent>
//     </Card>
//   );
// }

// export default MusicPlayerPage;






//this is the newwst code

// import React, { useState, useEffect, useRef } from 'react';
// import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { PlayArrow, Pause, SkipPrevious,  SkipNext, Repeat, Shuffle } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';

// const cardStyle = {
//   backgroundColor: '#1d1c1c',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '16px',
//   textAlign: 'center',
//   marginTop: '53px',
// };

// const mediaStyle = {
//   width: '450px', // Adjust the width as needed
//   height: '400px', // Adjust the height as needed
//   borderRadius: '5px',
// };

// const iconStyle = {
//   fontSize: '36px', // Adjust the icon size as needed
//   color: 'white', // Change the icon color to white
// };

// const textStyle = {
//   fontSize: '24px', // Adjust the font size as needed
//   color: 'white',  // Change the text color to white
// };



// function MusicPlayerPage() {
//   const { currentSong, songs, indexSong, setIndexSong, isPlaying, setIsPlaying } = useMusicPlayer();
//   // const [isPlaying, setIsPlaying] = useState(false);
//   const [isLooping, setIsLooping] = useState(false);
//   const [isShuffling, setIsShuffling] = useState(false);


//   const audioRef = useRef(new Audio(currentSong[indexSong] ? currentSong[indexSong].audio_url : null));

//   // Use this effect to handle changes in the current song
//   useEffect(() => {
//     if (currentSong) {
//       audioRef.current.src = currentSong.audio_url;
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     } else {
//       audioRef.current.pause();
//     }
//   }, [currentSong, isPlaying]);

//   const handlePlayPause = () => {
//     if (currentSong) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   // const handlePrev = () => {
//   //   let currentIndex = songs.findIndex(song => song.id === currentSong.id);
//   //   if (currentIndex > 0) {
//   //     // setCurrentSong(songs[currentIndex - 1]);
//   //   } else if (isShuffling) {
//   //     let randomIndex = Math.floor(Math.random() * songs.length);
//   //     setCurrentSong(songs[randomIndex]);
//   //   }
//   // };

//   const handleNext = () => {
//     let currentIndex = songs.findIndex(song => song.id === currentSong.id);
//     if (currentIndex < songs.length - 1) {
//       setCurrentSong(songs[currentIndex + 1]);
//     } else if (isShuffling) {
//       let randomIndex = Math.floor(Math.random() * songs.length);
//       setCurrentSong(songs[randomIndex]);
//     }
//   };

//   const handleLoop = () => {
//     setIsLooping(!isLooping);
//     audioRef.current.loop = isLooping; 
//   };

//   const handleShuffle = () => {
//     setIsShuffling(!isShuffling);
//     if (isShuffling) {
//       let randomIndex = Math.floor(Math.random() * songs.length);
//       setCurrentSong(songs[randomIndex]);
//     }
//   };

//   return (
    
//     <Card className="music-player" style={cardStyle}>
//       <CardMedia
//         component="img"
//         alt={currentSong ? currentSong.title : 'No song selected'}
//         src={currentSong ? currentSong.thumbnail : 'placeholder_image_url'}
//         style={mediaStyle}
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom style={textStyle}>
//           {currentSong ? `${currentSong.title} - ${currentSong.artists ? currentSong.artists.map(artist => artist.name).join(', ') : 'Unknown Artist'}` : 'No song selected'}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" style={textStyle}>
//           Mood: {currentSong ? currentSong.mood : 'N/A'}
//         </Typography>
//         <IconButton onClick={handlePrev} style={iconStyle}>
//           <SkipPrevious />
//         </IconButton>
//         <IconButton onClick={handlePlayPause} style={iconStyle}>
//           {isPlaying ? <Pause /> : <PlayArrow />}
//         </IconButton>
//         <IconButton onClick={handleNext} style={iconStyle}>
//            <SkipNext />
//       </IconButton>
//         <IconButton onClick={handleLoop} style={iconStyle}>
//           <Repeat color={isLooping ? 'primary' : 'inherit'} />
//         </IconButton>
//         <IconButton onClick={handleShuffle} style={iconStyle}>
//           <Shuffle color={isShuffling ? 'primary' : 'inherit'} />
//         </IconButton>
//       </CardContent>
//     </Card>
//   );
// }

// export default MusicPlayerPage;


// import React, { useState, useEffect, useRef } from "react";
// import { IconButton, Typography, Card, CardContent, CardMedia,} from "@mui/material";
// import { PlayArrow,Pause,SkipPrevious,SkipNext} from "@mui/icons-material";
// import { useMusicPlayer } from "./MusicPlayerContext";

// const cardStyle = {
//   backgroundColor: "#1d1c1c",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: "16px",
//   textAlign: "center",
//   marginTop: "53px",
// };

// const mediaStyle = {
//   width: "450px", // Adjust the width as needed
//   height: "400px", // Adjust the height as needed
//   borderRadius: "5px",
// };

// const iconStyle = {
//   fontSize: "36px", // Adjust the icon size as needed
//   color: "white", // Change the icon color to white
// };

// const textStyle = {
//   fontSize: "24px", // Adjust the font size as needed
//   color: "white", // Change the text color to white
// };

// function MusicPlayerPage() {
//     const { currentSong, isPlaying, playlist, indexSong, playNextSong, playPrevSong, togglePlayPause,  playSong } = useMusicPlayer();
//     // const [isLooping, setIsLooping] = useState(false);
//     // const [isShuffling, setIsShuffling] = useState(false);

//   const audioRef = useRef(
//     new Audio(currentSong ? currentSong.audio_url : null)
//   );

//   // Use this effect to handle changes in the current song
//    useEffect(() => {
//     if (currentSong) {
//       audioRef.current.src = currentSong.audio_url;
//       if (isPlaying) {
//         audioRef.current.play();
//       }
//     } else {
//       audioRef.current.pause();
//     }
//   }, [currentSong, isPlaying]);

//   const handlePlayPause = () => {
//     if (currentSong) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//         console.log("current song:", currentSong);
//       }
//       togglePlayPause();
//     }
//   };

//   const handleNext = () => {
//     if (playlist.length > 0) {
//         console.log("Playlist:", playlist); 
//       // Calculate the index for the next song
//       const nextIndex = (indexSong + 1) % playlist.length;
//       console.log("Next Index:", nextIndex); // Add this line
//     console.log("Next Song:", playlist[nextIndex]);
//       playSong(playlist[nextIndex], playlist);
//     }
//   };
  

//   const handlePrev = () => {
//     if (playlist.length > 0) {
//       // Calculate the index for the previous song
//       const prevIndex = (indexSong - 1 + playlist.length) % playlist.length;
//       playSong(playlist[prevIndex], playlist);
//     }
//   };
  

//   return (
//     <Card className="music-player" style={cardStyle}>
//       <CardMedia
//         component="img"
//         alt={currentSong ? currentSong.title : "No song selected"}
//         src={currentSong ? currentSong.thumbnail : "placeholder_image_url"}
//         style={mediaStyle}
//       />
//       <CardContent>
//         <Typography variant="h6" gutterBottom style={textStyle}>
//           {currentSong
//             ? `${currentSong.title} 
//               `
//             : "No song selected"}
//         </Typography>
//         {/* <Typography variant="body2" color="textSecondary" style={textStyle}>
//           Mood: {currentSong ? currentSong.mood : "N/A"}
//         </Typography> */}
       
//         <IconButton onClick={handlePrev} style={iconStyle}>
//           <SkipPrevious />
//         </IconButton>
//         <IconButton onClick={handlePlayPause} style={iconStyle}>
//           {isPlaying ? <Pause /> : <PlayArrow />}
//         </IconButton>
//         <IconButton onClick={handleNext} style={iconStyle}>
//         <SkipNext />
//         </IconButton>
//         {/* <IconButton onClick={handleLoop} style={iconStyle}>
//           <Repeat color={isLooping ? "primary" : "inherit"} />
//         </IconButton>
//         <IconButton onClick={handleShuffle} style={iconStyle}>
//           <Shuffle color={isShuffling ? "primary" : "inherit"} />
//         </IconButton> */}
//       </CardContent>
//     </Card>
//   );
// }

// export default MusicPlayerPage;







import React, { useState, useEffect, useRef } from 'react';
import {
  IconButton,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { PlayArrow, Pause, SkipPrevious, SkipNext } from '@mui/icons-material';
import { useMusicPlayer } from './MusicPlayerContext';

const cardStyle = {
  backgroundColor: '#1d1c1c',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
  textAlign: 'center',
  marginTop: '53px',
};

const mediaStyle = {
  width: '450px',
  height: '400px',
  borderRadius: '5px',
};

const iconStyle = {
  fontSize: '36px',
  color: 'white',
};

const textStyle = {
  fontSize: '24px',
  color: 'white',
};

function MusicPlayerPage() {
  const { currentSong, isPlaying, playlist, playNextSong, playPrevSong, togglePlayPause, playSong } = useMusicPlayer();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ setPlaylist] = useState([]);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Make the API request here to fetch the playlist data
    fetch('https://academics.newtonschool.co/api/v1/music/song', {
      headers: {
        'projectId': 'YOUR_PROJECT_ID',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response has a 'data' field containing the songs
        if (data.status === 'success' && data.data && data.data.length > 0) {
          setPlaylist(data.data);
          // You might want to select and play the first song from the playlist
          playSong(data.data[0], data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [playSong]);
  
  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.audio_url;
      if (isPlaying) {
        audioRef.current.play();
      }
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const handlePlayPause = () => {
    if (currentSong) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      togglePlayPause();
    }
  };

  

  const handleNext = () => {
    if (playlist.length > 0) {
      // Calculate the index for the next song
      const nextIndex = (currentIndex + 1) % playlist.length;
      setCurrentIndex(nextIndex);
      playSong(playlist[nextIndex], playlist);
    }
  };

  const handlePrev = () => {
    if (playlist.length > 0) {
      // Calculate the index for the previous song
      const prevIndex = (currentIndex - 1 + playlist.length) % playlist.length;
      setCurrentIndex(prevIndex);
      playSong(playlist[prevIndex], playlist);
    }
  };

  return (
    <Card className="music-player" style={cardStyle}>
      <CardMedia
        component="img"
        alt={currentSong ? currentSong.title : 'No song selected'}
        src={currentSong ? currentSong.thumbnail : 'placeholder_image_url'}
        style={mediaStyle}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom style={textStyle}>
          {currentSong
            ? `${currentSong.title}`
            : 'No song selected'}
        </Typography>
        <IconButton onClick={handlePrev} style={iconStyle}>
          <SkipPrevious />
        </IconButton>
        <IconButton onClick={handlePlayPause} style={iconStyle}>
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton onClick={handleNext} style={iconStyle}>
          <SkipNext />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default MusicPlayerPage;
