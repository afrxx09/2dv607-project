import React from 'react';
import List from './list';

const VanillaNav = React.createClass({
    render(){
        return (
            <div id={this.props.config.id}>
                <List config={this.props.config} links={this.props.links}/>
            </div>
        );
    }
});

export default VanillaNav;