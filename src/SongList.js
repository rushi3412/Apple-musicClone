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
