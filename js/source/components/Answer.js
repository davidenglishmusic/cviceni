import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import 'jquery-ui';

class Answer extends Component {
  render() {
    return (
      <a className="answer button button-primary" ref={'selector'} data-answer={this.props.answer}>
        {this.props.answer}
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
