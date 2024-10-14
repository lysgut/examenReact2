import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Feedback from './Feedback';

function Game() {
  const { state } = useLocation();
  const nombreJugador = state.nombreJugador;
  const navigate = useNavigate();

  const [numeroRandom, setnumeroRandom] = useState(null);
  const [adivinando, setAdivinando] = useState('');
  const [feedback, setFeedback] = useState('');
  const [intentos, setAttempts] = useState(0);
  const [ganado, setGanado] = useState(false);

  useEffect(() => {
    setnumeroRandom(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleAdivinanza = () => {
    const numAdivinar = parseInt(adivinando);
    console.log(numeroRandom)
    setAttempts(intentos + 1);
    if (numAdivinar < numeroRandom) {
      setFeedback('⬆️');
    } else if (numAdivinar > numeroRandom) {
      setFeedback('⬇️');
    } else {
      setFeedback('⭐');
      setGanado(true);
    }
  };

  const again = () => {
    navigate("/")
  }
  return (
    <div className="game">
      <h2>Hola {nombreJugador}! Adivina el número!</h2>
      <p>del 1 al 100</p>
      <div className="number-box">
        <h1>
        {ganado ? numeroRandom : '?'}
      </h1>
      </div>
      <Feedback message={feedback} />
      <input
        type="number"
        value={adivinando}
        onChange={(e) => setAdivinando(e.target.value)}
        disabled={ganado}
      />
      <button onClick={handleAdivinanza} disabled={ganado}>Adivinar</button>
      <h1>Intentos: {intentos}</h1>
      <button onClick={again}>De nuevo</button>
    </div>
  );
}

export default Game;
