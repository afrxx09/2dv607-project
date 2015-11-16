import React, { Component } from 'react';
import { createRoutes } from 'react-router';
//import MyNavLinks from './my-nav-links.jsx';

export default class MyNav extends Component{
    render(){
        let routes = this.props.routes || [];
        console.log(createRoutes(routes));
        /*
        let links = this.props.routes.routes.map(function(route){
            return {
                href: route.path,
                title: route.title
            }
        });
        */
        return(
            <div id="nav">
                {/*<MyNavLinks links={links}/>*/}
            </div>
        );
        
    }
}