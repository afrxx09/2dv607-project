'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setDefaultValues = setDefaultValues;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bootstrapnav = require('../components/bootstrapnav');

var _bootstrapnav2 = _interopRequireDefault(_bootstrapnav);

var _bsList = require('../components/bootstrapnav/bs-list');

var _bsList2 = _interopRequireDefault(_bsList);

var _bsListItem = require('../components/bootstrapnav/bs-list-item');

var _bsListItem2 = _interopRequireDefault(_bsListItem);

var _vanillanav = require('../components/vanillanav');

var _vanillanav2 = _interopRequireDefault(_vanillanav);

var _list = require('../components/vanillanav/list');

var _list2 = _interopRequireDefault(_list);

var _listItem = require('../components/vanillanav/list-item');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_NAV_ID = 'asd-nav';
var bootstrapComponents = {
    Nav: _bootstrapnav2.default,
    List: _bsList2.default,
    ListItem: _bsListItem2.default
};
var vanillaComponents = {
    Nav: _vanillanav2.default,
    List: _list2.default,
    ListItem: _listItem2.default
};

function setDefaultValues() {
    var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    config.id = config.id || DEFAULT_NAV_ID;

    var defaultComponents = config.bootstrap ? bootstrapComponents : vanillaComponents;
    config.components = config.components || {};
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

    return config;
}