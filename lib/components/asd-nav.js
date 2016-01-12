'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _configFactory = require('../utils/config-factory');

var _routesParser = require('../utils/routes-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AsdNav = (function (_React$Component) {
    _inherits(AsdNav, _React$Component);

    function AsdNav() {
        _classCallCheck(this, AsdNav);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AsdNav).apply(this, arguments));
    }

    _createClass(AsdNav, [{
        key: 'getLinks',
        value: function getLinks(routes) {
            if (routes && routes.length) {
                return (0, _routesParser.routesParser)(routes[0]);
            }
            return [];
        }
    }, {
        key: 'render',
        value: function render() {
            var links = this.getLinks(this.props.routes),
                config = (0, _configFactory.configFactory)(this.props.config);
            var _config$components = config.components;
            var Nav = _config$components.Nav;
            var List = _config$components.List;

            return _react2.default.createElement(
                Nav,
                { config: config },
                links && links.length ? _react2.default.createElement(List, { links: links, rootNav: true, config: config }) : null
            );
        }
    }]);

    return AsdNav;
})(_react2.default.Component);

exports.default = AsdNav;