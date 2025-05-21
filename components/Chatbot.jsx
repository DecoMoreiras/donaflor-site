// components/Chatbot.jsx
import React from 'react';

const Chatbot = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <p>🤖 Olá! Posso ajudar?</p>
    </div>
  );
};

export default Chatbot;
