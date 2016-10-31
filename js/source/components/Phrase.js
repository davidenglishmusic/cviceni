import React, {Component, PropTypes} from 'react';

class Phrase extends Component {
  render() {
    return (
      <div className="phrase">
        <div className="phrase-part phrase-beginning">{this.props.beginning}</div>
        <div className="phrase-part phrase-answer" data-answer={this.props.answer}></div>
        <div className="phrase-part phrase-end">{this.props.end}</div>
      </div>
    )
  }
}

Phrase.propTypes = {
  beginning: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  end: PropTypes.string,
};

export default Phrase
