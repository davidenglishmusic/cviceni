import React, {Component, PropTypes} from 'react';
import Phrase from './Phrase';

class Set extends Component {
  render() {
    let setExercises = this.props.exercises.map(function(exercise){
      return <Phrase beginning={exercise.beginning} answer={exercise.answer} end={exercise.end}/>
    });
    return (
      <div className="Set">
        {setExercises}
      </div>
    )
  }
}

Set.propTypes = {
  exercises: PropTypes.array.isRequired,
};

export default Set
