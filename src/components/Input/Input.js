import React from 'react';

function Input({handleSubmit}) {
  const [guess, setGuess] = React.useState('');

 
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
        />
      </form>
    </>
  );
}

export default Input;
