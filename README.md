# AsdNav - 2dv607-project

Project repo for LNU course: 2dv607 - RIA-development with JavaScript

## A React Router Navigation component

A navigation component to create navigation for react applications, uses react router to set up routes.

## Install

Using npm.

```npm install asd-nav```

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
import { AsdNav } from 'asd-nav';
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

### Setting link text

To decide the text for a link, simply add a title-attribute to that route.

*If no title is supplied, component name will be used. If that can not be found an anoying "un-named link" text will take its place*

```
<Router>
    <Route path='/' component={Home} title='Start page'/>
    <Route path='/about' component={About}/>
    <Route path='/contact'/>
    <!--
    ...
    -->
</Router>
```

```
<div id="asd-nav">
    <ul>
        <li><a href="/">Start page</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Un-named link</a></li>
        <!--
        ...
        -->
    </ul>
</div>
```

### Hide a link

To not render a route as a link, just add the attribute hide.

*Some Routes are not rendered by default, see details below.*

```
<Router>
    <Route path='/' component={Home} title='Start page'/>
    <Route path='/secret' component={Secret} hide={true}/>
    <!--
    ...
    -->
</Router>
```

```
<div id="asd-nav">
    <ul>
        <li><a href="/">Start page</a></li>
        <!--
        ...
        -->
    </ul>
</div>
```

#### Hidden by default

As mentioned above, some routes will by default not be renderd in the menu.

**Parameter-routes**
```
<Router>
    <Route path='/member/:id' component={Member}/>
</Router>
```

**Routes without components and no children**
```
<Router>
    <Route path='/about'/>
</Router>
```

**Routes without components where none of the children has a component or is a parameter-path**
```
<Router>
    <Route path='/contact'>
        <Route path=':departmentId'/>
        <Route path='contact-form'/>
    </Route>
</Router>
```

##### routes without components that

## Config

It is possible to pass a config object to the AsdNav component for some additional settings. These are the valid options:

**id**: string, the id attribute value of the root element.

**bootstrap**: boolean|Object, boolean value to simply render the navigation with default Bootstrap DOM. Object see below.

**bootstrap.type**: string, bootstrap menu types: "navbar-fixed-top" etc.

**bootstrap.brand**: Object, Options fot the bootstrap menu brand.

**bootstrap.brand.href**: string, Path for brand link.

**bootstrap.brand.title**: string, Text for brand link.

**bootstrap.brand.image**: string, Path for brand image.

```
{
    id: 'my-nav-root',
    bootstrap: {
        brand: {
            href: '/',
            title: 'My page Title',
            image: 'brand-image-path'
        }
    }
}
```

### Passing the config to AsdNav

Create an Object with the config settings and pass it to AsdNav with the config-attribute.

```
import { AsdNav } from 'asd-nav';
const App = React.createClass({
    render(){
        let myNavConfig = {
            id: 'my-own-id'
        };
        return(
            <div id="wrap">
                <h1>App</h1>
                <AsdNav routes={this.props.routes} config={myNavConfig}/>
                {this.props.children}
            </div>
        );
    }
});
```

## Examples

Some runable examples with code to check out it can be used.

### Vanilla example

Renders a simple ul-li navigation wrapped in a div. Style it your self how ever you want. The example isn't anything fancy, just some simple css to show some basics.

[Run Vanilla example](http://afrxx09.github.io/2dv607-project/examples/vanilla/)

[Vanilla example code](https://github.com/afrxx09/2dv607-project/tree/gh-pages/examples/vanilla)

### Bootstrap example

Renders the DOM with bootstrap structure and classes. This requires bootstrap css, bootstrap js and jquery aswell.

[Run Bootstrap example](http://afrxx09.github.io/2dv607-project/examples/bootstrap/)

[Bootstrap example code](https://github.com/afrxx09/2dv607-project/tree/gh-pages/examples/bootstrap)
