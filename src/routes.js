var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Wrap = require('./components/wrap');
    Home = require('./components/home');
    HelloWorld = require('./components/hello-world');

module.exports = (
    <Route path='/' component={Wrap}>
        <IndexRoute component={Home}/>
        <Route path='/hello-world' component={HelloWorld}/>
    </Route>
);