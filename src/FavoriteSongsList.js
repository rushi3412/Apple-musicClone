// import React, { useState, useEffect } from 'react';

// const FavoriteSongsList = () => {
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//       // Define the function to fetch favorites based on the token
      
//       const fetchFavorites = async () => {
//         const token = localStorage.getItem("token");
//           try {
//               const response = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
//                   method: 'GET',
//                   headers: {
//                       'Authorization': `Bearer ${token}`,
//                       'projectID': 'f104bi07c490'
//                   }
//               });
              
//               if (response.ok) {
//                   const data = await response.json();
//                   console.log( "data", data);
//                   setFavorites(data.data); // Assuming the response is an array of favorite songs
//               } else {
//                   console.error('Failed to fetch favorites');
//               }
//           } catch (error) {
//               console.error('Error fetching favorites:', error);
//           }
//       };

//       // Call the fetchFavorites function when the component mounts
//       fetchFavorites();
//   }, []);

//     const toggleFavorite = async (songId) => {

//     };
// console.log( "favi",favorites);
//     return (
//         <div style={{ marginTop: '53px' }}>
//             <h2>Liked Songs</h2>
//             {favorites?.songs?.map((song) => (

//                 <div key={song.id}>
//                     <p>{song.title}</p>
//                     {/* <button onClick={() => toggleFavorite(song.id)}>
//                         {song.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
//                     </button> */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FavoriteSongsList;





import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addSongToFavorites, removeSongFromFavorites } from './authenticate';

const FavoriteSongsList = () => {
    const [favorites, setFavorites] = useState([]);
    const [likedSongs, setLikedSongs] = useState([]);
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
      const fetchFavorites = async () => {
        const token = localStorage.getItem("token");
          try {
              const response = await fetch('https://academics.newtonschool.co/api/v1/music/favorites/like', {
                  method: 'GET',
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'projectID': 'f104bi07c490'
                  }
              });
              
              if (response.ok) {
                  const data = await response.json();
                  console.log( "data", data);
                  setFavorites(data.data);
              } else {
                  console.error('Failed to fetch favorites');
              }
          } catch (error) {
              console.error('Error fetching favorites:', error);
          }
      };

      fetchFavorites();
  }, []);

    const handleLikeToggle = async (songId) => {
        try {
            if (likedSongs.includes(songId)) {
                await removeSongFromFavorites("/music/favorites/like", songId);
                setIsFavourite(false);
            } else {
                await addSongToFavorites("/music/favorites/like", songId);
                setIsFavourite(true);
            }

            setLikedSongs((prevLikedSongs) =>
                prevLikedSongs.includes(songId)
                    ? prevLikedSongs.filter((id) => id !== songId)
                    : [...prevLikedSongs, songId]
            );
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

console.log( "favi",favorites);
    return (
        <div style={{ marginTop: '4rem' }}>
            <h2>Liked Songs</h2>
            <table>
                <tbody>
                    {favorites?.songs?.map((song, index) => (
                        <tr key={song.id}>
                            <td>
                                <img src={song.thumbnail} alt={song.title} style={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                <button onClick={() => handleLikeToggle(song.id)}>
                                    {isFavourite ? <FavoriteIcon /> : <FavoriteBorderIcon />} {/* Use Material-UI icons here */}
                                </button>
                                {song.title}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoriteSongsList;
