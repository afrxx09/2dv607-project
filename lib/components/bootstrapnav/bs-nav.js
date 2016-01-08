'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _bsBrand = require('./bs-brand');

var _bsBrand2 = _interopRequireDefault(_bsBrand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSNav = function (_React$Component) {
    _inherits(BSNav, _React$Component);

    function BSNav() {
        _classCallCheck(this, BSNav);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BSNav).apply(this, arguments));
    }

    _createClass(BSNav, [{
        key: 'getBrandImage',
        value: function getBrandImage(ImageOptions, brandTitle) {
            if (ImageOptions) {
                var src = ImageOptions.src;
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('img', { src: src, alt: brandTitle })
                );
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
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
                        this.props.children
                    )
                )
            );
        }
    }]);

    return BSNav;
}(_react2.default.Component);

exports.default = BSNav;