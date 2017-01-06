'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _PhraseSet = require('./PhraseSet');

var _PhraseSet2 = _interopRequireDefault(_PhraseSet);

var _AnswerSet = require('./AnswerSet');

var _AnswerSet2 = _interopRequireDefault(_AnswerSet);

var _exercises = require('../../../exercises.json');

var _exercises2 = _interopRequireDefault(_exercises);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Desk = function (_Component) {
  _inherits(Desk, _Component);

  function Desk(props) {
    _classCallCheck(this, Desk);

    var _this = _possibleConstructorReturn(this, (Desk.__proto__ || Object.getPrototypeOf(Desk)).call(this, props));

    _this.state = { currentExercise: 0 };
    return _this;
  }

  _createClass(Desk, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'desk' },
        _react2.default.createElement(_AnswerSet2.default, { exercises: _exercises2.default[this.state.currentExercise].set }),
        _react2.default.createElement(_PhraseSet2.default, {
          exercises: _exercises2.default[this.state.currentExercise].set,
          completeSet: this.completeSet.bind(this)
        })
      );
    }
  }, {
    key: 'completeSet',
    value: function completeSet() {
      if (this.state.currentExercise + 1 < { exercises: _exercises2.default }.exercises.length) {
        this.setState({
          currentExercise: this.state.currentExercise + 1
        });
        this.resetAnswers();
      }
    }
  }, {
    key: 'resetAnswers',
    value: function resetAnswers() {
      (0, _jquery2.default)("a.answer").each(function (index) {
        (0, _jquery2.default)(this).removeClass("correct").draggable("enable");
        (0, _jquery2.default)(this).css("left", "0px").css("top", "0px");
      });
      (0, _jquery2.default)(".phrase-part.phrase-answer").each(function (index) {
        (0, _jquery2.default)(this).droppable("enable");
      });
    }
  }]);

  return Desk;
}(_react.Component);

exports.default = Desk;