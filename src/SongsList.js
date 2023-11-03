// import React from "react";
// import "./SongsList.css";

// function SongList({ searchResults }) {
//   return (
//     <div className="song-list-overlay">
//       <div className="songs-list">
//         <ul>
//           {searchResults.map((song) => (
//             <li key={song.id}>{song.title}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default SongList;




import React from "react";
import "./SongsList.css";

function SongList({ searchResults }) {
  return (
    <div className="song-list-overlay">
      <div className="songs-list">
        <ul>
          {searchResults.map((song) => (
            <li key={song.id}>
              <img src={song.thumbnail} alt={song.title} className="song-thumbnail" />
              <span style={{ fontSize: "13px" }}>{song.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default SongList;







