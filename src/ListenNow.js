import React from 'react';

const ListenNow = () => {
  const buttonStyle = {
    backgroundColor: 'Red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    marginTop: '40px',
  };

  const linkStyle = {
    marginTop: '20px', // Add margin-top here to the "Learn More" link
  };

  const containerStyle = {
    marginTop: '100px', // Add margin-top here
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Discover New Music Every Day</h1>
      <p style={{ textAlign: 'center' }}>
        Get playlists and albums inspired by the artists and
        <p style={{ textAlign: 'center' }}>genres you're listening to. 1 month free, then</p>
         $10.99/month.
      </p>
      <button style={buttonStyle}>Try It Free</button>
      <p style={{ ...linkStyle, textAlign: 'center' }}>
        <a href="#">Learn More</a>
      </p>
    </div>
  );
};

export default ListenNow;
