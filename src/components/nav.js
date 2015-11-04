var React = require('react'),
    Link = require('react-router').Link;

var Nav = React.createClass({
    render: function(){
        return (
            <div id="nav">
                <ul>
                    <li><Link to="/">Hello world</Link></li>
                    <li><Link to="/count">Count</Link></li>
                </ul>
                <div className="clear"/>
            </div>
        );
    }
});

module.exports = Nav;