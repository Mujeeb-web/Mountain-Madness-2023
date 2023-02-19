import React from 'react';

import '../../styles.css';

import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <p className='button start-game'>Ghost Babble: The Mountain Escape</p>
      <section className='blurb'>
        lorem ipsum sdflkj sflksdjf sdfsdf ljkl sdfdsf lkjkljs fsfd
        lkjlkj
      </section>
      <button onClick={() => navigate('/landing')}>Play!</button>
    </div>
  );
}

export default App;
