import React from 'react';
import { configFactory } from '../utils/config-factory';
import { routesParser }  from '../utils/routes-parser';

class AsdNav extends React.Component {
    getLinks(routes){
        if(routes && routes.length){
            return routesParser(routes[0]);
        }
        return [];
    }

    render(){
        let links = this.getLinks(this.props.routes),
            config = configFactory(this.props.config);
        let {Nav, List} = config.components;
        return (
            <Nav config={config}>
                {links && links.length ? <List links={links} rootNav={true} config={config}/> : null}
            </Nav>
        );
    }
}

export default AsdNav;