import React, {Component, PropTypes} from 'react';
import PhraseSet from './PhraseSet';
import AnswerSet from './AnswerSet';
import exercises from '../../../exercises.json';

class Desk extends Component {
  render() {
    return (
      <div id='desk'>
        <AnswerSet exercises={exercises[0].set}/>
        <PhraseSet
          exercises={exercises[0].set}
          completeSet={this.completeSet}
        />
      </div>
    )
  }

  completeSet() {
    console.log('finished');
  }
}

export default Desk
