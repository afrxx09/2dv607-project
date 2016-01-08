import React from 'react';

class VanillaNav extends React.Component {
    render(){
        return (
            <div id={this.props.config.id}>
                {this.props.children}
            </div>
        );
    }
};

export default VanillaNav;
