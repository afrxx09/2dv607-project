import React, { Component } from 'react';
import { Router } from 'react-router';
import MyNavLink from './my-nav-link.jsx';

export default class MyNavLinks extends Component{
    render(){
        
        let myNavLinks = this.props.links.map(function(link, n){
            return <MyNavLink key={n} link={link}/>
        });
        
        return(
            <ul>
                {myNavLinks}
            </ul>
        );
        
    }
    
} 