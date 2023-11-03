import React, { useState, useEffect } from 'react';

const FavoriteSongs = () => {
    const [favorites, setFavorites] = useState([]);
    const [token, setToken] = useState('YOUR_JWT_TOKEN'); // Initialize with your token or get it from your authentication flow

    // Function to fetch favorites based on the token
    const fetchFavorites = async () => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/music/album?limit=100', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectId': 'f104bi07c490'
                }
            });

            if (response.ok) {
                const res = await response.json();
                setFavorites(res.data);
            } else {
                console.error('Error fetching album data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching album data:', error);
        }
    };

    useEffect(() => {
        // Fetch favorites when the component mounts
        fetchFavorites();
    }, [token]);

    const toggleFavorite = async (songId) => {
        try {
            const response = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'projectID': 'f104bi07c490',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "songId": songId })
            });

            if (response.ok) {
                // After updating favorites, re-fetch the list to update the UI
                fetchFavorites();
            } else {
                console.error('Error toggling favorite:', response.statusText);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return (
        <div>
            <h2>Liked Songs</h2>
            {favorites.map((song) => (
                <div key={song.id}>
                    <p>{song.title}</p>
                    <button onClick={() => toggleFavorite(song.id)}>
                        {song.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FavoriteSongs;
