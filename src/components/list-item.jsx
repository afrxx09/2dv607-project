import React, { Component } from 'react';
import { Link } from 'react-router';
import List from './list.jsx';

export default class ListItem extends Component{
    render(){
        let title = this.props.link.title,
            href = this.props.link.href || null,
            children = this.props.link.children,
            config = this.props.config;
            
        let aTag = (!href) ?
            title :
            <Link to={href}>{title}</Link>;
        if(children && children.length > 0){
            return(
                <li>
                    {aTag}
                    <List links={children} config={config}/>
                </li>
            );
        }
        return(
            <li>
                {aTag}
            </li>
        );
    }
}