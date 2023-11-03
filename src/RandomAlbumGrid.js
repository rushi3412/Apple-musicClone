// import React, { useState, useEffect } from 'react';

// function AlbumFetcher({ projectId, onAlbumsFetched }) {
//   const [albums, setAlbums] = useState([]);

//   useEffect(() => {
//     fetch(`https://academics.newtonschool.co/api/v1/music/album?limit=300`, {
//       headers: {
//         projectId: 'f104bi07c490' 
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//         onAlbumsFetched(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, [projectId, onAlbumsFetched]);

//   return null;
// }

// export default AlbumFetcher;



// import React, { useState, useEffect } from 'react';
// import './RandomAlbumGrid.css'; // Import your CSS file
// import { Card, CardContent, Typography } from '@mui/material';

// function RandomAlbumGrid() {
//   const [randomAlbums, setRandomAlbums] = useState([]);

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=300', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         const allAlbums = res.data;
//         // Select 25 random albums
//         const randomAlbums = [];
//         while (randomAlbums.length < 25) {
//           const randomIndex = Math.floor(Math.random() * allAlbums.length);
//           randomAlbums.push(allAlbums[randomIndex]);
//         }
//         setRandomAlbums(randomAlbums);
//       })
//       .catch(error => console.error('Error fetching random albums:', error));
//   }, []);

//   return (
//     <div className="random-album-grid">
//       {/* <h2>Random Albums</h2> */}
//       <div className="album-grid">
//         {randomAlbums.map((album, index) => (
//           <div className="album" key={album.id}>
//             <Card className="album-card custom-card">
//               {index === 0 ? (
//                 <>
//                   <CardContent>
//                     <div className="text-truncate">
//                       <Typography variant="h5" component="div" className="album-title">
//                         {album.title}
//                       </Typography>
//                     </div>
//                     <div className="text-truncate">
//                       <Typography variant="body2" color="textSecondary" className="artist-name">
//                         {album.artists[0].name}
//                       </Typography>
//                     </div>
//                   </CardContent>
//                 </>
//               ) : (
//                 <>
//                   <img src={album.image} alt={album.title} className="album-image" />
//                   <CardContent>
//                     <div className="text-truncate">
//                       <Typography variant="h5" component="div" className="album-title">
//                         {album.title}
//                       </Typography>
//                     </div>
//                     <div className="text-truncate">
//                       <Typography variant="body2" color="textSecondary" className="song-title">
//                         {album.artists[0].name}
//                       </Typography>
//                     </div>
//                   </CardContent>
//                 </>
//               )}
//               <img src={album.image} alt={album.title} className="album-image" />
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RandomAlbumGrid;







// import React, { useState, useEffect } from 'react';
// import './RandomAlbumGrid.css'; // Import your CSS file
// import { Card, CardContent, Typography } from '@mui/material';

// function RandomAlbumGrid() {
//   const [randomAlbums, setRandomAlbums] = useState([]);
//   const [currentSection, setCurrentSection] = useState(1); // Initialize with section 1

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=300', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         const allAlbums = res.data;
//         // Split allAlbums into sections of 25 albums each
//         const albumSections = [];
//         for (let i = 0; i < allAlbums.length; i += 25) {
//           albumSections.push(allAlbums.slice(i, i + 25));
//         }
//         const randomSection = Math.floor(Math.random() * albumSections.length) + 1;
//         setCurrentSection(randomSection);
//         const albumsToShow = albumSections[randomSection - 1];
//         setRandomAlbums(albumsToShow);
//       })
//       .catch(error => console.error('Error fetching random albums:', error));
//   }, []);

//   return (
//     <div className="random-album-grid">
//       <div className="album-grid">
//         {randomAlbums.map((album, index) => (
//           <div className="album" key={album.id}>
//             <Card className="album-card2 custom-card" style={{ backgroundColor: '#1d1c1c' }}>
//               <img src={album.image} alt={album.title} className="album-image2" />
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title" style={{ fontSize: '13px' }}>
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="artist-name">
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RandomAlbumGrid;






import React, { useState, useEffect } from 'react';
import './RandomAlbumGrid.css'; // Import your CSS file
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import SongList from './SongList'; // Import the SongList component

function RandomAlbumGrid() {
  const [randomAlbums, setRandomAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const navigate = useNavigate(); // Create a navigate function

  useEffect(() => {
    fetch('https://academics.newtonschool.co/api/v1/music/album?limit=300', {
      headers: {
        'projectId': 'f104bi07c490'
      }
    })
      .then(response => response.json())
      .then(res => {
        const allAlbums = res.data;
        // Split allAlbums into sections of 25 albums each
        const albumSections = [];
        for (let i = 0; i < allAlbums.length; i += 25) {
          albumSections.push(allAlbums.slice(i, i + 25));
        }
        const randomSection = Math.floor(Math.random() * albumSections.length);
        const albumsToShow = albumSections[randomSection];
        setRandomAlbums(albumsToShow);
      })
      .catch(error => console.error('Error fetching random albums:', error));
  }, []);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
    // Navigate to the "/album" route and pass the selected album as state
    navigate('/album', { state: { album } });
  };

  return (
    <div className="random-album-grid">
      <div className="album-grid">
        {randomAlbums.map((album, index) => (
          <div
            className="album"
            key={album.id}
            onClick={() => handleAlbumClick(album)}
          >
            <Card className="album-card2 custom-card" style={{ backgroundColor: '#1d1c1c' }}>
              <img src={album.image} alt={album.title} className="album-image2" />
              <CardContent>
                <div className="text-truncate">
                  <Typography variant="h5" component="div" className="album-title" style={{ fontSize: '13px' }}>
                    {album.title}
                  </Typography>
                </div>
                <div className="text-truncate">
                  <Typography variant="body2" color="textSecondary" className="artist-name">
                    {album.artists[0].name}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {selectedAlbum && (
        <SongList album={selectedAlbum} />
      )}
    </div>
  );
}

export default RandomAlbumGrid;



// import React, { useState, useEffect } from 'react';
// import './RandomAlbumGrid.css'; // Import your CSS file
// import { Card, CardContent, Typography } from '@mui/material';

// function RandomAlbumGrid({ albums }) {
//   const [randomAlbums, setRandomAlbums] = useState([]);
//   const [currentSection, setCurrentSection] = useState(1); // Initialize with section 1

//   useEffect(() => {
//     if (albums.length > 0) {
//     // You can use the provided 'albums' prop or fetch data here.
//     // In this example, we'll assume that 'albums' is an array of albums.

//     // Calculate the current section based on the length of 'albums'
//     const albumsPerSection = 25;
//     const totalSections = Math.ceil(albums.length / albumsPerSection);

//     // Get the current section index based on the URL route or any other logic
//     // For example, if you have a 'sectionIndex' state, you can set it here.

//     // Calculate the start and end index for the current section
//     const startIndex = (currentSection - 1) * albumsPerSection;
//     const endIndex = startIndex + albumsPerSection;

//     // Get the albums for the current section
//     const albumsToShow = albums.slice(startIndex, endIndex);

//     setRandomAlbums(albumsToShow);
//   }
// }, [currentSection, albums]);

// if (albums.length === 0) {
//   return null; // Don't render anything if albums is empty or undefined
// }

//   return (
//     <div className="random-album-grid">
//       <div className="album-grid">
//         {randomAlbums.map((album, index) => (
//           <div className="album" key={album.id}>
//             <Card className="album-card2 custom-card" style={{ backgroundColor: '#1d1c1c' }}>
//               <img src={album.image} alt={album.title} className="album-image2" />
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title" style={{ fontSize: '20px' }}>
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="artist-name">
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RandomAlbumGrid;




// import React, { useState, useEffect } from 'react';
// import DisplaySongs from './DisplaySongs'; 
// import './RandomAlbumGrid.css'; // Import your CSS file
// import { Card, CardContent, Typography } from '@mui/material';

// function RandomAlbumGrid() {
//   const [randomAlbums, setRandomAlbums] = useState([]);
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [albumSongs, setAlbumSongs] = useState({}); // State to store songs for each album

//   useEffect(() => {
//     // Fetch albums
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=300', {
//       headers: {
//         'projectId': 'f104bi07c490' // Replace with your actual project ID
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         const allAlbums = res.data;
//         const randomAlbums = [];
//         while (randomAlbums.length < 25) {
//           const randomIndex = Math.floor(Math.random() * allAlbums.length);
//           randomAlbums.push(allAlbums[randomIndex]);
//         }
//         setRandomAlbums(randomAlbums);

//         // Fetch songs for each album
//         randomAlbums.forEach(album => {
//           fetchSongsForAlbum(album);
//         });
//       })
//       .catch(error => console.error('Error fetching random albums:', error));
//   }, []);

//   // Function to fetch songs for a specific album
//   const fetchSongsForAlbum = (album) => {
//     // Fetch songs for the album
//     fetch('https://academics.newtonschool.co/api/v1/music/song', {
//       headers: {
//         'projectId': 'f104bi07c490', // Replace with your actual project ID
//       }
//     })
//       .then(response => response.json())
//       .then(songs => {
//         setAlbumSongs(prevState => ({
//           ...prevState,
//           [album._id]: songs
//         }));
//       })
//       .catch(error => console.error('Error fetching songs for album:', error));
//   };

//   return (
//     <div className="random-album-grid">
//       <h2>Random Albums</h2>
//       <div className="album-grid">
//         {randomAlbums.map((album, index) => (
//           <div className="album" key={album.id} onClick={() => setSelectedAlbum(album)}>
//             <Card className="album-card custom-card">
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title">
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="artist-name">
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//                 {selectedAlbum && selectedAlbum.id === album.id && (
//                   <div>
//                     <h3>Songs:</h3>
//                     <ul>
//                       {albumSongs[album.id].map(song => (
//                         <li key={song.id}>{song.title}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </CardContent>
//               <img src={album.image} alt={album.title} className="album-image" />
//               <DisplaySongs album={album} />
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RandomAlbumGrid;
