'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = (function (_Component) {
    _inherits(ListItem, _Component);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'getLink',
        value: function getLink(href, title) {
            if (href) {
                return _react2.default.createElement(
                    _reactRouter.Link,
                    { to: href },
                    title
                );
            }
            return title;
        }
    }, {
        key: 'getSubList',
        value: function getSubList(children) {
            if (children && children.length) {
                return _react2.default.createElement(_list2.default, { config: this.props.config, links: children });
            }
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            var link = this.getLink(this.props.link.href, this.props.link.title),
                subList = this.getSubList(this.props.link.children);
            return _react2.default.createElement(
                'li',
                null,
                link,
                subList
            );
        }
    }]);

    return ListItem;
})(_react.Component);

exports.default = ListItem;
;