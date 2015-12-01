import React from 'react'
import { Link } from 'react-router';
import List from './list';

export default (props)=> {
    let title = props.link.title,
        href = props.link.href || null,
        children = props.link.children,
        config = props.config;
        
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