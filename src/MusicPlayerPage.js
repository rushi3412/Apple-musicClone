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
