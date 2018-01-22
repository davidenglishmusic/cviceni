import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';

class AnswerSet extends React.Component {
  render() {
    return (
      <div className="answer-set">
        {this.shuffledAnswers()}
      </div>
    )
  }

  shuffledAnswers() {
    let answers = this.props.exercises.map((exercise, index) => <Answer key={index} answer={exercise.answer}/>);
	  for(let j, x, i = answers.length; i; j = parseInt(Math.random() * i), x = answers[--i], answers[i] = answers[j], answers[j] = x);
	  return answers;
  }
}

AnswerSet.propTypes = {
  exercises: PropTypes.array.isRequired,
};

export default AnswerSet
