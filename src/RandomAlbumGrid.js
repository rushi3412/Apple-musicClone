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
