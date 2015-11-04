var React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    Provider = require('react-redux').Provider,
    store = require('./store'),
    routes = require('./routes');

ReactDOM.render(
    <Provider store={store}>
        <Router routes={routes}/>
    </Provider>,
    document.getElementById('app')
);