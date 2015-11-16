import ReactDom from 'react-dom'
import React from 'react'
import TheNav from './../../src/index.jsx';

var routes = require('./routes.json');

ReactDom.render(
    <TheNav routes={routes}/>,
    document.getElementById('app')
);