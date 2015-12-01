import React, { Component } from 'react';
import List from './list.jsx';
import BSNav from './bs-nav.jsx';
import parseLinks from './routes-parser.jsx';

export default class MyNav extends Component{
    getLinks(){
        let routes = this.props.routes[0] || [];
        return parseLinks(routes);
    }
    render(){
        let links = this.getLinks(),
            config = this.props.config;
        if(!config.id){
            config.id = 'my-nav';
        }
        if(config.bootstrap){
            return(
                <BSNav config={config} links={links}/>
            );
        }
        return(
            <div>
                <List links={links} config={config}/>
            </div>
        );
        
    }
}