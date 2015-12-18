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

var ListItem = _react2.default.createClass({
    displayName: 'ListItem',
    getLink: function getLink(href, title) {
        if (href) {
            return _react2.default.createElement(
                _reactRouter.Link,
                { to: href },
                title
            );
        }
        return title;
    },
    getSubList: function getSubList(children) {
        if (children && children.length) {
            return _react2.default.createElement(_list2.default, { config: this.props.config, links: children });
        }
        return null;
    },
    render: function render() {
        var link = this.getLink(this.props.link.href, this.props.link.title),
            subList = this.getSubList(this.props.link.children);
        return _react2.default.createElement(
            'li',
            null,
            link,
            subList
        );
    }
});

exports.default = ListItem;