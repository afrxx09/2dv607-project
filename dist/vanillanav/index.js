'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VanillaNav = _react2.default.createClass({
    displayName: 'VanillaNav',
    render: function render() {
        return _react2.default.createElement(
            'div',
            { id: this.props.config.id },
            _react2.default.createElement(_list2.default, { config: this.props.config, links: this.props.links })
        );
    }
});

exports.default = VanillaNav;