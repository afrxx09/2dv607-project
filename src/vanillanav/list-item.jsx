import React from 'react'
import { Link } from 'react-router';
import List from './list';

export default (props)=> {
    let title = props.link.title,
        href = props.link.href || null,
        children = props.link.children;
    return (<li>
        {href ? <Link to={href}>{title}</Link> : title}
        {children && children.length ? <List links={children} config={props.config}/> : ""}
    </li>);
}