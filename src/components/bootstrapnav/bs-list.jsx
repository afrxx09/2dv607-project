import React from 'react';
import { listItemsFactory } from '../../utils/list-items-factory';

class BSList extends React.Component {
    render(){
        let props = this.props,
            classes = props.rootNav ? 'nav navbar-nav' : 'dropdown-menu';
        return (
            <ul className={classes}>
                {listItemsFactory(this.props.links, this.props.config)}
            </ul>
        );
    }
}

export default BSList;
