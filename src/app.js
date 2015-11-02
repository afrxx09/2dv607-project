var React = require('react'),
    ReactDOM = require('react-dom'),
    HelloWorld = require('./components/hello-world.js');
    
ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('wrap')
);

/*//Vanilla
var React = require('react'),
    ReactDOM = require('react-dom');
    
ReactDOM.render(
    <h1>Hello world</h1>,
    document.getElementById('wrap')
);
*/