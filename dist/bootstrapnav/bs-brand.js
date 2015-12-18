'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _bsBrandImage = require('./bs-brand-image');

var _bsBrandImage2 = _interopRequireDefault(_bsBrandImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BSBrand = _react2.default.createComponent({
    render: function render() {
        var brandOptions = this.props.opts,
            navId = this.props.config.id,
            brandHref = brandOptions.href || '',
            brandTitle = brandOptions.title || '',
            imageOpts = brandOptions.image,
            brandImage = imageOpts ? _react2.default.createElement(_bsBrandImage2.default, { opts: imageOpts, title: brandTitle }) : null;
        return _react2.default.createElement(
            'div',
            { className: 'navbar-header' },
            _react2.default.createElement(
                'button',
                { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#' + navId },
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
});

exports.default = BSBrand;