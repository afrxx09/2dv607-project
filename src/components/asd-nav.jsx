import React from 'react';

import {setDefaultValues} from '../utils/config';
import routesParser from '../utils/routes-parser';

class AsdNav extends React.Component {
    getLinks(routes){
        if(routes && routes.length){
            return routesParser(routes[0]);
        }
        return [];
    }

    render(){
        let links = this.getLinks(this.props.routes),
            config = setDefaultValues(this.props.config);
        let {Nav, List} = config.components;
        return (
            <Nav config={config}>
                <List links={links} rootNav={true} />
            </Nav>
        );
    }
}

export default AsdNav;
