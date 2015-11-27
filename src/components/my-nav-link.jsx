import React, { Component } from 'react';
import { Link } from 'react-router';
import MyNavLinks from './my-nav-links.jsx';

export default class MyNavLink extends Component{
    render(){
        let title = this.props.link.title,
            href = this.props.link.href || null,
            children = this.props.link.children,    
            aTag = (!href) ?
                title :
                <Link to={href}>{title}</Link>;
        if(children && children.length > 0){
            return(
                <li>
                    {aTag}
                    <MyNavLinks links={children}/>
                </li>
            );
        }
        else{
            return(
                <li>{aTag}</li>
            );
        }
    }
}