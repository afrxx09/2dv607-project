import React from 'react'
import { Link } from 'react-router';
import List from './list';

export default (props)=> {
    let title = props.link.title,
        href = props.link.href || null,
        children = props.link.children,
        link = href ? <Link to={href}>{title}</Link> : title,
        subList = children && children.length ? 
            <List links={children} config={props.config}/> :
            null;
    return (
        <li>
            {link}
            {subList}
        </li>
    );
}