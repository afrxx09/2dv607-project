var React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Link = ReactRouter.Link,
    render = require('react-dom').render;

var AsdNav = require('./../../../lib/index.js');

var App = React.createClass({
    render(){
        return(
            <div id="wrap">
                <h1>App</h1>
                <AsdNav routes={this.props.routes}/>
                {this.props.children}
            </div>
        );
    }
});

var Home = React.createClass({
    render(){
        return(
            <h2>Home</h2>
        );
    }
});
var Info1 = React.createClass({
    render(){
        return(
            <h2>Info 1</h2>
        );
    }
});
var Info2 = React.createClass({
    render(){
        return(
            <h2>Info 2</h2>
        );
    }
});
var Info3 = React.createClass({
    render(){
        return(
            <h2>Info 3</h2>
        );
    }
});
var About = React.createClass({
    render(){
        return(
            <h2>About</h2>
        );
    }
});
var Contact1 = React.createClass({
    render(){
        return(
            <h2>Contact 1</h2>
        );
    }
});
var Contact2 = React.createClass({
    render(){
        return(
            <h2>Contact 2</h2>
        );
    }
});

var Members = React.createClass({
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

var Member = React.createClass({
    render(){
        var id = this.props.params.id;
        return(
            <h3>Member id: {id}</h3>
        );
    }
});

var User = React.createClass({
    render(){
        var userId = this.props.params.userId;
        return(
            <h2>User id: {userId}</h2>
        );
    }
});

var TopFriends = React.createClass({
    render(){
        return(
            <h2>Top Friends</h2>
        );
    }
});

var Friend = React.createClass({
    render(){
        var friendId = this.props.params.friendId;
        return(
            <h2>Friend id: {friendId}</h2>
        );
    }
});

render(
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home} title="da home"/>
            
            <Route path="/members/">
                <IndexRoute component={Members} />
                <Route path="/member/:id" component={Member} />
            </Route>
            <Route path="/membs">
                <IndexRoute component={Members} />
                <Route path="/mem/:id" component={Member} />
            </Route>
            
            <Route path='info'>
                <IndexRoute component={Info1}/>
                <Route path='i2' component={Info2} title="nfo"/>
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
