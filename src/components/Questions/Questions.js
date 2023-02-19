import React from 'react';

//Import Data
import { QuestionData } from '../../constants';

function Questions({stage}) {
  return <div>{QuestionData[stage].question}</div>;
}

export default Questions;
