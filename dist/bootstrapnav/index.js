'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _bsList = require('./bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

var _bsBrand = require('./bs-brand');

var _bsBrand2 = _interopRequireDefault(_bsBrand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BSNav = _react2.default.createClass({
    displayName: 'BSNav',
    getBrandImage: function getBrandImage(ImageOptions, brandTitle) {
        if (ImageOptions) {
            var src = ImageOptions.src;
            return _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('img', { src: src, alt: brandTitle })
            );
        }
        return null;
    },
    render: function render() {
        var props = this.props,
            config = props.config,
            type = config.bootstrap.type || '',
            BSClassNames = 'navbar navbar-default ' + type,
            brandOpts = config.bootstrap.brand,
            brand = brandOpts ? _react2.default.createElement(_bsBrand2.default, { config: config, opts: brandOpts }) : null;
        return _react2.default.createElement(
            'nav',
            { className: BSClassNames },
            _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                brand,
                _react2.default.createElement(
                    'div',
                    { id: config.id, className: 'collapse navbar-collapse' },
                    _react2.default.createElement(_bsList2.default, { config: config, links: props.links, rootNav: true })
                )
            )
        );
    }
});

exports.default = BSNav;