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
        config = props.config;

    var aTag = !href ? title : _react2.default.createElement(
        _reactRouter.Link,
        { to: href },
        title
    );
    if (children && children.length > 0) {
        return _react2.default.createElement(
            'li',
            null,
            aTag,
            _react2.default.createElement(_list2.default, { links: children, config: config })
        );
    }
    return _react2.default.createElement(
        'li',
        null,
        aTag
    );
};