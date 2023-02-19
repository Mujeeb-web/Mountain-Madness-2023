import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Hearts from '../Hearts'

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const navigate = useNavigate();

  useEffect(() => {
    if (lives.length === 0) {
      navigate('/lose');
    }
  });
  return (
    <div>
      <p>Countdown Timer</p>
      <p>Ghost</p>
      <p>Ghost speech</p>
      {lives.map(e => <Hearts></Hearts>)}
      <p>Rabbit</p>
      <p>Guess Box</p>
      <button onClick={() => setLives(lives.slice(0,-1))}>Lose a Life</button>
    </div>
  );
}

export default Game;
