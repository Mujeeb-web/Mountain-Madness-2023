import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Hearts from '../Hearts';
import CountdownTimer from '../CountdownTimer/CountdownTimer';

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [timer, setTimer] = React.useState(15);

  const navigate = useNavigate();

  useEffect(() => {
    if (lives.length === 0) {
      navigate('/lose');
    }
  });

  function handleTimeout() {
    setLives(lives.slice(0, -1));
    setTimer(15);
  }
  return (
    <div>
      <p>Countdown Timer</p>
      <p>Ghost</p>
      <p>Ghost speech</p>
      {lives.map(e => (
        <Hearts></Hearts>
      ))}
      <p>Rabbit</p>
      <p>Guess Box</p>
      <button onClick={() => setLives(lives.slice(0, -1))}>
        Lose a Life
      </button>
      <CountdownTimer
        handleTimeout={handleTimeout}
        timer={timer}
        setTimer={setTimer}
      ></CountdownTimer>
    </div>
  );
}

export default Game;
