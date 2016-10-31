import React, {Component, PropTypes} from 'react';
import Answer from './Answer';

class AnswerSet extends Component {
  render() {
    let answers = this.props.exercises.map(function(exercise, index){
      return <Answer key={index} answer={exercise.answer}/>
    });
    return (
      <div className="answer-set">
        {answers}
      </div>
    )
  }
}

AnswerSet.propTypes = {
  exercises: PropTypes.array.isRequired,
};

export default AnswerSet
