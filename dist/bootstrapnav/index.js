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

exports.default = function (props) {
    var config = props.config,
        links = props.links,
        type = config.bootstrap.type || '',
        BSClassNames = 'navbar navbar-default ' + type,
        brand = '';
    if (config.bootstrap.brand) {
        var brandHref = config.bootstrap.brand.href || '',
            brandTitle = config.bootstrap.brand.title || '',
            brandImage = '';
        if (config.bootstrap.brand.image) {
            var src = config.bootstrap.brand.image.src;
            brandImage = _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('img', { src: src, alt: brandTitle })
            );
        }
        brand = _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
                'button',
                { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#' + config.id },
                _react2.default.createElement(
                    'span',
                    { className: 'sr-only' },
                    'Toggle navigation'
                ),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' }),
                _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(
                _reactRouter.Link,
                { to: brandHref, className: 'navbar-brand' },
                brandImage,
                brandTitle
            )
        );
    }
    return _react2.default.createElement(
        'nav',
        { className: BSClassNames, id: config.id },
        _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            brand,
            _react2.default.createElement(
                'div',
                { id: config.id, className: 'collapse navbar-collapse' },
                _react2.default.createElement(_bsList2.default, { config: config, links: links, rootNav: true })
            )
        )
    );
};