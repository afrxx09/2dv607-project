import React, { Component } from 'react';
import { Link } from 'react-router';
import MyNavLinks from './my-nav-links.jsx';

export default class MyNavLink extends Component{
    render(){
        let href = this.props.link.href,
            title = this.props.link.title,
            children = null;
            
        if(this.props.link.children){
            children = <MyNavLinks links={this.props.link.children}/>
        }
        return(
            <li>
                <Link to={href}>
                    {title}
                </Link>
                {children}
            </li>
        );
    }
}