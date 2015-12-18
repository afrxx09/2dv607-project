'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BSBrandImage = _react2.default.createComponent({
    render: function render() {
        var imageOptions = this.props.opts;
        return _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement('img', { src: imageOptions.src, alt: this.props.title })
        );
    }
});

exports.default = BSBrandImage;