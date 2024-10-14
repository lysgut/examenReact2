import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const nameRef = useRef();
  const navigate = useNavigate();

  const startGame = () => {
    const nombreJugador = nameRef.current.value;
    if (nombreJugador) {
      navigate('/game', { state: { nombreJugador } });
    }
  };

  return (
    <div className="home">
      <h1>Bienvenidx a Adivina el Número</h1>
      <input type="text" placeholder="Introduce tu nombre" ref={nameRef} />
      <button onClick={startGame}> Iniciar Juego </button>
    </div>
  );
}

export default Home;
