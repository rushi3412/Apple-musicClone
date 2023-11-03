// import './App.css';
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import BrowsePage from "./BrowsePage";
// import MusicPlayerPage from "./MusicPlayerPage"; // Import the MusicPlayerPage component
// import SignIn from './SignIn';
// import SongList from './SongList'; // Import the SongList component
// import MainContent from './MainContent';

// function App() {
//   return (
//     <Router>
//       <div style={{ display: "flex" }} className='screen-container'>
//         <Sidebar />
//         <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//           <Navbar />
//           <div style={{ padding: "20px", flexGrow: 1 }}>
//           <MainContent>
//             <Routes>
//               <Route path="/browse" element={<BrowsePage />} />
//               <Route path="/music-player" element={<MusicPlayerPage />} /> {/* Route to MusicPlayerPage */}
//               <Route path="/signin" element={<SignIn />} />
//               <Route path="/album" element={<SongList />} /> {/* Route to SongList */}
//               <Route path="/" element={<BrowsePage />} /> {/* Default to BrowsePage */}
//             </Routes>
//             </MainContent>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;










// import './App.css';
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import BrowsePage from "./BrowsePage";
// import MusicPlayerPage from "./MusicPlayerPage";
// import SignIn from './SignIn';
// import SongList from './SongList';
// import Favorites from './Favorites'; 
// import MainContent from './MainContent';

// function App() {
//   const [favoriteSongs, setFavoriteSongs] = useState([]);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSong, setCurrentSong] = useState(null);

//   const handlePlayPause = () => {
//     setIsPlaying(!isPlaying);
//   };

//   const handleSelectSong = (song) => {
//     setCurrentSong(song);
//     setIsPlaying(true);
//   };

//   const toggleFavorite = (song) => {
//     setFavoriteSongs((prevFavorites) => {
//       if (prevFavorites.some((favSong) => favSong._id === song._id)) {
        
//         return prevFavorites.filter((favSong) => favSong._id !== song._id);
//       } else {
       
//         return [...prevFavorites, song];
//       }
//     });
//   };

//   return (
//     <Router>
//       <div style={{ display: "flex" }} className='screen-container'>
//         <Sidebar />
//         <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
//         <Navbar isPlaying={isPlaying} onPlayPause={handlePlayPause} />
//           <div style={{ padding: "20px", flexGrow: 1 }}>
//             <MainContent>
//               <Routes>
//                 <Route path="/music-player" element={<MusicPlayerPage song={currentSong} isPlaying={isPlaying} onPlayPause={handlePlayPause} />} />
//                 <Route path="/album" element={<SongList onSelectSong={handleSelectSong} />} />
//                 <Route path="/browse" element={<BrowsePage favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />} />
//                 <Route path="/music-player" element={<MusicPlayerPage />} />
//                 <Route path="/signin" element={<SignIn />} />
//                 <Route path="/album" element={<SongList favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />} />
//                 <Route path="/favorites" element={<Favorites favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />} /> 
//                 <Route path="/" element={<BrowsePage favoriteSongs={favoriteSongs} toggleFavorite={toggleFavorite} />} />
//               </Routes>
//             </MainContent>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;





// import React from "react";
// // import { useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage'; 
// // import Maindiv from "./Maindiv.js";

// export default function App() {
//   return (
//     <div className="App">
//     <Router>
    
//       <Sidebar />
//       <Navbar />
//       <Routes> 
//         <Route path="/browse" element={<BrowsePage />} /> 
//         <Route path="/music-player" element={<MusicPlayerPage />} />
//         {/* <Route path="/" element={<Maindiv />} /> */}
//       </Routes>
//       </Router>
//     </div>
  
//   );
// }





// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage';

// export default function App() {
//   return (
//     <div className="app-container">
//       <Router>
//         <Sidebar />
//         <div className="content-container">
//           <Navbar />
//           <Routes>
//             <Route path="/browse" element={<BrowsePage />} />
//             <Route path="/music-player" element={<MusicPlayerPage />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }





// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage';
// import SongList from './SongList';
// import SignIn from "./SignIn.js";

// export default function App() {
//   return (
//     <div className="app-container">
//       <Router>
//         <Sidebar />
//         <div className="main-content">
//           <Navbar />
//           <Routes>
//             <Route path="/browse" element={<BrowsePage />} />
//             <Route path="/music-player" element={<MusicPlayerPage />} />
//             <Route path="/album" element={<SongList />} />
//             <Route path="/signin" element={<SignIn />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }




// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage';
// import SongList from './SongList';
// import SignIn from "./SignIn.js";

// export default function App() {
//   return (
//     <div className="app-container">
//       <Router>
//         <Sidebar />
//         <div className="main-content">
//           <Navbar />
//           <Routes>
//             <Route path="/browse" element={<BrowsePage />} />
//             <Route path="/music-player" element={<MusicPlayerPage />} />
//             <Route path="/album" element={<SongList />} />
//             <Route path="/signin" element={<SignIn />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }






// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage';
// import SongList from './SongList';
// import SignIn from "./SignIn.js";
// import ListenNow from "./ListenNow";

// export default function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <div className="app-container">
//       <Router>
//         <Sidebar />
//         <div className="main-content">
//           <Navbar />
//           <Routes>
//             <Route path="/browse" element={<BrowsePage />} />
//             <Route path="/music-player" element={<MusicPlayerPage />} />
//             <Route path="/album" element={<SongList token={token} />} /> {/* Pass token as prop */}
//             <Route path="/signin" element={<SignIn onSignIn={setToken} />} /> {/* Pass setToken as prop */}
//             <Route path="/ListenNow" element={<ListenNow />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }









// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar.js";
// import Navbar from "./Navbar.js";
// import BrowsePage from "./BrowsePage.js";
// import MusicPlayerPage from './MusicPlayerPage';
// import SongList from './SongList';
// import SignIn from "./SignIn.js";
// import ListenNow from "./ListenNow";
// import AlbumGridPage from './AlbumSection.js';

// export default function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <div className="app-container">
//       <Router>
//         <Sidebar />
//         <div className="main-content">
//           <Navbar />
//           <Routes>
//             <Route path="/browse" element={<BrowsePage />} />
//             <Route path="/music-player" element={<MusicPlayerPage />} />
//             <Route path="/album" element={<SongList token={token} />} />
//             <Route path="/signin" element={<SignIn onSignIn={setToken} />} />
//             <Route path="/ListenNow" element={<ListenNow />} />
//             {/* Add a new route for AlbumFetcher with a section number */}
//             <Route path="/album/:sectionIndex" component={AlbumGridPage} />
//           </Routes>
//         </div>
//       </Router>
//     </div>
//   );
// }






import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar.js";
import Navbar from "./Navbar.js";
import BrowsePage from "./BrowsePage.js";
import MusicPlayerPage from './MusicPlayerPage';
import SongList from './SongList';
import SignIn from "./SignIn.js";
import ListenNow from "./ListenNow";
import AlbumGridPage from './RandomAlbumGrid.js';
import FavoriteSongsList from './FavoriteSongsList';
import Footer from './Footer'; 
import ComingSoon from './ComingSoon';
import ChangePassword from './ChangePassword';
import RandomAlbumGrid from './RandomAlbumGrid'; // Import the RandomAlbumGrid component

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="app-container">
      <Router>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/music-player" element={<MusicPlayerPage />} />
            <Route path="/album" element={<SongList token={token} />} />
            <Route path="/signin" element={<SignIn onSignIn={setToken} />} />
            <Route path="/ListenNow" element={<ListenNow />} />
            {/* Add a new route for "Playlist on the Pulse" */}
            <Route path="/random-albums" element={<RandomAlbumGrid />} />
            {/* Add a new route for AlbumFetcher with a section number */}
            <Route path="/favorites" element={<FavoriteSongsList />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
          <Footer /> 
        </div>
      </Router>
    </div>
  );
}
