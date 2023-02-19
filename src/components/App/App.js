import React from 'react';

import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <p className='title'>Ghost Babble: The Mountain Escape</p>
      <section className='blurb'>
        lorem ipsum sdflkj sflksdjf sdfsdf ljkl sdfdsf lkjkljs fsfd
        lkjlkj
      </section>
      <button onClick={() => navigate('/landing')}>Play!</button>
    </div>
  );
}

export default App;
