import React, { useState, useEffect } from 'react';

export default function DeveloperCredits ({ onComplete }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
      // Inicia a animação fade in
      const timer1 = setTimeout(() => {
        setVisible(true);
      }, 500);
      // Inicia a animação fade out
      const timer2 = setTimeout(() => {
        setVisible(false);
      }, 4000);
  
  
  
      // Chama onComplete após a animação terminar
      const timer3 = setTimeout(() => {
        if (onComplete) onComplete();
      }, 6000);
  
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }, [onComplete]);

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000000
  };

  const contentStyle = {
    color: 'white',
    textAlign: 'center',
    opacity: visible ? 1 : 0,
    transition: 'opacity 2s ease-in-out'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '300',
    letterSpacing: '0.1em',
    lineHeight: '1.6',
    marginBottom: '2rem'
  };

  const namesContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const nameStyle = {
    fontSize: '2rem',
    fontWeight: '600',
    letterSpacing: '0.05em'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          Desenvolvido por
        </h1>
        <div style={namesContainerStyle}>
          <p style={{...nameStyle, color: '#87CEEB'}}>
            Estevão
          </p>
          <p style={{...nameStyle, color: '#90EE90'}}>
            Romolo
          </p>
          <p style={{...nameStyle, color: '#DDA0DD'}}>
            Julia
          </p>
          <p style={{...nameStyle, color: '#FFD700'}}>
            Vinícios
          </p>
        </div>
      </div>
    </div>
  );
};