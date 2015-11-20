import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MyNavLink extends Component{
    render(){
        let href = this.props.link.href,
            title = this.props.link.title;
        return(
            <li>
                <Link to={href}>{title}</Link>
            </li>
        );
    }
}