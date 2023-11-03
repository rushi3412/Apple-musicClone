// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => { 
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     onSearch(query);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for albums..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//     </div>
//   );
// };

// export default SearchBar;







// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     console.log("Search query changed: ", query); 
//     setSearchQuery(query);
//   };

//   const handleSearchClick = async () => {
    
//     console.log("Fetching songs..."); 
//     const response = await fetch(`https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${searchQuery}"}`, {
//       headers: {
//         'projectId': 'YOUR_PROJECT_ID'
//       }
//     });
//     const data = await response.json();
//     console.log("Fetched data: ", data); 
    
//     if (typeof onSearch === 'function') {
//       console.log("Calling onSearch callback..."); 
//       onSearch(data);
//     } else {
//       console.log("onSearch is not a function.");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for songs..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <br />
//       <button onClick={handleSearchClick}>Search</button>
//     </div>
//   );
// };

// export default SearchBar;








// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SearchBar = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//   };

//   const handleSearchClick = async () => {
//     const response = await fetch(
//       `https://academics.newtonschool.co/api/v1/music/song?filter={"title":"${searchQuery}"}`,
//       {
//         headers: {
//           projectId: "YOUR_PROJECT_ID",
//         },
//       }
//     );
//     const data = await response.json();
//     if (typeof onSearch === "function") {
//       onSearch(data);
//     }
//   };

//   return (
//     <div className="search">
//       <svg
//         height="12"
//         width="12"
//         viewBox="0 0 16 16"
//         className="search-svg"
//         aria-hidden="true"
//       >
//         <path d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"></path>
//       </svg>
//       <input
//         type="text"
//         autoComplete="off"
//         autoFocus="off"
//         placeholder="Search"
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <button onClick={handleSearchClick}>Search</button>
//       <div className="search-results">
//         {/* Render search results here */}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
