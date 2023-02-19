//Import dependencies
import React from 'react';
//Import components
import Hearts from '../Hearts';
import Input from '../Input';
//Import Data
import { QuestionData } from '../../constants';
//Import Images
import Ghost from '../../Images/ghost.png';
import Rabbit from '../../Images/rabbit.png';
import background from '../../Images/background-2.jpg';

function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [stage, setStage] = React.useState(0);

  return (
    <div>
      <img
        src={background}
        alt={'zoomed in mountain'}
      />
      <img
        src={Ghost}
        alt={'A Cute Ghost'}
        height={'75'}
        width={'75'}
      ></img>
      <img
        src={Rabbit}
        alt={'A Cute Rabbit'}
        height={'50'}
        width={'50'}
      ></img>
      <div>{QuestionData[stage].Question}</div>
      {lives.map(index => (
        <Hearts key={index}></Hearts>
      ))}
      {/* Position the Rabbit in one of 5 positions, these can be a prop that is related to stage */}
      <Input
        stage={stage}
        setStage={setStage}
        question={QuestionData[stage]}
        lives={lives}
        setLives={setLives}
      ></Input>
    </div>
  );
}

export default Game;
