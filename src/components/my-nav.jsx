import React, { Component } from 'react';
import MyNavLinks from './my-nav-links.jsx';
import parseLinks from './routes-parser.jsx';

export default class MyNav extends Component{
    getLinks(){
        let routes = this.props.routes[0] || [];
        return parseLinks(routes);
    }
    render(){
        let links = this.getLinks();
        return(
            <div id="nav">
                <MyNavLinks links={links}/>
            </div>
        );
        
    }
}