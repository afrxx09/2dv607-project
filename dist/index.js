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

var DEFAULT_NAV_ID = 'asd-nav';

var AsdNav = _react2.default.createClass({
    displayName: 'AsdNav',
    getLinks: function getLinks(routes) {
        if (routes && routes.length) {
            return (0, _routesParser2.default)(routes[0]);
        }
        return [];
    },
    render: function render() {
        var links = this.getLinks(this.props.routes),
            config = this.props.config || {};
        if (!config.id) {
            config.id = DEFAULT_NAV_ID;
        }
        var Nav = config.bootstrap ? _bootstrapnav2.default : _vanillanav2.default;
        return _react2.default.createElement(Nav, { config: config, links: links });
    }
});

exports.default = AsdNav;