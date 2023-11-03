import React from 'react';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#1d1c1c', textAlign: 'center', padding: '10px', position: 'fixed', right: '0', bottom: '0', width: '81%'}}>
      <p>United States | Español | Some other language</p>
      <p>© 2023 Apple Inc. All rights reserved</p>
      <p>
        <a >Internet Service Terms</a> | 
        <a >Apple Music & Privacy</a> | 
        <a >Cookie Warning</a> | 
        <a >Support</a> | 
        <a >Feedback</a>
      </p>
    </footer>
  );
}

export default Footer;
