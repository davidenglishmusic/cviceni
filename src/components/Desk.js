import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import PhraseSet from './PhraseSet';
import AnswerSet from './AnswerSet';
import 'jquery-ui-bundle';
import '../css/components/Desk.css';

class Desk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentExercise: this.props.exercises[0],
      currentExerciseNumber: 1,
      complete: false,
    };
  }

  render() {
    return(
      <div id="desk">
        <div id="progress" className={"button button-primary " + (this.state.complete ? 'complete' : 'incomplete')}>
          <h4>{this.currentProgress()}</h4>
        </div>

        <div id="completion-message" className="hide">
          <h4>{this.props.completionMessage}</h4>
        </div>

        <AnswerSet exerciseSet={this.state.currentExercise.set}/>

        <PhraseSet
          exerciseSet={this.state.currentExercise.set}
          completeSet={this.completeSet.bind(this)}
        />
      </div>
    );
  }

  currentProgress() {
    return this.state.currentExerciseNumber + "/" + this.props.exercises.length
  }

  completeSet() {
    if (this.state.currentExerciseNumber + 1 <= this.numberOfExercises()) {
      this.resetAnswers();
      setTimeout(() => this.incrementCurrentExercise(), 500);
    }
    else if (this.state.currentExerciseNumber + 1 > this.numberOfExercises()) {
      this.completeProgress()
    }
  }

  numberOfExercises() {
    return this.props.exercises.length
  }

  incrementCurrentExercise() {
    var nextExerciseNumber = this.state.currentExerciseNumber + 1
    this.setState({
      currentExerciseNumber: nextExerciseNumber,
      currentExercise: this.props.exercises[nextExerciseNumber - 1]
    });
  }

  resetAnswers() {
    $("span.answer").each(function( index ) {
      $(this).removeClass("correct").draggable("enable");
      $(this).animate({left: "0px",top: "0px"},{duration: 500});
    });
    $(".phrase-part.phrase-answer").each(function( index ) {
      $(this).droppable("enable");
    });
  }

  completeProgress() {
    $('#progress').addClass('complete')
    $('#completion-message').removeClass('hide')
  }
}

Desk.propTypes = {
  exercises: PropTypes.array,
  completionMessage: PropTypes.string
}

export default Desk
