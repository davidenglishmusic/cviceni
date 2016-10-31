import React, {Component, PropTypes} from 'react';

class Answer extends Component {
  render() {
    return (
      <button className="answer button-primary">
        {this.props.answer}
      </button>
    )
  }
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default Answer
