var React = require('react');

var Wrap = React.createClass({
    render: function(){
        return (
            <div id="wrap">
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrap;