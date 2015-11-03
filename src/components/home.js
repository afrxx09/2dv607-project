var React = require('react');

var Home = React.createClass({
    getInitialState: function(){
        return {count: 0};
    },
    increaseValue: function(){
        this.setState({count: this.state.count + 1});
    },
    render: function(){
        return (
            <div>
                <h2>Home</h2>
                <p>The current count: {this.state.count}</p>
                <p><button onClick={this.increaseValue}>Increase value!</button></p>
            </div>
        );
    }
});

module.exports = Home;