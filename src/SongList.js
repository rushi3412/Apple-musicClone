// import React from 'react';
// import { Typography, List, ListItem, ListItemText } from '@mui/material';
// import { useLocation } from 'react-router-dom';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;

//   if (!album) {
//     return null; 
//   }

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <List>
//         {album.songs.map((song) => (
//           <ListItem key={song._id}>
//             <ListItemText primary={song.title} secondary={`Artist: ${song.artist[0].name}`} />
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default SongList;




// // import React, { useState } from 'react';
// // import { Typography, List, ListItem, ListItemText, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// // import { useLocation } from 'react-router-dom';
// // import { PlayArrow, Pause } from '@mui/icons-material'; // Import the play and pause icons

// // function SongList() {
// //   const { state } = useLocation();
// //   const { album } = state;
// //   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false)); // Array to track play/pause for each song

// //   const togglePlay = (index) => {
// //     const updatedIsPlaying = [...isPlaying];
// //     updatedIsPlaying[index] = !updatedIsPlaying[index]; // Toggle the state for the clicked song
// //     setIsPlaying(updatedIsPlaying);
// //   };

// //   if (!album) {
// //     return null;
// //   }

// //   return (
// //     <div>
// //       <Typography variant="h5" gutterBottom>
// //         Songs in {album.title}
// //       </Typography>
// //       <List>
// //         {album.songs.map((song, index) => (
// //           <ListItem key={song._id}>
// //             <Card style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
// //               <CardMedia
// //                 component="img"
// //                 alt={song.title}
// //                 height="100"
// //                 image={album.image}
// //                 style={{ width: '100px' }} // Set the width for the image
// //               />
// //               <CardContent style={{ flex: 1 }}>
// //                 <ListItemText primary={song.title} secondary={`Artist: ${song.artist[0].name}`} />
// //               </CardContent>
// //               <IconButton onClick={() => togglePlay(index)}>
// //                 {isPlaying[index] ? <Pause /> : <PlayArrow />} {/* Toggle the icon */}
// //               </IconButton>
// //             </Card>
// //           </ListItem>
// //         ))}
// //       </List>
// //     </div>
// //   );
// // }

// // export default SongList;








// import React, { useState } from 'react';
// import { Typography, List, ListItem, ListItemText, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause } from '@mui/icons-material'; // Import PlayArrow and Pause icons

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false)); // Array to track play/pause for each song

//   const togglePlay = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index]; // Toggle the state for the clicked song
//     setIsPlaying(updatedIsPlaying);
//   };

//   if (!album) {
//     return null;
//   }

//   return (
//     <div>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <List>
//         {album.songs.map((song, index) => (
//           <ListItem key={song._id}>
//             <Card style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//               <CardMedia
//                 component="img"
//                 alt={song.title}
//                 height="100"
//                 image={song.thumbnail}
//                 style={{ width: '100px' }} // Set the width for the image
//               />
//               <CardContent style={{ flex: 1 }}>
//                 <ListItemText primary={song.title} secondary={`Artist(s): ${song.artist.map((artist) => artist.name).join(', ')}`} />
//               </CardContent>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />} {/* Toggle the icon */}
//               </IconButton>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default SongList;



// import React, { useState } from 'react';
// import { Typography, List, ListItem, ListItemText, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause } from '@mui/icons-material'; // Import PlayArrow and Pause icons

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false)); // Array to track play/pause for each song

//   const togglePlay = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index]; // Toggle the state for the clicked song
//     setIsPlaying(updatedIsPlaying);
//   };

//   if (!album) {
//     return null;
//   }

//   return (
//     <div>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <List>
//         {album.songs.map((song, index) => (
//           <ListItem key={song._id}>
//             <Card style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
//               <CardMedia
//                 component="img"
//                 alt={song.title}
//                 height="100"
//                 image={song.thumbnail}
//                 style={{ width: '100px' }} // Set the width for the image
//               />
//               <CardContent style={{ flex: 1 }}>
//                 <ListItemText primary={song.title} secondary={`Artists: ${song.artist.map((artist) => artist.name).join(', ')}`} />
//                 <ListItemText secondary={`Mood: ${song.mood}`} />
//               </CardContent>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />} {/* Toggle the icon */}
//               </IconButton>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default SongList;





// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, ListItemText, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause } from '@mui/icons-material';
// import './SongList.css';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({}); // Object to store artist names

//   const togglePlay = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index];
//     setIsPlaying(updatedIsPlaying);
//   };

//   // Function to fetch artist names based on artist IDs
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)]; // Get unique artist IDs

//     // Fetch artist names for each unique artist ID
//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#333131', boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)', border: '2px solid white' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain',  maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <List>
//         {album.songs.map((song, index) => (
//           <ListItem key={song._id} className="song-list-item">
//             <Card style={{ display: 'flex', alignItems: 'center', width: '100%', backgroundColor:  index % 2 === 0 ? 'lightgrey' : 'grey' }}>
//               <CardContent style={{ flex: 1 }}>
//                 <ListItemText primary={song.title} secondary={`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`} />
//                 <ListItemText secondary={`Mood: ${song.mood}`} />
//               </CardContent>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//             </Card>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// }

// export default SongList;








// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause } from '@mui/icons-material';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({}); 

//   const togglePlay = (index) => {
//     const updatedIsPlaying = [...isPlaying];
//     updatedIsPlaying[index] = !updatedIsPlaying[index];
//     setIsPlaying(updatedIsPlaying);
//   };

//   // Function to fetch artist names based on artist IDs
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)]; // Get unique artist IDs

//     // Fetch artist names for each unique artist ID
//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#333131', boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#333131', boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem key={song._id} style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#333131' : '#808080' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//     </div>
//   );
// }

// export default SongList;










// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause } from '@mui/icons-material';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({}); 
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   // const navigate = useNavigate();

//   const togglePlay = (index) => {
//     const updatedIsPlaying = [...isPlaying]; // Create a copy of the current state
//     updatedIsPlaying[index] = !updatedIsPlaying[index]; // Toggle the play state of the selected song
//     setIsPlaying(updatedIsPlaying); // Update the state
//   };

 
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)]; 

   
//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   const handleAddToFavoriteSongs = (song) => {
//     setFavoriteSongs([...favoriteSongs, song]);
//   };

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem key={song._id} style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <Button variant="contained" color="primary" onClick={() => handleAddToFavoriteSongs(song)}>Add to Favorites</Button>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//     </div>
//   );
// }

// export default SongList;








// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const navigate = useNavigate();

//   const togglePlay = (index) => {
//     navigate('/music-player', { state: { album, songIndex: index } });
//   };

//   const toggleFavorite = (song) => {
//     if (favoriteSongs.includes(song)) {
//       // If the song is already in favorites, remove it
//       setFavoriteSongs(favoriteSongs.filter((favSong) => favSong !== song));
//     } else {
//       // Otherwise, add it to favorites
//       setFavoriteSongs([...favoriteSongs, song]);
//     }
//   };

//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//     </div>
//   );
// }

// export default SongList;










// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const navigate = useNavigate();
//   // const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const togglePlay = (index) => {
//     setCurrentSongIndex(index);
//     setIsPlaying(!isPlaying);
//   };
  

//   const toggleFavorite = (song) => {
//     if (favoriteSongs.includes(song)) {
//       // If the song is already in favorites, remove it
//       setFavoriteSongs(favoriteSongs.filter((favSong) => favSong !== song));
//     } else {
//       // Otherwise, add it to favorites
//       setFavoriteSongs([...favoriteSongs, song]);
//     }
//   };

//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   // const [currentSongIndex, setCurrentSongIndex] = useState(0);

//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       return newIsPlaying;
//     });
//   };

//   const toggleFavorite = (song) => {
//     if (favoriteSongs.includes(song)) {
//       // If the song is already in favorites, remove it
//       setFavoriteSongs(favoriteSongs.filter((favSong) => favSong !== song));
//     } else {
//       // Otherwise, add it to favorites
//       setFavoriteSongs([...favoriteSongs, song]);
//     }
//   };

//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//     </div>
//   );
// }

// export default SongList;







// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';


// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer(); 
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);


//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   const toggleFavorite = (song) => {
//     if (favoriteSongs.includes(song)) {
//       // If the song is already in favorites, remove it
//       setFavoriteSongs(favoriteSongs.filter((favSong) => favSong !== song));
//     } else {
//       // Otherwise, add it to favorites
//       setFavoriteSongs([...favoriteSongs, song]);
//     }
//   };

//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//               <audio
//                 ref={(audio) => (audioElements[index] = audio)}
//                 src={song.audio_url}
//                 preload="auto"
//               ></audio>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';



// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer(); 
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]); 
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);


//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: { 
//         // 'Authorization': `Bearer ${token}`, // Use token in your fetch call
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });
//     // Refresh favorites
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//     .then(response => response.json())
//     .then(res => setFavorites(res.data)) // Use setFavorites here
//     .catch(error => console.error('Error fetching album data:', error));
//   };
  
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//               <audio
//                 ref={(audio) => (audioElements[index] = audio)}
//                 src={song.audio_url}
//                 preload="auto"
//               ></audio>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';



// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer(); 
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]); 
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);


//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: { 
//         // 'Authorization': `Bearer ${token}`, // Use token in your fetch call
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });
//     // Refresh favorites
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//     .then(response => response.json())
//     .then(res => setFavorites(res.data)) // Use setFavorites here
//     .catch(error => console.error('Error fetching album data:', error));
//   };
  
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];

//     const names = {};
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`YOUR_ARTIST_API_ENDPOINT/${artistId}`);
//         const data = await response.json();
//         names[artistId] = data.name;
//       })
//     );

//     setArtistNames(names);
//   };

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//             key={song._id}
//             style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//               <span>{song.title} - {song.artist.map((artistId) => artistNames[artistId]).join(', ')}</span>
//               <span>{`Mood: ${song.mood}`}</span>
//             </div>
//             <IconButton onClick={() => togglePlay(index)}>
//               {isPlaying[index] ? <Pause /> : <PlayArrow />}
//             </IconButton>
//             <IconButton onClick={() => toggleFavorite(song)}>
//               {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//             </IconButton>
//             <audio
//               ref={(audio) => (audioElements[index] = audio)}
//               src={song.audio_url}
//               preload="auto"
//             ></audio>
//           </ListItem>          
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';



// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer(); 
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]); 
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);


//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: { 
//         // 'Authorization': `Bearer ${token}`, 
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });
    
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//     .then(response => response.json())
//     .then(res => setFavorites(res.data)) 
//     .catch(error => console.error('Error fetching album data:', error));
//   };
  
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};
  
    
//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490' 
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//         console.log("data for arti" + res.data.name);
//       })
//     );
  
//     setArtistNames(names);
//   };
  

//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//         {album.songs.map((song, index) => (
//   <ListItem
//     key={song._id}
//     style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//   >
//     <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//       <span>{song.title}</span>
//       <span>{`Artists: ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//       <span>{`Mood: ${song.mood}`}</span>
//     </div>
//     <IconButton onClick={() => togglePlay(index)}>
//       {isPlaying[index] ? <Pause /> : <PlayArrow />}
//     </IconButton>
//     <IconButton onClick={() => toggleFavorite(song)}>
//       {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//     </IconButton>
//     <audio
//       ref={(audio) => (audioElements[index] = audio)}
//       src={song.audio_url}
//       preload="auto"
//     ></audio>
//   </ListItem>
// ))}

//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;





// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: {
//         // 'Authorization': `Bearer ${token}`,
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });

//     // Refresh the list of favorite songs
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => setFavorites(res.data))
//       .catch(error => console.error('Error fetching album data:', error));
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <span>{song.title}</span>
//                 {/* Display artist names based on the artistIds and artistNames state */}
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//               <audio
//                 ref={(audio) => (audioElements[index] = audio)}
//                 src={song.audio_url}
//                 preload="auto"
//               ></audio>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: {
//         // 'Authorization': `Bearer ${token}`,
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });

//     // Refresh the list of favorite songs
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => setFavorites(res.data))
//       .catch(error => console.error('Error fetching album data:', error));
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img
//                     src={song.thumbnail} // Use the thumbnail image here
//                     alt={song.title}
//                     style={{ width: '50px', height: '50px', marginRight: '10px' }}
//                   />
//                   <span>{song.title}</span>
//                 </div>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//               </div>
//               <IconButton onClick={() => togglePlay(index)}>
//                 {isPlaying[index] ? <Pause /> : <PlayArrow />}
//               </IconButton>
//               <IconButton onClick={() => toggleFavorite(song)}>
//                 {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//               </IconButton>
//               <audio
//                 ref={(audio) => (audioElements[index] = audio)}
//                 src={song.audio_url}
//                 preload="auto"
//               ></audio>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;





// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: {
//         // 'Authorization': `Bearer ${token}`,
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });

//     // Refresh the list of favorite songs
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => setFavorites(res.data))
//       .catch(error => console.error('Error fetching album data:', error));
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                   <img
//                     src={song.thumbnail} // Use the thumbnail image here
//                     alt={song.title}
//                     style={{ width: '50px', height: '50px', marginRight: '10px' }}
//                   />
//                   <IconButton
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'transparent',
//                     }}
//                     onClick={() => togglePlay(index)}
//                   >
//                     {isPlaying[index] ? <Pause /> : <PlayArrow />}
//                   </IconButton>
//                 </div>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <span>{`Mood: ${song.mood}`}</span>
//                 <IconButton onClick={() => toggleFavorite(song)}>
//                   {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//                 </IconButton>
//                 <audio
//                   ref={(audio) => (audioElements[index] = audio)}
//                   src={song.audio_url}
//                   preload="auto"
//                 ></audio>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;







// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: {
//         // 'Authorization': `Bearer ${token}`,
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });

//     // Refresh the list of favorite songs
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => setFavorites(res.data))
//       .catch(error => console.error('Error fetching album data:', error));
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                   <img
//                     src={song.thumbnail} // Use the thumbnail image here
//                     alt={song.title}
//                     style={{ width: '50px', height: '50px', marginRight: '10px' }}
//                   />
//                   <IconButton
//                     style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'transparent',
//                     }}
//                     onClick={() => togglePlay(index)}
//                   >
//                     {isPlaying[index] ? <Pause /> : <PlayArrow />}
//                   </IconButton>
//                 </div>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <IconButton onClick={() => toggleFavorite(song)}>
//                   {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//                 </IconButton>
//                 <audio
//                   ref={(audio) => (audioElements[index] = audio)}
//                   src={song.audio_url}
//                   preload="auto"
//                 ></audio>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;










// import React, { useState, useEffect } from 'react';
// import { Typography, List, ListItem, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';

// function SongList() {
//   const { state } = useLocation();
//   const { album } = state;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favorites, setFavorites] = useState([]);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//       method: 'PATCH',
//       headers: {
//         // 'Authorization': `Bearer ${token}`,
//         'projectID': 'f104bi07c490',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ "songId": song.id })
//     });

//     // Refresh the list of favorite songs
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => setFavorites(res.data))
//       .catch(error => console.error('Error fetching album data:', error));
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       <Card style={{ backgroundColor: '#1d1c1c' }}>
//         <List>
//           {album.songs.map((song, index) => (
//             <ListItem
//               key={song._id}
//               style={{ paddingBottom: '10px', paddingTop: '10px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', color: 'white' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                   <img
//                     src={song.thumbnail} // Use the thumbnail image here
//                     alt={song.title}
//                     style={{ width: '50px', height: '50px', marginRight: '10px' }}
//                   />
//                   {hoveredIndex === index && (
//                     <IconButton
//                       style={{
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'transparent',
//                       }}
//                       onClick={() => togglePlay(index)}
//                     >
//                       {isPlaying[index] ? <Pause /> : <PlayArrow />}
//                     </IconButton>
//                   )}
//                 </div>
//                 <span>{song.title}</span>
//                 <span>{`Artist(s): ${song.artist.map((artistId) => artistNames[artistId]).join(', ')}`}</span>
//                 <IconButton onClick={() => toggleFavorite(song)}>
//                   {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
//                 </IconButton>
//                 <audio
//                   ref={(audio) => (audioElements[index] = audio)}
//                   src={song.audio_url}
//                   preload="auto"
//                 ></audio>
//               </div>
//             </ListItem>
//           ))}
//         </List>
//       </Card>
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//     </div>
//   );
// }

// export default SongList;






// import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from  './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';
// import './SongList.css';
// import { addSongToFavorites, removeSongFromFavorites } from './authenticate';

// function SongList() {
//   const { state } = useLocation();
//   const album = state && state.album;
//   const { currentSong, setCurrentSong, songs, indexSong, setIndexSong, isPlaying, setIsPlaying } = useMusicPlayer();
//   // const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [isfavorites, setIsFavorites] = useState(false);
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const handleToggle = (song, index) => {
//     setCurrentSong(song);
//     setIndexSong(index);
//     setIsPlaying(true);
//   }

 


//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };
// console.log("songlis " , favoriteSongs)
//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (songId) => {
//     try {
//       if (favoriteSongs.includes(songId)) {
//         await removeSongFromFavorites("/music/favorites/like", songId);
//         setIsFavorites(false);
//       } else {
//         await addSongToFavorites("/music/favorites/like", songId);
//         setIsFavorites(true);
//       }

//       setFavoriteSongs((prevLikedSongs) =>
//         prevLikedSongs.includes(songId)
//           ? prevLikedSongs.filter((id) => id !== songId)
//           : [...prevLikedSongs, songId]
//       );
//     } catch (error) {
//       console.error("Error toggling like:", error);
//     }
//   }
//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       {album.songs && album.songs.length > 0 && (
//       <TableContainer component={Card} style={{ backgroundColor: '#1d1c1c' }}>
//         <Table className="table">
//           <TableHead>
//             <TableRow >
//               <TableCell style={{ color: 'white' }}>Song</TableCell>
//               <TableCell style={{ color: 'white' }}>Artist Names</TableCell>
//               <TableCell style={{ color: 'white' }}>Album Name</TableCell>
//               <TableCell style={{ color: 'white' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {album.songs.map((song, index) => (
//               <TableRow key={song._id} onClick={handleToggle(song, index)} style={{ backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#232525' }} className="table-row">
//                 <TableCell className="table-cell">
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img
//                       src={song.thumbnail}
//                       alt={song.title}
//                       style={{ width: '40px', height: '40px', marginRight: '10px' }}
//                     />
//                     <div style={{ color: 'white' }}>
//                       {song.title}
//                     </div>
//                   </div>
//                 </TableCell >
//                 <TableCell style={{ color: 'white' }}>{song.artist.map((artistId) => artistNames[artistId]).join(', ')}</TableCell>
//                 <TableCell style={{ color: 'white' }}>{album.title}</TableCell>
//                 <TableCell>
//                   <IconButton onClick={() => togglePlay(index)}>
//                     {isPlaying[index] ? <Pause /> : <PlayArrow />}
//                   </IconButton>
//                   <IconButton onClick={() => toggleFavorite(song)}>
//                     {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
                    
//                   </IconButton>
//                   <audio
//                     ref={(audio) => (audioElements[index] = audio)}
//                     src={song.audio_url}
//                     preload="auto"
//                   ></audio>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       )}
//     </div>
//   );
// }

// export default SongList;










import React, { useState, useEffect } from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
import { useMusicPlayer } from  './MusicPlayerContext';
import FavoriteSongs from './FavoriteSongs';
import './SongList.css';
import { addSongToFavorites, removeSongFromFavorites } from './authenticate';

function SongList() {
  const { state } = useLocation();
  const album = state && state.album;
  const { playSong } = useMusicPlayer();
  const { setCurrentSong } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
  const [artistNames, setArtistNames] = useState({});
  const [isfavorites, setIsFavorites] = useState(false);
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

  const [hoveredIndex, setHoveredIndex] = useState(null);

 
  const playSongFromAlbum = (song) => {
    playSong(song, album.songs);
  };

  // Function to toggle play/pause for a song
  const togglePlay = (index) => {
    setIsPlaying((prevIsPlaying) => {
      const newIsPlaying = [...prevIsPlaying];
      newIsPlaying[index] = !newIsPlaying[index];
      setCurrentSong(album.songs[index]);

      // Pause all other audio elements when a new one starts playing
      audioElements.forEach((audio, i) => {
        if (i !== index && audio) {
          audio.pause();
        }
      });

      if (newIsPlaying[index]) {
        audioElements[index].play();
      } else {
        audioElements[index].pause();
      }

      return newIsPlaying;
    });
  };
console.log("songlis " , favoriteSongs)
  // Function to toggle favorite status for a song
  const toggleFavorite = async (songId) => {
    try {
      if (favoriteSongs.includes(songId)) {
        await removeSongFromFavorites("/music/favorites/like", songId);
        setIsFavorites(false);
      } else {
        await addSongToFavorites("/music/favorites/like", songId);
        setIsFavorites(true);
      }

      setFavoriteSongs((prevLikedSongs) =>
        prevLikedSongs.includes(songId)
          ? prevLikedSongs.filter((id) => id !== songId)
          : [...prevLikedSongs, songId]
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  }
  // Function to fetch artist names and store them in the artistNames state
  const fetchArtistNames = async () => {
    const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
    const uniqueArtistIds = [...new Set(artistIds)];
    const names = {};

    await Promise.all(
      uniqueArtistIds.map(async (artistId) => {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
          headers: {
            'projectId': 'f104bi07c490'
          }
        });
        const res = await response.json();
        names[artistId] = res.data.name;
      })
    );

    // Update the artistNames state with the fetched artist names
    setArtistNames(names);
  };

  // Use the useEffect hook to fetch artist names when the album changes
  useEffect(() => {
    if (album) {
      fetchArtistNames();
    }
  }, [album]);

  if (!album) {
    return null;
  }

  return (
    <div style={{ marginTop: '53px', padding: '20px' }}>
      <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: 'transparent' }}>
        <CardMedia
          component="img"
          height="200"
          alt={album.title}
          src={album.image}
          style={{ objectFit: 'contain', maxWidth: '200px' }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ color: 'white' }}>
            {album.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
            Description: {album.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
            Artists: {album.artists.map((artist) => artist.name).join(', ')}
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{ color: 'white' }}>
            Release Date: {new Date(album.release).toLocaleDateString()}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" gutterBottom>
        Songs in {album.title}
      </Typography>
      {album.songs && album.songs.length > 0 && (
      <TableContainer component={Card} style={{ backgroundColor: 'transparent' }}>
        <Table className="table">
          <TableHead>
            <TableRow >
              <TableCell style={{ color: 'white' }}>Song</TableCell>
              <TableCell style={{ color: 'white' }}>Artist Names</TableCell>
              <TableCell style={{ color: 'white' }}>Album Name</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {album.songs.map((song, index) => (
              <TableRow key={song._id} style={{ backgroundColor:'transparent' }} className="table-row">
                  <TableCell className="table-cell">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={song.thumbnail}
            alt={song.title}
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          <IconButton
            className="play-pause-button"
            onClick={() => togglePlay(index)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {isPlaying[index] ? <Pause /> : <PlayArrow />}
          </IconButton>
        </div>
        <div style={{ color: 'white' }}>
          {song.title}
        </div>
      </div>
    </TableCell>
                <TableCell style={{ color: 'white' }}>{song.artist.map((artistId) => artistNames[artistId]).join(', ')}</TableCell>
                <TableCell style={{ color: 'white' }}>{album.title}</TableCell>
                <TableCell>
                  {/* <IconButton onClick={() => togglePlay(index)}>
                    {isPlaying[index] ? <Pause /> : <PlayArrow />}
                  </IconButton> */}
                  <IconButton onClick={() => toggleFavorite(song)}>
                    {favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />}
                    
                  </IconButton>
                  <audio
                    ref={(audio) => (audioElements[index] = audio)}
                    src={song.audio_url}
                    preload="auto"
                  ></audio>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      )}
    </div>
  );
}

export default SongList;









// import React, { useState, useEffect } from 'react';
// import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, CardMedia, IconButton } from '@mui/material';
// import { useLocation } from 'react-router-dom';
// import { PlayArrow, Pause, Favorite, FavoriteBorder } from '@mui/icons-material';
// import { useMusicPlayer } from  './MusicPlayerContext';
// import FavoriteSongs from './FavoriteSongs';
// import FavoriteSongsList from './FavoriteSongsList';
// import './SongList.css';
// import { getToken } from './authenticate';


// function SongList() {
//   const { state } = useLocation();
//   const album = state && state.album;
//   const { setCurrentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(Array(album.songs.length).fill(false));
//   const [artistNames, setArtistNames] = useState({});
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [token, setToken] = useState(getToken());
//   const [audioElements, setAudioElements] = useState(Array(album.songs.length).fill(null));

//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Function to toggle play/pause for a song
//   const togglePlay = (index) => {
//     setIsPlaying((prevIsPlaying) => {
//       const newIsPlaying = [...prevIsPlaying];
//       newIsPlaying[index] = !newIsPlaying[index];
//       setCurrentSong(album.songs[index]);

//       // Pause all other audio elements when a new one starts playing
//       audioElements.forEach((audio, i) => {
//         if (i !== index && audio) {
//           audio.pause();
//         }
//       });

//       if (newIsPlaying[index]) {
//         audioElements[index].play();
//       } else {
//         audioElements[index].pause();
//       }

//       return newIsPlaying;
//     });
//   };

//   // Function to retrieve the token from local storage
//   const getToken = () => {
//     const token = localStorage.getItem('token');
//     return token;
//   };

//   // Function to toggle favorite status for a song
//   const toggleFavorite = async (song) => {
//     const token = getToken(); // Retrieve the token from local storage

//     if (!token) {
//       // Handle the case where the user is not authenticated (no token)
//       // You can display a message or redirect to a login page
//       console.log('User is not authenticated. Please log in.');
//       return;
//     }

//     try {
//       const response = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//         method: 'PATCH',
//         headers: {
//           'projectID': 'f104bi07c490',
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`, // Include the token in the request headers
//         },
//         body: JSON.stringify({ "songId": song._id })
//       });

//       if (response.ok) {
//         // Update the list of favorite songs based on the response
//         setFavoriteSongs((prevFavoriteSongs) => {
//           if (prevFavoriteSongs.includes(song)) {
//             // If the song was in the favorites, remove it
//             return prevFavoriteSongs.filter((favoriteSong) => favoriteSong !== song);
//           } else {
//             // If the song was not in the favorites, add it
//             return [...prevFavoriteSongs, song];
//           }
//         });
//       } else {
//         console.error('Error toggling favorite:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error toggling favorite:', error);
//     }
//   };

//   // Function to fetch artist names and store them in the artistNames state
//   const fetchArtistNames = async () => {
//     const artistIds = album.songs.reduce((ids, song) => [...ids, ...song.artist], []);
//     const uniqueArtistIds = [...new Set(artistIds)];
//     const names = {};

//     await Promise.all(
//       uniqueArtistIds.map(async (artistId) => {
//         const response = await fetch(`https://academics.newtonschool.co/api/v1/music/artist/${artistId}`, {
//           headers: {
//             'projectId': 'f104bi07c490'
//           }
//         });
//         const res = await response.json();
//         names[artistId] = res.data.name;
//       })
//     );

//     // Update the artistNames state with the fetched artist names
//     setArtistNames(names);
//   };

//   // Use the useEffect hook to fetch artist names when the album changes
//   useEffect(() => {
//     if (album) {
//       fetchArtistNames();
//     }
//   }, [album]);

//   if (!album) {
//     return null;
//   }

//   return (
//     <div style={{ marginTop: '53px', padding: '20px' }}>
//       <Card style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: '#1d1c1c' }}>
//         <CardMedia
//           component="img"
//           height="200"
//           alt={album.title}
//           src={album.image}
//           style={{ objectFit: 'contain', maxWidth: '200px' }}
//         />
//         <CardContent>
//           <Typography variant="h5" gutterBottom style={{ color: 'white', fontSize: '12px' }}>
//             {album.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white', fontSize: '12px' }}>
//             Description: {album.description}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white', fontSize: '12px' }}>
//             Artists: {album.artists.map((artist) => artist.name).join(', ')}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" style={{ color: 'white', fontSize: '12px' }}>
//             Release Date: {new Date(album.release).toLocaleDateString()}
//           </Typography>
//         </CardContent>
//       </Card>

//       <Typography variant="h5" gutterBottom>
//         Songs in {album.title}
//       </Typography>
//       {album.songs && album.songs.length > 0 && (
//         <TableContainer component={Card} style={{ margin: '0 auto', backgroundColor: '#1d1c1c' }}>
//           <Table className="table" style={{ backgroundColor: '#1d1c1c' }}>
//             <TableHead>
//               <TableRow style={{ height: '20px' }}>
//                 <TableCell style={{ color: 'white' }}>Song</TableCell>
//                 <TableCell style ={{ color: 'white' }}>Artist Names</TableCell>
//                 <TableCell style = {{ color: 'white' }}>Album Name</TableCell>
//                 <TableCell style={{ color: 'white' }}>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {album.songs.map((song, index) => (
//                <TableRow key={song._id} style={{ height: '20px', backgroundColor: index % 2 === 0 ? '#1d1c1c' : '#1d1c1c' }} className="table-row">
//                <TableCell className="table-cell">
//                  <div style={{ display: 'flex', alignItems: 'center' }}>
//                    <div style={{ position: 'relative' }}>
//                      <img
//                        src={song.thumbnail}
//                        alt={song.title}
//                        style={{ width: '40px', height: '40px', marginRight: '10px' }}
//                      />
//                      <IconButton
//                      className="play-pause-button"
//                        onClick={() => togglePlay(index)}
//                        style={{
//                          position: 'absolute',
//                          top: '50%',
//                          left: '50%',
//                          transform: 'translate(-50%, -50%)',
//                        }}
//                      >
//                        {isPlaying[index] ? <Pause /> : <PlayArrow />}
//                      </IconButton>
//                    </div>
//                    <div style={{ color: 'white' }}>
//                      {song.title}
//                    </div>
//                  </div>
//                </TableCell>
//                <TableCell style={{ color: 'white', fontSize: '11px' }}>{song.artist.map((artistId) => artistNames[artistId]).join(', ')}</TableCell>
//                <TableCell style={{ color: 'white', fontSize: '11px' }}>{album.title}</TableCell>
//                <TableCell>
//                  {token ? (
//                    <IconButton onClick={() => toggleFavorite(song)}>
//                      {token ? (
//                        favoriteSongs.includes(song) ? <Favorite style={{ color: 'red' }} /> : <FavoriteBorder />
//                      ) : (
//                        <p>Please log in to add songs to your favorites.</p>
//                      )}
//                    </IconButton>
//                  ) : (
//                    <p>Please log in to add songs to your favorites.</p>
//                  )}
//                  <audio
//                    ref={(audio) => (audioElements[index] = audio)}
//                    src={song.audio_url}
//                    preload="auto"
//                  ></audio>
//                </TableCell>
//              </TableRow>
             
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       <FavoriteSongs favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />
//       <FavoriteSongsList favoriteSongs={favoriteSongs} />
//     </div>
//   );
// }

// export default SongList;
