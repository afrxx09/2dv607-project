'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bsListItem = require('./bs-list-item');

var _bsListItem2 = _interopRequireDefault(_bsListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var listItems = props.links.map(function (link, n) {
        return _react2.default.createElement(_bsListItem2.default, { key: n, link: link, config: props.config });
    });
    return _react2.default.createElement(
        'ul',
        { className: props.rootNav ? 'nav navbar-nav' : 'dropdown-menu' },
        listItems
    );
};