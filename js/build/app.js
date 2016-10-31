'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-ui');

var _PhraseSet = require('./components/PhraseSet');

var _PhraseSet2 = _interopRequireDefault(_PhraseSet);

var _AnswerSet = require('./components/AnswerSet');

var _AnswerSet2 = _interopRequireDefault(_AnswerSet);

var _exercises = require('../../exercises.json');

var _exercises2 = _interopRequireDefault(_exercises);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_AnswerSet2.default, { exercises: _exercises2.default[0].set }),
  _react2.default.createElement(_PhraseSet2.default, { exercises: _exercises2.default[0].set })
), document.getElementById('app'));