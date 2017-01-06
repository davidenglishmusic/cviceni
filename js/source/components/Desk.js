import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import PhraseSet from './PhraseSet';
import AnswerSet from './AnswerSet';
import exercises from '../../../exercises.json';

class Desk extends Component {
  constructor(props) {
    super(props);
    this.state = {currentExercise: 0};
  }

  render() {
    return (
      <div id='desk'>
        <AnswerSet exercises={exercises[this.state.currentExercise].set}/>
        <PhraseSet
          exercises={exercises[this.state.currentExercise].set}
          completeSet={this.completeSet.bind(this)}
        />
      </div>
    )
  }

  completeSet() {
    if (this.state.currentExercise + 1 < {exercises}.exercises.length) {
      this.setState({
        currentExercise: this.state.currentExercise + 1
      });
      $("a.answer").each(function( index ) {
        $(this).removeClass("correct").draggable("enable");
        $(this).css("left", "0px").css("top", "0px");
      });
      $(".phrase-part.phrase-answer").each(function( index ) {
        $(this).droppable("enable");
      });
    }
  }
}

export default Desk
