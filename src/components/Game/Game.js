//Import dependencies
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Import components
import Hearts from '../Hearts';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import Questions from '../Questions/Questions';
import Input from '../Input';

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [timer, setTimer] = React.useState(15);
  const [stage, setStage] = React.useState(0);

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

  function validateGuess(guess,answer) {
    // If guess === answer, Stage += 1
    // If guess !== answer, life -= 1, reset timer to 15
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateGuess(event.target[0].value)
  }
  return (
    <div>
      <p>Ghost</p>
      <Questions stage={stage}></Questions>
      {lives.map(index => (
        <Hearts key={index}></Hearts>
      ))}
      {/* Position the Rabbit in one of 5 positions, these can be a prop that is related to stage */}
      <p>Rabbit</p>
      <button onClick={() => setLives(lives.slice(0, -1))}>
        Lose a Life
      </button>
      {/* <CountdownTimer
        handleTimeout={handleTimeout}
        timer={timer}
        setTimer={setTimer}
      ></CountdownTimer> */}
      <Input
        setStage={setStage}
        handleSubmit={handleSubmit}
      ></Input>
    </div>
  );
}

export default Game;
