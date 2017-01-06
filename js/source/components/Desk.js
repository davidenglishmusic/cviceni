import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import PhraseSet from './PhraseSet';
import AnswerSet from './AnswerSet';
import exercises from '../../../exercises.json';

class Desk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: this.shuffledExercises(),
      currentExercise: 0
    };
  }

  render() {
    return (
      <div id='desk'>
        <AnswerSet exercises={this.state.exercises[this.state.currentExercise].set}/>
        <PhraseSet
          exercises={this.state.exercises[this.state.currentExercise].set}
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
      this.resetAnswers();
    }
  }

  resetAnswers() {
    $("a.answer").each(function( index ) {
      $(this).removeClass("correct").draggable("enable");
      $(this).css("left", "0px").css("top", "0px");
    });
    $(".phrase-part.phrase-answer").each(function( index ) {
      $(this).droppable("enable");
    });
  }

  shuffledExercises() {
    let shuffledExercises = exercises;
	  for(let j, x, i = shuffledExercises.length; i; j = parseInt(Math.random() * i), x = shuffledExercises[--i], shuffledExercises[i] = shuffledExercises[j], shuffledExercises[j] = x);
	  return shuffledExercises;
  }
}

export default Desk
