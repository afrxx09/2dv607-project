'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.listItemsFactory = listItemsFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function listItemsFactory(links) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (links && links.length && config.components && config.components.ListItem) {
        var _ret = (function () {
            var ListItem = config.components.ListItem;
            return {
                v: links.map(function (link, key) {
                    return _react2.default.createElement(ListItem, { link: link, key: key, config: config });
                })
            };
        })();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    return null;
};