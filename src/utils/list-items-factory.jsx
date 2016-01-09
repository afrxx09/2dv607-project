import React from 'react';

export function listItemsFactory(links, config = {}) {
    if((links && links.length) && (config.components && config.components.ListItem)){
        let ListItem = config.components.ListItem;
        return links.map((link, key) => {
            return <ListItem link={link} key={key} config={config} />
        });
    }
    return null;
};