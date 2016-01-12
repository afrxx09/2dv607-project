import React from 'react';
import { listItemsFactory } from '../../utils/list-items-factory';

class List extends React.Component {
    render(){
        let listItems = listItemsFactory(this.props.links, this.props.config);
        return (
            <ul>{listItems}</ul>
        );
    }
}

export default List;
