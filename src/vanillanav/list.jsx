import React from 'react'
import ListItem from './list-item';

export default (props)=> {
    let listItems = props.links.map(function(link, n){
        return <ListItem key={n} link={link} config={props.config}/>
    });
    return <ul>{listItems}</ul>;
} 