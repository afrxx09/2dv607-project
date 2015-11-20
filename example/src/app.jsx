import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import MyNav from './../../src/index.jsx';

const App = React.createClass({
    render(){
        return(
            <div id="wrap">
                <h1>App</h1>
                <MyNav routes={this.props.routes}/>
                {this.props.children}
            </div>
        );
    }
});

const Home = React.createClass({
    render(){
        return(
            <h2>Home</h2>
        );
    }
});
const Info1 = React.createClass({
    render(){
        return(
            <h2>Info 1</h2>
        );
    }
});
const Info2 = React.createClass({
    render(){
        return(
            <h2>Info 2</h2>
        );
    }
});
const Info3 = React.createClass({
    render(){
        return(
            <h2>Info 3</h2>
        );
    }
});
const About = React.createClass({
    render(){
        return(
            <h2>About</h2>
        );
    }
});
const Contact1 = React.createClass({
    render(){
        return(
            <h2>Contact 1</h2>
        );
    }
});
const Contact2 = React.createClass({
    render(){
        return(
            <h2>Contact 2</h2>
        );
    }
});


render(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home} title="da home"/>
            <Route path='info'>
                <IndexRoute component={Info1}/>
                <Route path='i2' component={Info2} title="asd 2s"/>
                <Route path='i3' component={Info3}/>
            </Route>
            <Route path='about' component={About} title='Abt' />
            <Route>
                <Route path='conact1' component={Contact1}/>
                <Route path='conact2' component={Contact2}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);