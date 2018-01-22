import React from 'react';
import PropTypes from 'prop-types';

class Answer extends React.Component {
  render() {
    return (
      <a className="answer button button-primary" ref={'selector'} data-answer={this.props.answer}>
        <span>{this.props.answer}</span>
      </a>
    )
  }
  componentDidMount() {
    return $(this.refs.selector).draggable();
  }
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
};

export default Answer
