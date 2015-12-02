'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var title = props.link.title,
        href = props.link.href || null,
        children = props.link.children,
        link = href ? _react2.default.createElement(
        _reactRouter.Link,
        { to: href },
        title
    ) : title,
        subList = children && children.length ? _react2.default.createElement(_list2.default, { links: children, config: props.config }) : null;
    return _react2.default.createElement(
        'li',
        null,
        link,
        subList
    );
};