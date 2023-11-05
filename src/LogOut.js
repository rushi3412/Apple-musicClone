import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user's session information (e.g., token) from localStorage
    localStorage.removeItem('token');

    // Redirect the user to the login or another relevant page
    navigate('/signin'); // You can change the route as needed
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.logout-container')) {
      // Click occurred outside the component, close it
      navigate('/'); // Redirect to the desired page or route
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="logout-overlay">
      <div className="logout-container">
        {/* <h1>Logout</h1> */}
        <p className='logOut' onClick={handleLogout}>Settings</p>
        <p className='logOut' onClick={handleLogout}>Logout</p>
      </div>
    </div>
  );
};

export default LogOut;
