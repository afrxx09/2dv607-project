import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component{
    mapLinks(routes){
        return routes.map(function(route){
            return {
                href: route.path,
                title: route.title
            }
        });
    }
    mapHtmlLinks(links){
        return links.map(function(link, n){
            return <li key={n}>
                <Link to={link.href}>{link.title}</Link>
            </li>
        });
    }
    render(){
        var links = this.mapLinks(this.props.routes.routes);
        var htmlLinks = this.mapHtmlLinks(links);
        return(
            <div id="nav">
                <ul>
                    {htmlLinks}
                </ul>
            </div>
        );
    }
}