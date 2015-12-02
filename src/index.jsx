import React from 'react'
import BSNav from './bootstrapnav';
import VanillaNav from './vanillanav';
import parseLinks from './routes-parser';

export default (props)=> {
    let routes = props.routes[0] || [],
        rootPath = routes.path || null,
        links = parseLinks(routes, rootPath),
        config = props.config || {};
    if(!config.id){
        config.id = 'asd-nav';
    }
    let Nav = config.bootstrap ? BSNav : VanillaNav;
    return <Nav {...{config,links}} />;
}