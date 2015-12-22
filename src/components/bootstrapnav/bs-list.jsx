import React from 'react';

class BSList extends React.Component {
    render(){
        let props = this.props,
            classes = props.rootNav ? 'nav navbar-nav' : 'dropdown-menu';
        return (
            <ul className={classes}>
                {props.listItems}
            </ul>
        );
    }
}

export default BSList;
