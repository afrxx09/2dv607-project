import React from 'react';

import BSNav from '../components/bootstrapnav/bs-nav';
import BSList from '../components/bootstrapnav/bs-list';
import BSListItem from '../components/bootstrapnav/bs-list-item';
import VanillaNav from '../components/vanillanav/nav';
import VanillaList from '../components/vanillanav/list';
import VanillaListItem from '../components/vanillanav/list-item';

const DEFAULT_NAV_ID = 'asd-nav';
const bootstrapComponents = {
    Nav: BSNav,
    List: BSList,
    ListItem: BSListItem,
};
const vanillaComponents = {
    Nav: VanillaNav,
    List: VanillaList,
    ListItem: VanillaListItem,
};

export function configFactory(config = {}) {
    config.id = config.id || DEFAULT_NAV_ID;

    let defaultComponents = config.bootstrap
        ? bootstrapComponents
        : vanillaComponents;
    config.components = config.components || {};
    config.components.Nav = config.components.Nav || defaultComponents.Nav;
    config.components.ListItem = config.components.ListItem || defaultComponents.ListItem;
    config.components.List = config.components.List || defaultComponents.List;;
    return config;
}
