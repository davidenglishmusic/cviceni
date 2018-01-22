'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Phrase = require('./Phrase');

var _Phrase2 = _interopRequireDefault(_Phrase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhraseSet = function (_React$Component) {
  _inherits(PhraseSet, _React$Component);

  function PhraseSet() {
    _classCallCheck(this, PhraseSet);

    return _possibleConstructorReturn(this, (PhraseSet.__proto__ || Object.getPrototypeOf(PhraseSet)).apply(this, arguments));
  }

  _createClass(PhraseSet, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var setExercises = this.props.exercises.map(function (exercise, index) {
        return _react2.default.createElement(_Phrase2.default, {
          key: index,
          hint: exercise.hint,
          beginning: exercise.beginning,
          answer: exercise.answer,
          end: exercise.end,
          completeSet: _this2.props.completeSet
        });
      });
      return _react2.default.createElement(
        'div',
        { className: 'phrase-set' },
        setExercises
      );
    }
  }]);

  return PhraseSet;
}(_react2.default.Component);

PhraseSet.propTypes = {
  exercises: _propTypes2.default.array.isRequired,
  completeSet: _propTypes2.default.func.isRequired
};

exports.default = PhraseSet;