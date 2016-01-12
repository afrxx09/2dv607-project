'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BSListItem = (function (_React$Component) {
    _inherits(BSListItem, _React$Component);

    function BSListItem() {
        _classCallCheck(this, BSListItem);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BSListItem).apply(this, arguments));
    }

    _createClass(BSListItem, [{
        key: 'render',
        value: function render() {
            var props = this.props,
                title = props.link.title,
                href = props.link.href || '',
                children = props.link.children,
                List = this.props.config.components.List;

            if (children && children.length) {
                return _react2.default.createElement(
                    'li',
                    { className: 'dropdown' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: href, activeClassName: 'active', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                        title,
                        ' ',
                        _react2.default.createElement('span', { className: 'caret' })
                    ),
                    _react2.default.createElement(List, { links: children, config: this.props.config })
                );
            }
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: href, activeClassName: 'active' },
                    title
                )
            );
        }
    }]);

    return BSListItem;
})(_react2.default.Component);

exports.default = BSListItem;