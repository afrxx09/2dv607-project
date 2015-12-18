'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _bsList = require('./bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BSListItem = _react2.default.createComponent({
    render: function render() {
        var props = this.props,
            title = props.link.title,
            href = props.link.href || '',
            children = props.link.children;

        if (children && children.length) {
            return _react2.default.createElement(
                'li',
                { className: 'dropdown' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: href, className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                    title,
                    ' ',
                    _react2.default.createElement('span', { className: 'caret' })
                ),
                _react2.default.createElement(_bsList2.default, { links: children, config: props.config })
            );
        }
        return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
                _reactRouter.Link,
                { to: href },
                title
            )
        );
    }
});

exports.default = BSListItem;