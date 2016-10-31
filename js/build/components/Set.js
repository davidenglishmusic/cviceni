'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Phrase = require('./Phrase');

var _Phrase2 = _interopRequireDefault(_Phrase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Set = function (_Component) {
  _inherits(Set, _Component);

  function Set() {
    _classCallCheck(this, Set);

    return _possibleConstructorReturn(this, (Set.__proto__ || Object.getPrototypeOf(Set)).apply(this, arguments));
  }

  _createClass(Set, [{
    key: 'render',
    value: function render() {
      var setExercises = this.props.exercises.map(function (exercise) {
        return _react2.default.createElement(_Phrase2.default, { beginning: exercise.beginning, answer: exercise.answer, end: exercise.end });
      });
      return _react2.default.createElement(
        'div',
        { className: 'Set' },
        setExercises
      );
    }
  }]);

  return Set;
}(_react.Component);

Set.propTypes = {
  exercises: _react.PropTypes.array.isRequired
};

exports.default = Set;