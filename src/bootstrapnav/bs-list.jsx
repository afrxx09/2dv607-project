import React, { Component } from 'react';
import BSListItem from './bs-list-item';

export default class BSList extends Component{
    render(){
        let props = this.props,
            listItems = props.links.map(function(link, n){
            return <BSListItem key={n} link={link} config={props.config}/>
        }),
            classes = props.rootNav ? 'nav navbar-nav' : 'dropdown-menu';
        return (
            <ul className={classes}>
                {listItems}
            </ul>
        );
    }
};