import React, {Component, PropTypes} from 'react';
import Phrase from './Phrase';

class PhraseSet extends Component {
  render() {
    let setExercises = this.props.exercises.map(function(exercise, index){
      return <Phrase
        key={index}
        hint={exercise.hint}
        beginning={exercise.beginning}
        answer={exercise.answer}
        end={exercise.end}
      />
    });
    return (
      <div className="phrase-set">
        {setExercises}
      </div>
    )
  }
}

PhraseSet.propTypes = {
  exercises: PropTypes.array.isRequired,
};

export default PhraseSet
