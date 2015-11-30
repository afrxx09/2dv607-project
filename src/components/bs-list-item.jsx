import React, { Component } from 'react';
import { Link } from 'react-router';
import BSList from './bs-list.jsx';

export default class BSListItem extends Component{
    render(){
        let title = this.props.link.title,
            href = this.props.link.href || '',
            children = this.props.link.children,
            config = this.props.config;
            
        if(children && children.length > 0){
            return(
                <li className='dropdown'>
                    <Link to={href} className='dropdown-toggle' data-toggle='dropdown'>
                        {title} <span className="caret"></span>
                    </Link>
                    <BSList links={children} config={config}/>
                </li>
            );
        }
        return(
            <li>
                <Link to={href}>{title}</Link>
            </li>
        );
    }
}