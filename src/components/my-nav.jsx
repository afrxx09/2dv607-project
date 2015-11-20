import React, { Component } from 'react';
import ReactRouter, { createRoutes } from 'react-router';
import MyNavLinks from './my-nav-links.jsx';

export default class MyNav extends Component{
    render(){
        let routes = this.props.routes[0] || [];
        let indexRoute = routes.indexRoute || null;
        let childRoutes = routes.childRoutes || null; 
        let links = [];
        if(indexRoute){
            links.push({
                href: routes.path,
                title: indexRoute.title ||
                    indexRoute.component.displayName
            });
        }
        if(childRoutes && childRoutes.length > 0){
            for(let i = 0; i < childRoutes.length; i++){
                let child = childRoutes[i];
                links.push({
                    href: child.path,
                    title: child.title ||
                        child.component.displayName ||
                        child.component.name
                });
            }
        }
        return(
            <div id="nav">
                <MyNavLinks links={links}/>
            </div>
        );
        
    }
}