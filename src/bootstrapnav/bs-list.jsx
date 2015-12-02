import React from 'react'
import BSListItem from './bs-list-item';

export default (props)=> {
    let listItems = props.links.map(function(link, n){
        return <BSListItem key={n} link={link} config={props.config}/>
    });
    let classes = props.rootNav ? 'nav navbar-nav' : 'dropdown-menu';
    return (
        <ul className={classes}>
            {listItems}
        </ul>
    );
}
