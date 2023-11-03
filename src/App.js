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
