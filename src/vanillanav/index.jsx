import React from 'react'
import List from './list';

export default (props)=> {
    return (
        <div id={props.config.id}>
            <List {...props}/>
        </div>
    );
}