import React from 'react';

function HomeBanner() {
  return (
    <div style={{ position: 'relative' }}>
      <img src="./src/assets/rose-white.jpg" alt="Banner" style={{ width: '100%', height: 'auto' }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ color: '#FFF', fontSize: '2rem', fontWeight: 'bold' }}>Bienvenue sur notre site</h1>
      </div>
    </div>
  );
}

export default HomeBanner;

