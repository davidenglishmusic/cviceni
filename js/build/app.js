'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Phrase = require('./components/Phrase');

var _Phrase2 = _interopRequireDefault(_Phrase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Phrase2.default, {
  beginning: 'Chod',
  answer: 'ím',
  end: ' do školy.'
}), document.getElementById('app'));