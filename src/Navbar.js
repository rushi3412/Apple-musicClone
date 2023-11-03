import React, { useState }  from "react";
import { Link, useNavigate, } from 'react-router-dom';
import { IconButton, Typography, Card, CardContent, CardMedia } from '@mui/material';
import { useMusicPlayer } from './MusicPlayerContext';
import './Navbar.css'
import { PlayArrow, Pause, SkipPrevious, SkipNext, Repeat, Shuffle } from '@mui/icons-material';

function Navbar() {
  const { currentSong, setCurrentSong } = useMusicPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(false); // Define isLooping state
  const [isShuffling, setIsShuffling] = useState(false);
  // const navigate = useNavigate();

  // This function handles clicking on the song icon.
  const handleSongIconClick = (album, songIndex) => {
    setCurrentSongIndex(songIndex);
    setIsPlaying(true);
  };
  

const songs = [
  "Song 1",
  "Song 2",
  "Song 3",
  
];

function handlePlayPause() {
  setIsPlaying(!isPlaying); // Toggle play/pause state
}

const handleLoop = () => {
  setIsLooping(!isLooping);
};

const handleShuffle = () => {
  setIsShuffling(!isShuffling);
};

const handlePrev = () => {
  if (currentSongIndex > 0) {
    setCurrentSongIndex(currentSongIndex - 1);
    setCurrentSong(songs[currentSongIndex - 1]);
  } else {
    setCurrentSongIndex(songs.length - 1);
    setCurrentSong(songs[songs.length - 1]);
  }
  setIsPlaying(true); // Start playing the new song
};

const handleForward = () => {
  let nextSongIndex;
  if (currentSongIndex < songs.length - 1) {
    nextSongIndex = currentSongIndex + 1;
  } else {
    nextSongIndex = 0;
  }
  setCurrentSongIndex(nextSongIndex);
  setCurrentSong(songs[nextSongIndex]);
};
  return (
    <>
      <div className="navbarcontainer">
        <div className="navbarthreedivs">
          <div className="playstopicons">
          </div>
          
          <div className="songnamediv">
            
          
          {currentSong ? (
              <>
                <div 
                className="songicon"
                 onClick={() => 
                 handleSongIconClick("Album Name", currentSongIndex)}>
                  <Link to="/music-player">
                    <button className="song-icon-button">
                      <img src={currentSong.thumbnail} 
                      alt={currentSong.title} 
                      width="32" 
                      height="32" />
                    </button>
                  </Link>
                </div>
                <div className="song-title-name">
                <div className="song-title" style={{ fontSize: '13px', fontFamily: 'Arial, sans-serif', color: 'white' }}>
                <span>{currentSong && currentSong.title}</span>
                </div>
                <div className="artist-name">
                <span>{currentSong && currentSong.artist && currentSong.artist.name}</span>
                </div>
                </div>
                <div class="lcd__badge-platter">PREVIEW</div>
              </>
            ) : (
              <div>No song selected</div>
            )}
          {/* </div>          */}
            <div className="appleicon">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    version="1.1"
                    viewBox="0 0 20 24"
                  >
                    <path
                    fill="black"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"
                    ></path>
                  </svg>
            </div>
          </div>
          
          <div className="volumesigndiv">
            <div className="volumediv">
            </div>
            <div className="signdiv">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
              
                viewBox="0 0 18 18">
                <path d="M2.634 5.537a.906.906 0 1 0 0-1.813.906.906 0 1 0 0 1.813zm3.192-.325h9.865a.576.576 0 0 0 .585-.578.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .325.253.578.585.578zM2.634 9.906c.506 0 .91-.404.91-.91a.906.906 0 0 0-.91-.91.906.906 0 0 0-.91.91c0 .506.405.91.91.91zm3.192-.325h9.865a.582.582 0 1 0 0-1.162H5.826a.572.572 0 0 0-.585.577c0 .325.253.585.585.585zm-3.192 4.694a.91.91 0 1 0-.001-1.82.91.91 0 0 0 0 1.82zm3.192-.332h9.865a.576.576 0 0 0 .585-.577.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .324.253.577.585.577z"></path>
              </svg>
              <Link to="/signin">
              <button>
                <svg
                  height="11"
                  viewBox="0 0 10 11"
                  width="10"
                  className="auth-icon">
                  <path d="M5 5.295c-1.296 0-2.385-1.176-2.385-2.678C2.61 1.152 3.716 0 5 0c1.29 0 2.39 1.128 2.39 2.611C7.39 4.12 6.297 5.295 5 5.295zM1.314 11C.337 11 0 10.698 0 10.144c0-1.55 1.929-3.685 5-3.685 3.065 0 5 2.135 5 3.685 0 .554-.337.856-1.314.856z"></path>
                </svg>
                Sign in
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useMusicPlayer } from "./MusicPlayerContext";
// import './Navbar.css'

// function Navbar() {
//   const { currentSong } = useMusicPlayer();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   // const navigate = useNavigate();

//   // This function handles clicking on the song icon.
//   const handleSongIconClick = (album, songIndex) => {
//     setCurrentSongIndex(songIndex);
//     setIsPlaying(true);
//   };

//   const songs = ["Song 1", "Song 2", "Song 3"];

//   function handlePlayPause() {
//     setIsPlaying(!isPlaying); // Toggle play/pause state
//   }

//   function handlePrev() {
//     if (currentSongIndex > 0) {
//       setCurrentSongIndex(currentSongIndex - 1);
//       setIsPlaying(true); // Start playing the previous song
//     }
//   }

//   function handleForward() {
//     //adjust this logic accordingly
//     if (currentSongIndex < songs.length - 1) {
//       setCurrentSongIndex(currentSongIndex + 1);
//       setIsPlaying(true); 
//   }
// }
//   return (
//     <>
//       <div className="navbarcontainer">
//         <div className="navbarthreedivs">
//           <div className="playstopicons">
//             <button className="prevbtn" onClick={handlePrev}>
//               <svg
//                 width="32"
//                 height="31"
//                 viewBox="0 0 32 28"
//                 rotate={180}
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M18.14 20.68c.365 0 .672-.107 1.038-.323l8.508-4.997c.623-.365.938-.814.938-1.37 0-.564-.307-.988-.938-1.361l-8.508-4.997c-.366-.216-.68-.324-1.046-.324-.73 0-1.337.556-1.337 1.569v4.773c-.108-.399-.406-.73-.904-1.021L7.382 7.632c-.357-.216-.672-.324-1.037-.324-.73 0-1.345.556-1.345 1.569v10.235c0 1.013.614 1.569 1.345 1.569.365 0 .68-.108 1.037-.324l8.509-4.997c.49-.29.796-.631.904-1.038v4.79c0 1.013.615 1.569 1.345 1.569z"
//                   fill="#000"
//                   fillRule="nonzero"
//                 ></path>
//               </svg>
//             </button>
//             <button
//               className={isPlaying ? "pausebtn" : "playbtn"}
//               onClick={handlePlayPause}
//             >
//               <svg
//                 width="32"
//                 height="28"
//                 viewBox="0 0 32 28"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M10.345 23.287c.415 0 .763-.15 1.22-.407l12.742-7.404c.838-.481 1.178-.855 1.178-1.46 0-.599-.34-.972-1.178-1.462L11.565 5.158c-.457-.265-.805-.407-1.22-.407-.789 0-1.345.606-1.345 1.57V21.71c0 .971.556 1.577 1.345 1.577z"
//                   fillRule="nonzero"
//                 ></path>
//               </svg>
//             </button>
//             <button className="forwardbtn" onClick={handleForward}>
//               <svg
//                 width="32"
//                 height="28"
//                 viewBox="0 0 32 28"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M18.14 20.68c.365 0 .672-.107 1.038-.323l8.508-4.997c.623-.365.938-.814.938-1.37 0-.564-.307-.988-.938-1.361l-8.508-4.997c-.366-.216-.68-.324-1.046-.324-.73 0-1.337.556-1.337 1.569v4.773c-.108-.399-.406-.73-.904-1.021L7.382 7.632c-.357-.216-.672-.324-1.037-.324-.73 0-1.345.556-1.345 1.569v10.235c0 1.013.614 1.569 1.345 1.569.365 0 .68-.108 1.037-.324l8.509-4.997c.49-.29.796-.631.904-1.038v4.79c0 1.013.615 1.569 1.345 1.569z"
//                   fill="#000"
//                   fillRule="nonzero"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <div className="songnamediv">
//             {currentSong ? (
//               <>
//                 <div
//                   className="songicon"
//                   onClick={() =>
//                     handleSongIconClick("Album Name", currentSongIndex)
//                   }
//                 >
//                   <Link to="/music-player">
//                     <button className="song-icon-button">
//                       <img
//                         src={currentSong.thumbnail}
//                         alt={currentSong.title}
//                         width="32"
//                         height="32"
//                       />
//                     </button>
//                   </Link>
//                 </div>
//                 <div className="song-title-name">
//                 <div className="song-title">
//                   <span>{currentSong.title}</span>
//                 </div>
//                 <div className="artist-name">
//                   <span>{currentSong.artist.name}</span>
//                 </div>
//                 </div>
//                 <div class="lcd__badge-platter">PREVIEW</div>
//               </>
//             ) : (
//               <div className="appleicon"> 
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="24"
//                     version="1.1"
//                     viewBox="0 0 20 24"
//                   >
//                     <path
//                     fill="black"
//                       fill-rule="nonzero"
//                       stroke="none"
//                       stroke-width="1"
//                       d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"
//                     ></path>
//                   </svg>
//               </div>
//             )}
//           </div>

//           <div className="volumesigndiv">
//             <div className="volumediv">
//               <svg
//                 height="15"
//                 width="15"
//                 className="chrome-volume__icon"
//                 version="1.1"
//                 viewBox="0 0 64 64"
//               >
//                 <path
//                   transform="translate(2,11.149)"
//                   d="m23.477 39.911c1.4129 0 2.431-1.0389 2.431-2.431v-33.141c0-1.3921-1.0181-2.5349-2.4726-2.5349-1.0181 0-1.7038 0.43634-2.805 1.4752l-9.2046 8.6644c-0.14545 0.12464-0.31166 0.18698-0.51945 0.18698h-6.2126c-2.9297 0-4.5088 1.5999-4.5088 4.7374v8.0411c0 3.1167 1.5791 4.7166 4.5088 4.7166h6.2126c0.20779 0 0.374 0.06234 0.51945 0.18698l9.2046 8.7475c0.99732 0.93501 1.8285 1.3506 2.8466 1.3506z"
//                 ></path>
//                 <path
//                   className="chrome-volume__wave chrome-volume__wave-1"
//                   transform="translate(2,11.149)"
//                   d="m34.864 29.959c0.70647 0.49868 1.7246 0.35323 2.3271-0.47787 1.6205-2.1817 2.5971-5.3815 2.5971-8.6436 0-3.2621-0.9766-6.4411-2.5971-8.6436-0.60255-0.83111-1.5999-0.97655-2.3271-0.49868-0.89345 0.62336-1.0181 1.683-0.35319 2.5765 1.2051 1.6207 1.9323 4.0932 1.9323 6.5658 0 2.4726-0.76881 4.9451-1.9531 6.5866-0.62332 0.89345-0.51945 1.9116 0.374 2.5349z"
//                 ></path>
//                 <path
//                   className="chrome-volume__wave chrome-volume__wave-2 chrome-volume__wave-hidden"
//                   transform="translate(2,11.149)"
//                   d="m43.154 35.569c0.81021 0.54023 1.8077 0.33245 2.3894-0.49867 2.7426-3.8231 4.3426-8.9137 4.3426-14.233 0-5.3399-1.5583-10.451-4.3426-14.254-0.60255-0.81034-1.5791-1.0181-2.3894-0.47787-0.78979 0.54021-0.91447 1.5583-0.29106 2.4518 2.2647 3.3245 3.6779 7.6878 3.6779 12.28s-1.3923 8.9969-3.6779 12.28c-0.60255 0.89345-0.49872 1.9116 0.29106 2.4518z"
//                 ></path>
//                 <path
//                   className="chrome-volume__wave chrome-volume__wave-3 chrome-volume__wave-hidden"
//                   transform="translate(2,11.149)"
//                   d="m51.527 41.241c0.76894 0.51945 1.7872 0.31166 2.3898-0.54021 3.8438-5.423 6.0255-12.446 6.0255-19.864s-2.2443-14.42-6.0255-19.864c-0.60255-0.87268-1.6209-1.0805-2.3898-0.54021-0.78936 0.56098-0.91404 1.5791-0.31149 2.4518 3.3451 4.9244 5.423 11.241 5.423 17.952 0 6.7113-1.9945 13.132-5.423 17.952-0.60255 0.87268-0.47787 1.8908 0.31149 2.4518z"
//                 ></path>
//               </svg>
//               <input type="range" />
//             </div>
//             <div className="signdiv">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 18 18"
//               >
//                 <path d="M2.634 5.537a.906.906 0 1 0 0-1.813.906.906 0 1 0 0 1.813zm3.192-.325h9.865a.576.576 0 0 0 .585-.578.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .325.253.578.585.578zM2.634 9.906c.506 0 .91-.404.91-.91a.906.906 0 0 0-.91-.91.906.906 0 0 0-.91.91c0 .506.405.91.91.91zm3.192-.325h9.865a.582.582 0 1 0 0-1.162H5.826a.572.572 0 0 0-.585.577c0 .325.253.585.585.585zm-3.192 4.694a.91.91 0 1 0-.001-1.82.91.91 0 0 0 0 1.82zm3.192-.332h9.865a.576.576 0 0 0 .585-.577.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .324.253.577.585.577z"></path>
//               </svg>
//               <Link to="/signin">
//                 <button>
//                   <svg
//                     height="11"
//                     viewBox="0 0 10 11"
//                     width="10"
//                     className="auth-icon"
//                   >
//                     <path d="M5 5.295c-1.296 0-2.385-1.176-2.385-2.678C2.61 1.152 3.716 0 5 0c1.29 0 2.39 1.128 2.39 2.611C7.39 4.12 6.297 5.295 5 5.295zM1.314 11C.337 11 0 10.698 0 10.144c0-1.55 1.929-3.685 5-3.685 3.065 0 5 2.135 5 3.685 0 .554-.337.856-1.314.856z"></path>
//                   </svg>
//                   Sign in
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Navbar;
