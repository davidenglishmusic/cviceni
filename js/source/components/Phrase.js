import React from 'react';
import PropTypes from 'prop-types';

class Phrase extends React.Component {
  render() {
    return (
      <div className="phrase">
      <div className="phrase-part phrase-hint">({this.props.hint})</div>
      <div className="phrase-part phrase-beginning">{this.props.beginning}</div>
      <div className="phrase-part phrase-answer" ref={'selector'} data-answer={this.props.answer}></div>
      <div className="phrase-part phrase-end">{this.props.end}</div>
      </div>
    )
  }

  componentDidMount() {
    return $(this.refs.selector).droppable({
      drop: ( event, ui ) => {
        $( ui.draggable[0] ).position({
          my: "center",
          at: "center",
          of: event.target
        });
        if (event.target.dataset.answer === ui.draggable[0].dataset.answer){
          $(ui.draggable[0]).removeClass("incorrect");
          $(ui.draggable[0]).addClass("correct");
          $(ui.draggable[0]).draggable("disable");
          $(event.target).droppable("disable");
          if ($('a.answer.correct').length === $('.phrase').length) {
            this.props.completeSet()
          }
        }
        else {
          $(ui.draggable[0]).addClass("incorrect");
        }
      }
    });
  }
}

Phrase.propTypes = {
  hint: PropTypes.string,
  beginning: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  end: PropTypes.string,
  completeSet: PropTypes.func.isRequired,
};

export default Phrase
