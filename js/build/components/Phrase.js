'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phrase = function (_React$Component) {
  _inherits(Phrase, _React$Component);

  function Phrase() {
    _classCallCheck(this, Phrase);

    return _possibleConstructorReturn(this, (Phrase.__proto__ || Object.getPrototypeOf(Phrase)).apply(this, arguments));
  }

  _createClass(Phrase, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'phrase' },
        _react2.default.createElement(
          'div',
          { className: 'phrase-part phrase-hint' },
          '(',
          this.props.hint,
          ')'
        ),
        _react2.default.createElement(
          'div',
          { className: 'phrase-part phrase-beginning' },
          this.props.beginning
        ),
        _react2.default.createElement('div', { className: 'phrase-part phrase-answer', ref: 'selector', 'data-answer': this.props.answer }),
        _react2.default.createElement(
          'div',
          { className: 'phrase-part phrase-end' },
          this.props.end
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      return $(this.refs.selector).droppable({
        drop: function drop(event, ui) {
          $(ui.draggable[0]).position({
            my: "center",
            at: "center",
            of: event.target
          });
          if (event.target.dataset.answer === ui.draggable[0].dataset.answer) {
            $(ui.draggable[0]).removeClass("incorrect");
            $(ui.draggable[0]).addClass("correct");
            $(ui.draggable[0]).draggable("disable");
            $(event.target).droppable("disable");
            if ($('a.answer.correct').length === $('.phrase').length) {
              _this2.props.completeSet();
            }
          } else {
            $(ui.draggable[0]).addClass("incorrect");
          }
        }
      });
    }
  }]);

  return Phrase;
}(_react2.default.Component);

Phrase.propTypes = {
  hint: _propTypes2.default.string,
  beginning: _propTypes2.default.string.isRequired,
  answer: _propTypes2.default.string.isRequired,
  end: _propTypes2.default.string,
  completeSet: _propTypes2.default.func.isRequired
};

exports.default = Phrase;