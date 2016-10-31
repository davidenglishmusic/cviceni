'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PhraseSet from './components/PhraseSet';
import AnswerSet from './components/AnswerSet';
import exercises from '../../exercises.json';


ReactDOM.render(
  <div>
    <AnswerSet exercises={exercises[0].set}/>
    <PhraseSet exercises={exercises[0].set}/>
  </div>,
  document.getElementById('app')
);

// ReactDOM.render(
//   <Phrase
//   beginning={'Chod'}
//   answer={'ím'}
//   end={' do školy.'}
//   />,
//   document.getElementById('app')
// );
//
// console.log(exercises);
