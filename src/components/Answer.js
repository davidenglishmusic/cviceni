import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import 'jquery-ui-bundle';
import '../css/components/Answer.css';

class Answer extends React.Component {
  render() {
    return (
      <span className="answer button button-primary" ref={'selector'} data-answer={this.props.answer}>
        <span>{this.props.answer}</span>
      </span>
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
