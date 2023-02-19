import React from 'react';
import '../../styles.css';
import { useNavigate } from 'react-router-dom';

//We need a fullscreen background, A title, An intro blurb, A play button

function LandingPage() {
  const navigate = useNavigate();
  return (
    
    <div>
<<<<<<< HEAD
      <div className='start-story'>Story line starts with fade in fade out</div>
=======
      <div className='fade-in-out'>Story line starts with fade in fade out</div>
      <div className="container"> </div>
>>>>>>> 00bf754dddefda72da949e2f8a5e457867c640b6
      {/* If storyline has finished telling, then show the instruction paragraph and button */}
      <button className='Button' onClick={() => navigate('/game')}>Start</button>
    </div>
  );
}

export default LandingPage;
