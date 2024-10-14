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
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    setAttempts(attempts + 1);
    if (numGuess < randomNumber) {
      setFeedback('Too low!');
    } else if (numGuess > randomNumber) {
      setFeedback('Too high!');
    } else {
      setFeedback('Correct!');
      setHasWon(true);
    }
  };

  return (
    <div className="game">
      <h2>Hello, {playerName}! Guess the number!</h2>
      <div className="number-box">
        {hasWon ? randomNumber : '?'}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={hasWon}
      />
      <button onClick={handleGuess} disabled={hasWon}>Guess</button>
      <Feedback message={feedback} />
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default Game;
