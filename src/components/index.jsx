import React from 'react';
import BSNav from './bootstrapnav';
import BSList from './bootstrapnav/bs-list';
import BSListItem from './bootstrapnav/bs-list-item';
import VanillaNav from './vanillanav';
import VanillaList from './vanillanav/list';
import VanillaListItem from './vanillanav/list-item';

import routesParser from '../utils/routes-parser';

const DEFAULT_NAV_ID = 'asd-nav';

class AsdNav extends React.Component {
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
        let defaultComponents = config.bootstrap
            ? {
                Nav: BSNav,
                List: BSList,
                ListItem: BSListItem,
            }
            : {
                Nav: VanillaNav,
                List: VanillaList,
                ListItem: VanillaListItem,
            };
        config.components = config.components ? Object.create(config.components) : {};
        config.components.Nav = config.components.Nav || defaultComponents.Nav;
        config.components.ListItem = config.components.ListItem || defaultComponents.ListItem;
        let List = config.components.List || defaultComponents.List;
        let ListFactory = (props) => {
            let {links, ...props} = props;
            let ListItem = config.components.ListItem;
            let listItems = links.map(
                (link, key) => <ListItem link={link} key={key} config={config} />
            );

            return <List listItems={listItems} {...props} />;
        };
        config.components.List = ListFactory;
        let Nav = config.components.Nav;
        return (
            <Nav config={config}>
                <ListFactory links={links} rootNav={true} />
            </Nav>
        );
    }
}

export default AsdNav;
