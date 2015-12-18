import React from 'react';
import ListItem from './list-item';


const List = React.createClass({
    render(){
        let config = this.props.config;
        let listItems = this.props.links.map(function(link, n){
            return <ListItem key={n} link={link} config={config}/>;
        });
        return (
            <ul>{listItems}</ul>
        );
    }
});

export default List;