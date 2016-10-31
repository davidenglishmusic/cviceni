'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Set = require('./components/Set');

var _Set2 = _interopRequireDefault(_Set);

var _exercises = require('../../exercises.json');

var _exercises2 = _interopRequireDefault(_exercises);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Set2.default, {
  exercises: _exercises2.default[0].set
}), document.getElementById('app'));

// ReactDOM.render(
//   <Phrase
//   beginning={'Chod'}
//   answer={'ím'}
//   end={' do školy.'}
//   />,
//   document.getElementById('app')
// );
//
// console.log(exercises);