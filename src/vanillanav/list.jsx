import React, { Component } from 'react';
import ListItem from './list-item';

export default class List extends Component{
    render(){
        let config = this.props.config;
        let listItems = this.props.links.map(function(link, n){
            return <ListItem key={n} link={link} config={config}/>;
        });
        return (
            <ul>{listItems}</ul>
        );
    }
};