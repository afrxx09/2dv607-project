'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _bsList = require('./bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSNav = (function (_Component) {
    _inherits(BSNav, _Component);

    function BSNav() {
        _classCallCheck(this, BSNav);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BSNav).apply(this, arguments));
    }

    _createClass(BSNav, [{
        key: 'render',
        value: function render() {
            var config = this.props.config,
                links = this.props.links,
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
                { className: BSClassNames },
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
        }
    }]);

    return BSNav;
})(_react.Component);

exports.default = BSNav;