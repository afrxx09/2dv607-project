import React from 'react'
import { Link } from 'react-router';
import BSList from './bs-list';

export default (props)=> {
    let title = props.link.title,
        href = props.link.href || '',
        children = props.link.children,
        config = props.config;
        
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