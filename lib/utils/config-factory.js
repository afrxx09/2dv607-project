'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configFactory = configFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bsNav = require('../components/bootstrapnav/bs-nav');

var _bsNav2 = _interopRequireDefault(_bsNav);

var _bsList = require('../components/bootstrapnav/bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

var _bsListItem = require('../components/bootstrapnav/bs-list-item');

var _bsListItem2 = _interopRequireDefault(_bsListItem);

var _nav = require('../components/vanillanav/nav');

var _nav2 = _interopRequireDefault(_nav);

var _list = require('../components/vanillanav/list');

var _list2 = _interopRequireDefault(_list);

var _listItem = require('../components/vanillanav/list-item');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_NAV_ID = 'asd-nav';
var bootstrapComponents = {
    Nav: _bsNav2.default,
    List: _bsList2.default,
    ListItem: _bsListItem2.default
};
var vanillaComponents = {
    Nav: _nav2.default,
    List: _list2.default,
    ListItem: _listItem2.default
};

function configFactory() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    config.id = config.id || DEFAULT_NAV_ID;

    var defaultComponents = config.bootstrap ? bootstrapComponents : vanillaComponents;
    config.components = config.components || {};
    config.components.Nav = config.components.Nav || defaultComponents.Nav;
    config.components.ListItem = config.components.ListItem || defaultComponents.ListItem;
    config.components.List = config.components.List || defaultComponents.List;;
    return config;
}