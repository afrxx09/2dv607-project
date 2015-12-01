import React from 'react'
import BSListItem from './bs-list-item';

export default (props)=> {
    let config = props.config;
    let listItems = props.links.map(function(link, n){
        return <BSListItem key={n} link={link} config={config}/>
    });
    if(props.rootNav){
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
