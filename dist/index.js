'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapnav = require('./bootstrapnav');

var _bootstrapnav2 = _interopRequireDefault(_bootstrapnav);

var _vanillanav = require('./vanillanav');

var _vanillanav2 = _interopRequireDefault(_vanillanav);

var _routesParser = require('./routes-parser');

var _routesParser2 = _interopRequireDefault(_routesParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    var routes = props.routes[0] || [],
        rootPath = routes.path || null,
        links = (0, _routesParser2.default)(routes, rootPath),
        config = props.config || {};
    if (!config.id) {
        config.id = 'asd-nav';
    }
    var Nav = config.bootstrap ? _bootstrapnav2.default : _vanillanav2.default;
    return _react2.default.createElement(Nav, { config: config, links: links });
};