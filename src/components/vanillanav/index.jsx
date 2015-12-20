import React from 'react';
import List from './list';

class VanillaNav extends React.Component {
    render(){
        return (
            <div id={this.props.config.id}>
                <List config={this.props.config} links={this.props.links}/>
            </div>
        );
    }
};

export default VanillaNav;
