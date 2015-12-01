import React, { Component } from 'react';
import List from './list';
import BSNav from './bs-nav';
import parseLinks from './routes-parser';

export default class MyNav extends Component{
    getLinks(){
        let routes = this.props.routes[0] || [];
        return parseLinks(routes);
    }
    render(){
        let links = this.getLinks(),
            config = this.props.config || {};
        if(!config.id){
            config.id = 'my-nav';
        }
        if(config.bootstrap){
            return(
                <BSNav config={config} links={links}/>
            );
        }
        return(
            <div id={config.id}>
                <List config={config} links={links}/>
            </div>
        );
        
    }
}