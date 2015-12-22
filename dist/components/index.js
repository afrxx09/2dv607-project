'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapnav = require('./bootstrapnav');

var _bootstrapnav2 = _interopRequireDefault(_bootstrapnav);

var _bsList = require('./bootstrapnav/bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

var _bsListItem = require('./bootstrapnav/bs-list-item');

var _bsListItem2 = _interopRequireDefault(_bsListItem);

var _vanillanav = require('./vanillanav');

var _vanillanav2 = _interopRequireDefault(_vanillanav);

var _list = require('./vanillanav/list');

var _list2 = _interopRequireDefault(_list);

var _listItem = require('./vanillanav/list-item');

var _listItem2 = _interopRequireDefault(_listItem);

var _routesParser = require('../utils/routes-parser');

var _routesParser2 = _interopRequireDefault(_routesParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_NAV_ID = 'asd-nav';

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
                return (0, _routesParser2.default)(routes[0]);
            }
            return [];
        }
    }, {
        key: 'render',
        value: function render() {
            var links = this.getLinks(this.props.routes),
                config = this.props.config || {};
            if (!config.id) {
                config.id = DEFAULT_NAV_ID;
            }
            var defaultComponents = config.bootstrap ? {
                Nav: _bootstrapnav2.default,
                List: _bsList2.default,
                ListItem: _bsListItem2.default
            } : {
                Nav: _vanillanav2.default,
                List: _list2.default,
                ListItem: _listItem2.default
            };
            config.components = config.components ? Object.create(config.components) : {};
            config.components.Nav = config.components.Nav || defaultComponents.Nav;
            config.components.ListItem = config.components.ListItem || defaultComponents.ListItem;
            var List = config.components.List || defaultComponents.List;
            var ListFactory = function ListFactory(props) {
                var links = props.links;

                var props = _objectWithoutProperties(props, ['links']);

                var ListItem = config.components.ListItem;
                var listItems = links.map(function (link, key) {
                    return _react2.default.createElement(ListItem, { link: link, key: key, config: config });
                });

                return _react2.default.createElement(List, _extends({ listItems: listItems }, props));
            };
            config.components.List = ListFactory;
            var Nav = config.components.Nav;
            return _react2.default.createElement(
                Nav,
                { config: config },
                _react2.default.createElement(ListFactory, { links: links, rootNav: true })
            );
        }
    }]);

    return AsdNav;
})(_react2.default.Component);

exports.default = AsdNav;