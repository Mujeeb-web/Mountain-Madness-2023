import React from 'react';
import { useNavigate } from 'react-router-dom';

//We need a fullscreen background, A title, An intro blurb, A play button

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Story line starts with fade in fade out</div>
      {/* If storyline has finished telling, then show the instruction paragraph and button */}
      <button onClick={() => navigate('/game')}>Start</button>
    </div>
  );
}

export default LandingPage;
