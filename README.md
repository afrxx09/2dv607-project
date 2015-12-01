# AsdNav - 2dv607-project

Project repo for LNU course: 2dv607 - RIA-development with JavaScript

## A React Router Navigation component

A navigation component to create navigation for react applications, uses react router to set up routes.

## Install

Using npm.

```npm install asd-nav --save-dev```

## How to

Asd Nav uses the application's routes from React Router to create navigation in the form of HTML DOM for your application.

Set up a React Router with a root path and component just like normal.

```
<Router>
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='info'>
            <IndexRoute component={Info}/>
            <Route path='about' component={About}/>
            <Route path='contact' component={Contact}/>
        </Route>
        <!--
        ...
        -->
    </Route>
</Router>
```

In the root(app/wrap) component, simply add the AsdNav where you wish to have your navigation rendered and pass on the routes using `this.props.routes`.

```
import AsdNav from 'asd-nav';
const App = React.createClass({
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
```

## Examples

Some runable examples with code to check out it can be used.

### Vanilla example

Renders a simple ul-li navigation wrapped in a div. Style it your self how ever you want.
[Run Vanilla example](http://afrxx09.github.io/2dv607-project/examples/normal/)
[Vanilla example code](https://github.com/afrxx09/2dv607-project/tree/gh-pages/examples/normal)

### Bootstrap example

Renders the DOM with bootstrap structure and classes. This requires bootstrap css, bootstrap js and jquery aswell.
[Run Bootstrap example](http://afrxx09.github.io/2dv607-project/examples/bootstrap/)
[Bootstrap example code](https://github.com/afrxx09/2dv607-project/tree/gh-pages/examples/bootstrap)