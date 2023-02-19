import React from 'react';

function Input({ stage, setStage, question, lives, setLives }) {
  const [guess, setGuess] = React.useState('');

  function validateGuess(guess, question) {
    if (guess !== question.Answer) {
      alert('incorrect');
      setLives(lives.slice(0, -1));
      setGuess('');
    }
    if (guess === question.Answer) {
      alert('correct');
      setStage(stage + 1);
      setGuess('');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    validateGuess(event.target[0].value, question);
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor='user-input'></label>
        <input
          id='user-input'
          value={guess}
          onChange={e => setGuess(e.target.value)}
          minLength={4}
          maxLength={8}
          autoFocus={true}
        />
      </form>
    </>
  );
}

export default Input;
