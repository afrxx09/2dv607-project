import React, { Component } from 'react';
import BSNav from './bootstrapnav';
import VanillaNav from './vanillanav';
import routesParser from './routes-parser';

const DEFAULT_NAV_ID = 'asd-nav';

export default class AsdNav extends Component{
    getLinks(routes){
        if(routes && routes.length){
            return routesParser(routes[0]);
        }
        return [];
    }
    render(){
        let links = this.getLinks(this.props.routes),
            config = this.props.config || {};
        if(!config.id){
            config.id = DEFAULT_NAV_ID;
        }
        let Nav = config.bootstrap ? BSNav : VanillaNav;
        return (
            <Nav config={config} links={links} />
        );
    }
};