import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import 'jquery-ui';
import PhraseSet from './PhraseSet';
import AnswerSet from './AnswerSet';
import exerciseCollection from '../../../exercises.json';

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
        <div id='progress' className={"button button-primary " + (this.state.complete ? 'complete' : 'incomplete')}>
          <h4>{this.currentProgress()}</h4>
        </div>
        <div id='completion-message' className='hide'>
          <h4>{exerciseCollection.completionMessage}</h4>
        </div>
        <AnswerSet exercises={this.state.exercises[this.state.currentExercise].set}/>
        <PhraseSet
          exercises={this.state.exercises[this.state.currentExercise].set}
          completeSet={this.completeSet.bind(this)}
        />
      </div>
    )
  }

  shuffledExercises() {
    let shuffledExercises = exerciseCollection.exercises;
	  for(let j, x, i = shuffledExercises.length; i; j = parseInt(Math.random() * i), x = shuffledExercises[--i], shuffledExercises[i] = shuffledExercises[j], shuffledExercises[j] = x);
	  return shuffledExercises;
  }

  completeSet() {
    if (this.state.currentExercise + 1 < this.numberOfExercises()) {
      this.resetAnswers();
      setTimeout(() => this.incrementCurrentExercise(), 500);
    }
    else if (this.state.currentExercise + 1 >= this.numberOfExercises()) {
      this.completeProgress()
    }
  }

  resetAnswers() {
    $("a.answer").each(function( index ) {
      $(this).removeClass("correct").draggable("enable");
      $(this).animate({left: "0px",top: "0px"},{duration: 500});
    });
    $(".phrase-part.phrase-answer").each(function( index ) {
      $(this).droppable("enable");
    });
  }

  incrementCurrentExercise() {
    this.setState({
      currentExercise: this.state.currentExercise + 1
    });
  }

  completeProgress() {
    $('#progress').addClass('complete')
    $('#completion-message').removeClass('hide')
  }

  numberOfExercises() {
    return exerciseCollection.exercises.length
  }

  currentProgress() {
    return (this.state.currentExercise + 1) + '/' + this.state.exercises.length
  }
}

export default Desk
