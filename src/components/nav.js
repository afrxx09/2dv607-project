var React = require('react'),
    Link = require("react-router").Link;

var Nav = React.createClass({
    render: function(){
        return (
            <ul id="nav">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hello-world'>Hello world</Link></li>
            </ul>
        );
    }
});

module.exports = Nav;