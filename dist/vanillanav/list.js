'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _listItem = require('./list-item');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = _react2.default.createClass({
    displayName: 'List',
    render: function render() {
        var config = this.props.config;
        var listItems = this.props.links.map(function (link, n) {
            return _react2.default.createElement(_listItem2.default, { key: n, link: link, config: config });
        });
        return _react2.default.createElement(
            'ul',
            null,
            listItems
        );
    }
});

exports.default = List;