'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-ui');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phrase = function (_Component) {
  _inherits(Phrase, _Component);

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
      return (0, _jquery2.default)(this.refs.selector).droppable({
        drop: function drop(event, ui) {
          (0, _jquery2.default)(ui.draggable[0]).position({
            my: "center",
            at: "center",
            of: event.target
          });
          if (event.target.dataset.answer === ui.draggable[0].dataset.answer) {
            (0, _jquery2.default)(ui.draggable[0]).removeClass("incorrect");
            (0, _jquery2.default)(ui.draggable[0]).addClass("correct");
            (0, _jquery2.default)(ui.draggable[0]).draggable("disable");
            (0, _jquery2.default)(event.target).droppable("disable");
          } else {
            (0, _jquery2.default)(ui.draggable[0]).addClass("incorrect");
          }
        }
      });
    }
  }]);

  return Phrase;
}(_react.Component);

Phrase.propTypes = {
  beginning: _react.PropTypes.string.isRequired,
  answer: _react.PropTypes.string.isRequired,
  end: _react.PropTypes.string
};

exports.default = Phrase;