import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MyNavLink extends Component{
    render(){
        return(
            <li>
                <Link to={this.props.link.href}>{this.props.link.title}</Link>
            </li>
        );
    }
}