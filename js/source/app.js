'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Phrase from './components/Phrase'

ReactDOM.render(
  <Phrase
  beginning={'Chod'}
  answer={'ím'}
  end={' do školy.'}
  />,
  document.getElementById('app')
);
