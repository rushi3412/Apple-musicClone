import React, { useState } from 'react';

const ChangePassword = () => {
  const [passwordCurrent, setPasswordCurrent] = useState('');
  const [password, setPassword] = useState('');

  const handleChangePassword = async () => {
    const response = await fetch('https://academics.newtonschool.co/api/v1/user/updateMyPassword', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'projectID': 'f104bi07c490'
      },
      body: JSON.stringify({
        name: 'user_name',
        email: 'user_email',
        passwordCurrent,
        password,
        appType: 'music'
      })
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div style={{ marginTop: '53px',
    display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: "700px",
      height: "500px",
      margin: "0 auto",
      fontFamily: "Arial",
      marginTop: '53px',
      position: 'fixed',
      zIndex: 1000,
      background: '#1d1c1c',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Change Password</h1>
      <h2 style={{ marginBottom: '20px' }}>Enter your current and new passwords.</h2>
      <label style={{ marginBottom: '20px' }}>
        <input type="password" value={passwordCurrent} onChange={(e) => setPasswordCurrent(e.target.value)} placeholder="Current Password"
          style={{ width: '500px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '9px' }} />
      </label>
      <label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password"
          style={{ width: '500px', marginBottom: '10px', height: "55px", padding: '10px', fontSize: '16px', borderRadius: '5px' }} />
      </label>
      <button onClick={handleChangePassword} style={{ backgroundColor: 'pink', width: '300px', height: "45px", borderRadius: '9px', fontSize: '18px' }}>Change Password</button>
    </div>
  );
};

export default ChangePassword;
