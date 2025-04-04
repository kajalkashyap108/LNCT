import React from 'react';

export default function Footer() {
  return (
    <div style={{
      backgroundColor: 'rgba(27, 184, 246, 0.78)',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
      boxShadow: '0 -4px 8px rgba(65, 217, 228, 0.85)',
      position:'fixed',
      bottom:0,
      width:'100%',
      zIndex:1000,
    }}>
      <div>
        <p>&copy; 2024 Online Assessment Portal. All rights reserved.</p>
      </div>
    </div>
  );
}