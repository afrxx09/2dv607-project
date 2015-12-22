import React from 'react';

class List extends React.Component {
    render(){
        return (
            <ul>{this.props.listItems}</ul>
        );
    }
}

export default List;
