import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import MyNav from './../../../dist/index.js';

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

const Members = React.createClass({
    render(){
        return(
            <div>
                <h2>Members</h2>
                <ul>
                    <li><Link to='/members/1'>Memeber 1</Link></li>
                    <li><Link to='/members/2'>Memeber 2</Link></li>
                    <li><Link to='/members/3'>Memeber 3</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
});

const Member = React.createClass({
    render(){
        let { id } = this.props.params
        return(
            <h3>Member id: {id}</h3>
        );
    }
});

const User = React.createClass({
    render(){
        let { userId } = this.props.params
        return(
            <h2>User id: {userId}</h2>
        );
    }
});

const TopFriends = React.createClass({
    render(){
        return(
            <h2>Top Friends</h2>
        );
    }
});

const Friend = React.createClass({
    render(){
        let { friendId } = this.props.params
        return(
            <h2>Friend id: {friendId}</h2>
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
            <Route path='members' component={Members}>
                <Route path=':id' component={Member}/>
            </Route>
            <Route path='users'>
                <Route path=':userId' component={User}/>
            </Route>
            <Route path='friends'>
                <Route path='top-friends' component={TopFriends}/>
                <Route path=':friendId' component={Friend}/>
            </Route>
            <Route path='hidden'>
                <Route hide={true}/>
                <Route path='not-hidden' title='not hidden' component={Contact1} hide={false} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);