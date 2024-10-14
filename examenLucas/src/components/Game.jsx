import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Feedback from './Feedback';

function Game() {
  const { state } = useLocation();
  const playerName = state.playerName;

  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [ganado, setGanado] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);
    if (numGuess < randomNumber) {
      setFeedback('Muy bajo!!');
    } else if (numGuess > randomNumber) {
      setFeedback('Muy alto!!');
    } else {
      setFeedback('Correcto!');
      setGanado(true);
    }
  };

  return (
    <div className="game">
      <h2>Hola, {playerName}! Adivina el juego!</h2>
      <div className="number-box">
        {ganado ? randomNumber : '?'}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={ganado}
      />
      <button onClick={handleGuess} disabled={ganado}>Guess</button>
      <Feedback message={feedback} />
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default Game;
