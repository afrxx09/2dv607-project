import React, { Component } from 'react';
import { Link } from 'react-router';
import MyNavLinks from './my-nav-links.jsx';

export default class MyNavLink extends Component{
    render(){
        let title = this.props.link.title,
            href = this.props.link.href || null,
            children = (this.props.link.children) ?
                <MyNavLinks links={this.props.link.children}/> :
                null,
            aTag = (!href) ?
                title :
                <Link to={href}>{title}</Link>;
        return(
            <li>
                {aTag}
                {children}
            </li>
        );
    }
}