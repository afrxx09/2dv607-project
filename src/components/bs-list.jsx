import React, { Component } from 'react';
import BSListItem from './bs-list-item.jsx';

export default class List extends Component{
    render(){
        let config = this.props.config;
        let listItems = this.props.links.map(function(link, n){
            return <BSListItem key={n} link={link} config={config}/>
        });
        if(this.props.rootNav){
            return(
                <ul className='nav navbar-nav'>
                    {listItems}
                </ul>
            );
        }
        return(
            <ul className='dropdown-menu'>
                {listItems}
            </ul>
        );
        
    }
    
} 