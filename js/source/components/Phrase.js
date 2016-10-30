import React, {Component, PropTypes} from 'react';

class Phrase extends Component {
  render() {
    return (
      <div className="Phrase">
        <span className="beginning">{this.props.beginning}</span>
        <span className="answer">{this.props.answer}</span>
        <span className="end">{this.props.end}</span>
      </div>
    )
  }
}

Phrase.propTypes = {
  beginning: PropTypes.string,
  answer: PropTypes.string,
  end: PropTypes.string,
};

export default Phrase
