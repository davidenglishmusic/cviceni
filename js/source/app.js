'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Set from './components/Set'
import exercises from '../../exercises.json';


ReactDOM.render(
  <Set
  exercises={exercises[0].set}
  />,
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
