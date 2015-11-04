var React = require('react'),
    ptypes = React.PropTypes,
    ReactRedux = require('react-redux'),
    actions = require('../actions');

var Count = React.createClass({
    propTypes: {
        increase: ptypes.func.isRequired,
        decrease: ptypes.func.isRequired
    },
    render: function(){
        return (
            <div>
                <h2>Count</h2>
                <p>Current count: {this.props.currentValue}</p>
                <p>
                    <button onClick={this.props.increase}>+</button>
                    <button onClick={this.props.decrease}>-</button>
                </p>
            </div>
        );
    }
});

var mapStateToProps = function(state){
    return state.count;
};

var mapDispatchToProps = function(dispatch){
    return {
        increase: function(){
            dispatch(actions.countIncrease());
        },
        decrease: function(){
            dispatch(actions.countDecrease());
        }
    }
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Count);