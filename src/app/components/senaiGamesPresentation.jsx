import React, { useState, useEffect } from 'react';

export default function SenaiGamesPresentation({ onComplete, startVideo }) {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(true);

  useEffect(() => {
    // Inicia a animação fade in
    const timer1 = setTimeout(() => {
      setVisible(true);
    }, 500);
    // Inicia a animação fade out
    const timer2 = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
          setOpacity(false);
          startVideo()
      },2000)
    }, 4000);



    // Chama onComplete após a animação terminar
    const timer3 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 9500);

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
    opacity: opacity ? 1 : 0,
    transition: 'opacity 3.5s ease-in-out',
    zIndex: 9
  };

  const contentStyle = {
    color: 'white',
    textAlign: 'center',
    opacity: visible ? 1 : 0,
    transition: 'opacity 2s ease-in-out',
    position: 'relative'
  };

  const titleStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    letterSpacing: '0.1em',
    color: 'rgb(20, 100, 220)',
    marginBottom: '1rem',
    textShadow: '0 0 20px rgba(20, 100, 220, 0.5)'
  };

  const subtitleStyle = {
    fontSize: '1.8rem',
    fontWeight: '300',
    letterSpacing: '0.3em',
    color: '#C0C0C0'
  };

  const glowStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(20, 83, 220, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite',
    pointerEvents: 'none'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={glowStyle}></div>
        <h1 style={titleStyle}>
          SENAI GAMES
        </h1>
        <p style={subtitleStyle}>
          APRESENTA
        </p>
      </div>
      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.3); }
          100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
};