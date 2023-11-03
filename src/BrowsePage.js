// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography, Button, Link } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// import SearchBar from './SearchBar';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res); 
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     // When an album is clicked, navigate to the SongList component with album data
//     navigate('/album', { state: { album } });
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       <Grid container spacing={2} >
//         {albums.map((album) => (
//           <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
//             <Card className="album-card">
//               <img
//                 src={album.image}
//                 alt={album.title}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title">
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="song-title">
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//                 <Link> 
//                   <Button onClick={() => handleAlbumClick(album)}>View Songs</Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default BrowsePage;









// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 
// import SearchBar from './SearchBar';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res); 
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     // When an album is clicked, navigate to the SongList component with album data
//     navigate('/album', { state: { album } });
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       <Grid container spacing={2} >
//         {albums.map((album) => (
//           <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
//             <Card className="album-card" style={{ backgroundColor: '#333131', cursor: 'pointer' }} onClick={() => handleAlbumClick(album)}>
//               <img
//                 src={album.image}
//                 alt={album.title}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default BrowsePage;





// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res); 
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     // When an album is clicked, navigate to the SongList component with album data
//     navigate('/album', { state: { album } });
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       <Grid container spacing={2} >
        
//         {albums.map((album) => (
//           <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
//             <Card className="album-card custom-card" style={{ backgroundColor: '#1d1c1c', cursor: 'pointer' }} onClick={() => handleAlbumClick(album)}>
//               <img
//                 src={album.image}
//                 alt={album.title}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//               <CardContent>
//                 <div className="text-truncate">
//                   <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                     {album.title}
//                   </Typography>
//                 </div>
//                 <div className="text-truncate">
//                   <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                     {album.artists[0].name}
//                   </Typography>
//                 </div>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// }

// export default BrowsePage;







// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; 

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate(); 

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res); 
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     // When an album is clicked, navigate to the SongList component with album data
//     navigate('/album', { state: { album } });
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <Grid container spacing={2}>
//           {albums.map((album) => (
//             <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
//               <Card className="album-card custom-card" style={{ backgroundColor: '#1d1c1c', cursor: 'pointer' }} onClick={() => handleAlbumClick(album)}>
//                 <img
//                   src={album.image}
//                   alt={album.title}
//                   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <div className="text-truncate">
//                     <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.title}
//                     </Typography>
//                   </div>
//                   <div className="text-truncate">
//                     <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.artists[0].name}
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;




//checking if works 
// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];

//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }

//     return albumSections.map((section, index) => (
//       <div key={index}>
//         <h2 style={{cursor: 'pointer'}} onClick={() => handleSectionClick(index)}>Section {index + 1}</h2>
//         <Grid container spacing={2}>
//           {(expandedSections[index] ? section : section.slice(0, 4)).map(album => (
//             <Grid item key={album._id} xs={12} sm={6} md={4} lg={3}>
//               <Card
//                 className="album-card custom-card"
//                 style={{ backgroundColor: '#1d1c1c', cursor: 'pointer' }}
//                 onClick={() => handleAlbumClick(album)}
//               >
//                 <img
//                   src={album.image}
//                   alt={album.title}
//                   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <div className="text-truncate">
//                     <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.title}
//                     </Typography>
//                   </div>
//                   <div className="text-truncate">
//                     <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.artists[0].name}
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     ));
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;







//this code gets the horizontal scroll correct when in expanded section 
// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components'; // Import styled-components

// // Define your styled components
// const AlbumContainer = styled.div`
//   display: flex;
//   overflow-x: auto;
//   padding: 1em;
// `;

// const Album = styled.div`
//   flex: 0 0 auto;
//   width: 200px;
//   margin: 1em;
// `;

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];

//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }

//     return albumSections.map((section, index) => (
//       <div key={index}>
//         <h2 style={{cursor: 'pointer'}} onClick={() => handleSectionClick(index)}>Section {index + 1}</h2>
//         <AlbumContainer>
//           {(expandedSections[index] ? section : section.slice(0, 4)).map(album => (
//             <Album>
//               <Card
//                 className="album-card custom-card"
//                 style={{ backgroundColor: '#1d1c1c', cursor: 'pointer' }}
//                 onClick={() => handleAlbumClick(album)}
//               >
//                 <img
//                   src={album.image}
//                   alt={album.title}
//                   style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//                 />
//                 <CardContent>
//                   <div className="text-truncate">
//                     <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.title}
//                     </Typography>
//                   </div>
//                   <div className="text-truncate">
//                     <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                       {album.artists[0].name}
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Album>
//           ))}
//         </AlbumContainer>
//       </div>
//     ));
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;



// BrowsePage.js
// this code gets the expanded section correct 
// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Grid, Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];
  
//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }
  
//     return albumSections.map((section, index) => (
//       <div key={index}>
//         <h2 style={{cursor: 'pointer'}} onClick={() => handleSectionClick(index)}>Section {index + 1}</h2>
//         <div style={{ display: 'flex', overflowX: expandedSections[index] ? 'visible' : 'auto', padding: '1em', flexDirection: expandedSections[index] ? 'column' : 'row' }}>
//           <div style={{ display: 'grid', gridTemplateColumns: expandedSections[index] ? 'repeat(auto-fill, minmax(200px, 1fr))' : 'none', gap: '1em' }}>
//             {(expandedSections[index] ? section : section.slice(0, 4)).map(album => (
//               <div style={{ width: '200px' }}>
//                 <Card
//                   className="album-card custom-card"
//                   style={{ backgroundColor: '#1d1c1c', cursor: 'pointer' }}
//                   onClick={() => handleAlbumClick(album)}
//                 >
//                   <img
//                     src={album.image}
//                     alt={album.title}
//                     style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//                   />
//                   <CardContent>
//                     <div className="text-truncate">
//                       <Typography variant="h5" component="div" className="album-title" style={{ color: 'white', fontSize: 'small' }}>
//                         {album.title}
//                       </Typography>
//                     </div>
//                     <div className="text-truncate">
//                       <Typography variant="body2" color="textSecondary" className="song-title" style={{ color: 'white', fontSize: 'small' }}>
//                         {album.artists[0].name}
//                       </Typography>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     ));
//   };
  
//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;




// BrowsePage.js
// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];

//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }

//     return albumSections.map((section, index) => (
//       <div key={index} className="section">
//         <h2 className="section-heading" onClick={() => handleSectionClick(index)}>Section {index + 1}</h2>
//         <div className={`album-container ${expandedSections[index] ? 'expanded' : ''}`}>
//           {section.map(album => (
//             <div className="album" onClick={() => handleAlbumClick(album)}>
//               <Card className="album-card custom-card">
//                 <img
//                   src={album.image}
//                   alt={album.title}
//                   className="album-image"
//                 />
//                 <CardContent>
//                   <div className="text-truncate">
//                     <Typography variant="h5" component="div" className="album-title">
//                       {album.title}
//                     </Typography>
//                   </div>
//                   <div className="text-truncate">
//                     <Typography variant="body2" color="textSecondary" className="song-title">
//                       {album.artists[0].name}
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;






// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import { Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=200', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];

//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }

//     return albumSections.map((section, index) => (
//       <div key={index} className={`section section-${index + 1}`}>
//         <h2 className="section-heading" onClick={() => handleSectionClick(index)}>
//           Section {index + 1}
//         </h2>
//         <div className={`album-container ${expandedSections[index] ? 'expanded-album-container' : ''}`}>
//           {section.map(album => (
//             <div className="album" onClick={() => handleAlbumClick(album)} key={album.id}>
//               <Card className="album-card custom-card">
//                 <img src={album.image} alt={album.title} className="album-image" />
//                 <CardContent>
//                   <div className="text-truncate">
//                     <Typography variant="h5" component="div" className="album-title">
//                       {album.title}
//                     </Typography>
//                   </div>
//                   <div className="text-truncate">
//                     <Typography variant="body2" color="textSecondary" className="song-title">
//                       {album.artists[0].name}
//                     </Typography>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;












// import React, { useState, useEffect } from 'react';
// import './BrowsePage.css';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import PauseIcon from '@mui/icons-material/Pause';
// import { Card, CardContent, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import RandomAlbumGrid from './RandomAlbumGrid';

// function BrowsePage() {
//   const [albums, setAlbums] = useState([]);
//   const navigate = useNavigate();
//   const [expandedSections, setExpandedSections] = useState({});

//   useEffect(() => {
//     fetch('https://academics.newtonschool.co/api/v1/music/album?limit=300', {
//       headers: {
//         'projectId': 'f104bi07c490'
//       }
//     })
//       .then(response => response.json())
//       .then(res => {
//         console.log('API Data:', res);
//         setAlbums(res.data);
//       })
//       .catch(error => console.error('Error fetching album data:', error));
//   }, []);

//   useEffect(() => {
//     const albumTitles = document.querySelectorAll('.album-title');
//     albumTitles.forEach(title => {
//       if (title.scrollWidth > title.clientWidth) {
//         title.classList.add('scrolling');
//       }
//     });
//   }, [albums]);

//   const handleAlbumClick = (album) => {
//     console.log('Album clicked:', album);
//     navigate('/album', { state: { album } });
//   };

//   const handleSectionClick = (index) => {
//     if (index === 1 || index === 2 || index === 3 ||
//       index === 4 || index === 5 || index === 6 ||
//       index === 7 || index === 8 || index === 9 ||
//       index === 10 || index === 11) {
//        // If "Playlist on the Pulse" is clicked, navigate to the "/random-albums" route
//       navigate('/random-albums');
//     } else { setExpandedSections(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   }
//   };

//   const handlePlayPauseClick = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const renderAlbumSections = () => {
//     const albumsPerSection = 25;
//     const albumSections = [];

//     for (let i = 0; i < albums.length; i += albumsPerSection) {
//       const section = albums.slice(i, i + albumsPerSection);
//       albumSections.push(section);
//     }

//     return albumSections.map((section, index) => (
//       <div key={index} className={`section section-${index + 1}`}>
//         {index !== 0 && (
//           <h2 className="section-heading" onClick={() => handleSectionClick(index)}>
//             {index === 1 ? 'Playlist on the Pulse' : index === 2 ? 'Now in Spatial Audio' : index === 3 
//             ? 'New Music' : index === 4 ? 'DJ Mixes' : index === 5 ? 'Just Ask Siri' : index === 6 
//             ? 'Apple Music Radio' : index === 7 
//             ? 'Discover More Apple Music' : index === 8 
//             ? 'Meditation Moments' : index === 9 ? 'Just Updated' : index === 10 
//             ? 'Sounds of Sampha' : index === 11 ? 'Coming Soon' : `Custom Heading ${index + 1}`}
//           </h2>
//         )}
//         <div className={`album-container ${expandedSections[index] ? 'expanded-album-container' : ''}`}>
//           {section.map(album => (
//             <div className="album" onClick={() => handleAlbumClick(album)} key={album.id}>
//               <Card className="album-card custom-card">
//                 {index === 0 ? (
//                   <>
//                     <CardContent>
//                       <div className="text-truncate">
//                         <Typography variant="h5" component="div" className="album-title">
//                           {album.title}
//                         </Typography>
//                       </div>
//                       <div className="text-truncate">
//                         <Typography variant="body2" color="textSecondary" className="song-title">
//                           {album.artists[0].name}
//                         </Typography>
//                       </div>
//                     </CardContent>
//                     <div className="image-container">
//         <img src={album.image} alt={album.title} className="album-image" />
//         <div className="play-pause-button">
//           <PlayArrowIcon /> {/* Play icon */}
//         </div>
//       </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="image-container">
//         <img src={album.image} alt={album.title} className="album-image hover-effect" /> {/* Add hover-effect class here */}
//         <div className="play-pause-button" onClick={handlePlayPauseClick}>
//         {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} 
//           {/* Add play/pause button icon here */}
//         </div>
//       </div>
//                     <CardContent>
//                       <div className="text-truncate">
//                         <Typography variant="h5" component="div" className="album-title">
//                           {album.title}
//                         </Typography>
//                       </div>
//                       <div className="text-truncate">
//                         <Typography variant="body2" color="textSecondary" className="song-title">
//                           {album.artists[0].name}
//                         </Typography>
//                       </div>
//                     </CardContent>
//                   </>
//                 )}
//               </Card>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <div className='screen-container'>
//       <h1>Browse Albums</h1>
//       {albums && albums.length > 0 && (
//         <div>
//           {renderAlbumSections()}
//         </div>
//       )}
//     </div>
//   );
// }

// export default BrowsePage;







import React, { useState, useEffect } from 'react';
import './BrowsePage.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause'; // Import PauseIcon
import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CircularProgress from "@mui/material/CircularProgress";
import RandomAlbumGrid from './RandomAlbumGrid';

function BrowsePage() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [isPlaying, setIsPlaying] = useState(false); // Add isPlaying state

  useEffect(() => {
    fetch("https://academics.newtonschool.co/api/v1/music/album?limit=300", {
      headers: {
        projectId: "f104bi07c490",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("API Data:", res);
        setAlbums(res.data);
        setIsLoading(false); // Set isLoading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching album data:", error);
        setIsLoading(false); // Set isLoading to false in case of an error
      });
  }, []);

  useEffect(() => {
    const albumTitles = document.querySelectorAll('.album-title');
    albumTitles.forEach(title => {
      if (title.scrollWidth > title.clientWidth) {
        title.classList.add('scrolling');
      }
    });
  }, [albums]);

  const handleAlbumClick = (album) => {
    console.log('Album clicked:', album);
    navigate('/album', { state: { album } });
  };

  const handleSectionClick = (index) => {
    if (index === 1 || index === 2 || index === 3 ||
      index === 4 || index === 5 || index === 6 ||
      index === 7 || index === 8 || index === 9 ||
      index === 10 || index === 11) {
      // If "Playlist on the Pulse" is clicked, navigate to the "/random-albums" route
      navigate('/random-albums');
    } else {
      setExpandedSections(prevState => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    }
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
  };

  const renderAlbumSections = () => {
    const albumsPerSection = 25;
    const albumSections = [];

    for (let i = 0; i < albums.length; i += albumsPerSection) {
      const section = albums.slice(i, i + albumsPerSection);
      albumSections.push(section);
    }

    return albumSections.map((section, index) => (
      <div key={index} className={`section section-${index + 1}`}>
        {index !== 0 && (
          <h2 className="section-heading" onClick={() => handleSectionClick(index)}>
            {index === 1 ? 'Playlist on the Pulse' : index === 2 ? 'Now in Spatial Audio' : index === 3
              ? 'New Music' : index === 4 ? 'DJ Mixes' : index === 5 ? 'Just Ask Siri' : index === 6
              ? 'Apple Music Radio' : index === 7
              ? 'Discover More Apple Music' : index === 8
              ? 'Meditation Moments' : index === 9 ? 'Just Updated' : index === 10
              ? 'Sounds of Sampha' : index === 11 ? 'Coming Soon' : `Custom Heading ${index + 1}`}
          </h2>
        )}
        <div className={`album-container ${expandedSections[index] ? 'expanded-album-container' : ''}`}>
          {section.map(album => (
            <div className="album" onClick={() => handleAlbumClick(album)} key={album.id}>
              <Card className="album-card custom-card">
                {index === 0 ? (
                  <>
                    <CardContent>
                      <div className="text-truncate">
                        <Typography variant="h5" component="div" className="album-title" style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif' }}>
                          {album.title}
                        </Typography>
                      </div>
                      <div className="text-truncate">
                        <Typography variant="body2" color="textSecondary" className="song-title" style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                          {album.artists[0].name}
                        </Typography>
                      </div>
                    </CardContent>
                    <div className="image-container">
                      <img src={album.image} alt={album.title} className="album-image" />
                      <div
                        className={`play-pause-button ${isPlaying ? 'visible' : ''}`}
                        onClick={handlePlayPauseClick}
                      >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} {/* Play or Pause icon */}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-container">
                      <img src={album.image} alt={album.title} className="album-image hover-effect" /> {/* Add hover-effect class here */}
                      <div
                        className={`play-pause-button hover-visible ${isPlaying ? 'visible' : ''}`}
                        onClick={handlePlayPauseClick}
                      >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />} {/* Play or Pause icon */}
                      </div>
                    </div>
                    <CardContent>
                      <div className="text-truncate">
                        <Typography variant="h5" component="div" className="album-title" style={{ fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                          {album.title}
                        </Typography>
                      </div>
                      <div className="text-truncate">
                        <Typography variant="body2" color="textSecondary" className="song-title">
                          {album.artists[0].name}
                        </Typography>
                      </div>
                    </CardContent>
                  </>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className='screen-container' >
      <h1 style={{ fontSize: '30px', fontFamily: 'Arial, sans-serif', borderBottom: '1px solid white' }}>Browse</h1>
      {isLoading ? (
        <div className="loading-container">
          <CircularProgress />
          <p>Loading...</p>
        </div>
      ) : (
        albums && albums.length > 0 && <div>{renderAlbumSections()}</div>
        )}
    </div>
  );
}

export default BrowsePage;
