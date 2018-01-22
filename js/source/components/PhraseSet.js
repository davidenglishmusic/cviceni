import React from 'react';
import PropTypes from 'prop-types';
import Phrase from './Phrase';

class PhraseSet extends React.Component {
  render() {
    let setExercises = this.props.exercises.map((exercise, index) =>
      <Phrase
        key={index}
        hint={exercise.hint}
        beginning={exercise.beginning}
        answer={exercise.answer}
        end={exercise.end}
        completeSet={this.props.completeSet}
      />
    );
    return (
      <div className="phrase-set">
        {setExercises}
      </div>
    )
  }
}

PhraseSet.propTypes = {
  exercises: PropTypes.array.isRequired,
  completeSet: PropTypes.func.isRequired,
};

export default PhraseSet
