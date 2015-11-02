var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
    HelloWorld = require('./components/hello-world');

module.exports = (
    <Route path="/" component={Wrap}>
        <IndexRoute component={HelloWorld}/>
    </Route>
);