function Game() {
  const [lives, setLives] = React.useState([1, 2, 3]);
  const [stage, setStage] = React.useState(0);

  // Add a check to make sure that the stage state is within the range of the QuestionData array
  if (stage >= QuestionData.length) {
    return <div>Game over</div>;
  }

  return (
    <div>
      <img
        className='game-background'
        src={background}
        alt={'zoomed in mountain'}
      />
      <img
        className='ghost'
        src={Ghost}
        alt={'A Cute Ghost'}
      ></img>
      <img
        className='bunny'
        src={Rabbit}
        alt={'A Cute Rabbit'}
      ></img>
      <div className='question'>{QuestionData[stage].Question}</div>
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
