import React from 'react';
import '../../styles.css';
import { useNavigate } from 'react-router-dom';

//We need a fullscreen background, A title, An intro blurb, A play button

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='fade-in-and-fade-out'>
        This is a modified word scrambling game.
      </div>
      <div className='fade-in'>
        Two friends, rabbit and snake, hike up a mountain. When they
        reach the top, the snake disappears. Rabbit feels scared
        without the snake. A ghost appears and shouts at rabbit. Now,
        you must translate these words to continue your journey to
        safety.
      </div>
      <div className='container'> </div>
      {/* If storyline has finished telling, then show the instruction paragraph and button */}
      <button
        className='ButtonLP'
        onClick={() => navigate('/game')}
      >
        Start
      </button>
    </div>
  );
}

export default LandingPage;
