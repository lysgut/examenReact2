import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nameRef = useRef();
  const navigate = useNavigate();

  const startGame = () => {
    const playerName = nameRef.current.value;
    if (playerName) {
      navigate('/game', { state: { playerName } });
    }
  };

  return (
    <div className="home">
      <h1>Adivina el número!!</h1>
      <input type="text" placeholder="Enter your name" ref={nameRef} />
      <button onClick={startGame}>Empezar Juego</button>
    </div>
  );
}

export default Home;
