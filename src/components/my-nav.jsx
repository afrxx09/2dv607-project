import React, { Component } from 'react';
import List from './list.jsx';
import BSList from './bs-list.jsx';
import parseLinks from './routes-parser.jsx';

export default class MyNav extends Component{
    getLinks(){
        let routes = this.props.routes[0] || [];
        return parseLinks(routes);
    }
    render(){
        let links = this.getLinks(),
            config = this.props.config;
        if(config.bootstrap){
            let BSClassNames = 'navbar navbar-default';
            return(
                <nav className={BSClassNames}>
                    <div className="container">
                        <BSList config={config} links={links} rootNav={true}/>
                    </div>
                </nav>
            );
        }
        return(
            <div>
                <List links={links} />
            </div>
        );
        
    }
}